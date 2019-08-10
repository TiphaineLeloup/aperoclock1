<?php
namespace App\Controller\Api;

use Exception;
use App\Entity\Comment;
use App\Utils\DistanceCalculator;
use App\Repository\EventRepository;
use App\Repository\AppUserRepository;
use App\Repository\CommentRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CommentController extends AbstractController
{

    /**
    * @Route("/api/event/comments", name="event_comments", methods={"POST"})
    */
    public function comments(Request $request, EventRepository $eventRepository,CommentRepository $commentRepository, SerializerInterface $serializer)
     {
            if ($content = $request->getContent()){
             $data = json_decode($content, true);
            }
            $eventId = $data['eventId'];

            $comments = $commentRepository->findByEvent($eventId);
     

            $comments = $serializer->serialize($comments, 'json');
            return new JsonResponse($comments);


    }   



/**
 * @Route("/api/user/comment/create", name="comment_create", methods={"POST"})
 * @Route("/api/user/comment/edit", name="comment_edit", methods={"POST"})
 */
    public function newAndEdit(Request $request, SerializerInterface $serializer, EventRepository $eventRepository, \Swift_Mailer $mailer,
    AppUserRepository $userRepository, CommentRepository $commentRepository, ObjectManager $om , ValidatorInterface $validator)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }
 
        $eventId    = $frontDatas["eventId"];
        $userId     = $this->getUser();
        $event      = $eventRepository->find($eventId);
        $user       = $userRepository->find($userId);

        if (!isset($frontDatas['commentId'])) {

            $comment    = new Comment();
            $comment->setAppUser($user);
            $comment->setEvent($event);

        } else {

            $id = $frontDatas['commentId'];
            $comment = $commentRepository->find($id);
        }
        $comment = $serializer->deserialize($content, Comment::class, 'json', ['object_to_populate' => $comment]);

         $om->persist($comment);
         $om->flush();

         $eventGroup = $event->getAppGroup(); 
         $usersGroup = $eventGroup->getAppUsers(); 

         foreach ($usersGroup as $user) {
             $alerts = $user->getSubscriptions();
        
             foreach ($alerts as $alert) {
                 $alertName = "eventComment";
                    

                 //if the user has subscribed to event creation alert
                 if ($alert->getAlert()->getName() === $alertName
                    && $alert->getHasSubscribed() === true) {
                     $distanceAccepted = $user->getDistanceKM();

                        
                     $userLatitude = floatval($user->getAdress()->getLatitude());
                     $userLongitude = floatval($user->getAdress()->getLongitude());

                     $eventLatitude = floatval($event->getAdress()->getLatitude()); 
                    $eventLongitude = floatval($event->getAdress()->getLongitude());
                        
                     //service to calculate km differences between coordonates
                     $distanceCalculator = new DistanceCalculator();
                     $distanceDifference = $distanceCalculator
                                            ->distance($userLatitude, $userLongitude, $eventLatitude, $eventLongitude, $unit = 'k');

                     if ($distanceAccepted <= $distanceDifference) {
                         $usersToMail[] = $user;
                     }
                 }
             }

             foreach ($usersToMail as $user) {
                 $mail[] = $user->getEmail();
             }
        


             $message = (new \Swift_Message(' Nouveau post sur un évènement !'))
                ->setFrom('AperoclockRocket@gmail.com')
                ->setTo($mail)
                ->setBody($this->renderView('mails/eventComment.html.twig'), 'text/html');
        
             $mailer->send($message);
            
             return new JsonResponse(
                [
                    'status' => 'ok'
                ],
                JsonResponse::HTTP_CREATED
            );
     }      
    
}

    



    /**
        * @Route("/api/user/comment/delete", name="comment_delete", methods={"DELETE"})
        */
    public function delete(Request $request, CommentRepository $commentRepository, ObjectManager $om)
    {
        if ($content = $request->getContent()) {
            $data = json_decode($content, true);
        }
        $id = $data['commentId'];
        if (!$deletedComment = $commentRepository->find($id)) {
            return new JsonResponse(
                [
                    'status' => 'error',
                    
                ],
                JsonResponse::HTTP_BAD_REQUEST
            );
        } else {
            $om->remove($deletedComment);
            $om->flush();
            return new JsonResponse(
                [
                    'status' => 'ok'
                ],
                JsonResponse::HTTP_OK
            );
        }
    }
}
