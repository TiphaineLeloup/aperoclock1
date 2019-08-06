<?php
namespace App\Controller\Api;

use App\Entity\Comment;
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
    public function newAndEdit(Request $request, SerializerInterface $serializer, EventRepository $eventRepository, AppUserRepository $userRepository, CommentRepository $commentRepository, ObjectManager $om)
    {
        
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }
 
        
        if (!isset($frontDatas['commentId'])) {
            $comment    = new Comment();
            $eventId    = $frontDatas["eventId"];
            $userId     = $frontDatas['userId'];
            $event      = $eventRepository->find($eventId);
            $user       = $userRepository->find($userId);
     
            $comment->setAppUser($user);
            $comment->setEvent($event);
        } else {
            $id = $frontDatas['commentId'];
            $comment = $commentRepository->find($id);
        }
        $comment = $serializer->deserialize($content, Comment::class, 'json', ['object_to_populate' => $comment]);

    
        $om->persist($comment);
 
 
        $om->flush();
 
        return new JsonResponse(
            [
                'status' => 'ok',
            ],
            JsonResponse::HTTP_CREATED
        );
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
