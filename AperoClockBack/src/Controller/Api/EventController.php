<?php

namespace App\Controller\Api;

use App\Entity\Event;
use App\Entity\Adress;
use App\Form\EventType;
use App\Repository\EventRepository;
use App\Repository\GuestRepository;
use App\Repository\AppUserRepository;
use App\Repository\AppGroupRepository;
use App\Repository\EventAppUserRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EventController extends AbstractController
{
    /**
     * 
     * @Route("/api/user/events", name="events_user_list", methods={"POST"})
     */
    public function listByUser(Request $request, GuestRepository $guestRepository, SerializerInterface $serializer)
    {
        $frontDatas = [];
        if ( $content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }

        $userId = $frontDatas["userId"];

        //getting invitations to events for a user, regarding his ID
         $invitationsDatas = $guestRepository->findByUserId($userId);

         $invitationsDatas = $serializer->serialize($invitationsDatas, 'json');

        return new JsonResponse($invitationsDatas);

    }

    /**
     * @Route("api/user/event/edit", name="event_edit", methods={"POST"})
     * @Route("/api/user/event/create", name="event_new", methods={"POST"})
     */
    public function createOrEdit(Request $request, ObjectManager $objectManager, ValidatorInterface $validator,
    \Swift_Mailer $mailer, SerializerInterface $serializer, AppUserRepository $userRepository, EventRepository $eventRepository, ObjectManager $om, AppGroupRepository $appGroupRepository)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }

        $id = $frontDatas['userId'];
        $user = $userRepository->find($id); 

        $id= $frontDatas['groupId'];
        $group = $appGroupRepository->find($id);



        
        //get adress datas to hydrate Adress object first
        $adress = new Adress;
        $adress = $serializer->deserialize($content, Adress::class, 'json', [
            'object_to_populate' => $adress
            ]);
        $om->persist($adress);


        //Then, hydrate an object Event, create one if it dosent exist
         if (!isset($frontDatas['eventId'])){
            $event = new Event; 
        }else{
            $id = $frontDatas['eventId'];
            $event = $eventRepository->find($id);
        }
        
        $event = $serializer->deserialize($content, Event::class, 'json', [
            'object_to_populate' => $event
            ]); 
       

        //Set adress + user to complete Event Object
        $event->setAdress($adress);
        // $user->addEvent($event);
        $event->setCreatedBy($user);
        $event->setAppGroup($group);
       
        
        //Validation and send status
        $errors = $validator->validate($event);

        if (count($errors) > 0){

            $errorsString = (string) $errors;

            return new JsonResponse(
                [
                    'status' => 'error',
                    $errorsString
                ],
                JsonResponse::HTTP_BAD_REQUEST);
        }

        $om->persist($event);
        $om->flush();


        //get all users that belong to the group of the event to mail them
        $usersToMail = $appGroup->getAppUsers();
        foreach($usersToMail as $user){
            $mail[] = $user->getEmail();
            
        }

        $message = (new \Swift_Message('Un nouvel Event organisé par un de vos groupes !'))
            ->setFrom('AperoclockRocket@gmail.com')
            ->setTo('anaisbx2@hotmail.com')
            ->setBody(
                $this->renderView(
                    'event.html.twig'
                ), 'text/html'
            );
    
        $mailer->send($message);
        
        return new JsonResponse(
            [
                'status' => 'ok'
            ],
            JsonResponse::HTTP_CREATED
        );
        
        
    }

    /**
     * @Route("/api/user/event/delete", name="event_delete", methods={"DELETE"})
     */
    public function delete(Request $request, EventRepository $eventRepository, ObjectManager $om)
    {
        if ($content = $request->getContent()){
            $data = json_decode($content, true);
        }

        $id = $data['eventId'];

        if (!$eventToDelete = $eventRepository->find($id)){

            return new JsonResponse(
                [
                    'status' => 'error',
                    
                ],
                JsonResponse::HTTP_BAD_REQUEST);
        }else{
            $om->remove($eventToDelete);
            $om->flush();

            return new JsonResponse(
                [
                    'status' => 'ok'
                ],
                JsonResponse::HTTP_OK);
            
        }
    
    }

    /**
     * @Route("/api/event/infos", name="event_infos", methods={"POST"})
     */
    public function infos(Request $request, EventRepository $eventRepository, SerializerInterface $serializer)
    {
        $frontDatas = [];

        if ($content = $request->getContent()){
            $frontDatas = json_decode($content, true);
        }

        $id = $frontDatas['eventId'];
        

        $eventInfos = $eventRepository->find($id);

        $jsonContent = $serializer->serialize($eventInfos, 'json', ['ignored_attributes' => ['appUsers', 'createdBy', 'appGroup']]);

        return new JsonResponse($jsonContent);
    }



       

        
        



}
