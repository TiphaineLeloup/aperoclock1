<?php

namespace App\Controller\Api;

use Exception;
use App\Entity\Event;
use App\Entity\Guest;
use App\Entity\Adress;
use App\Form\EventType;
use App\Utils\DistanceCalculator;
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
     * @Route("/api/user/events", name="events_user_list", methods={"GET"})
     */
    public function listByUser(Request $request, GuestRepository $guestRepository, SerializerInterface $serializer)
    {

        //getting invitations to events for a user, regarding his ID
         $invitationsDatas = $guestRepository->findByUserId($this->getUser());

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

        $id = $this->getUser();
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
       
        
            $om->persist($event);
            
            
        
     

        //get all users that belong to the group of the event 
        $usersOfGroup = $group->getAppUsers();

        

        foreach ($usersOfGroup as $user){
            
           if (!isset($frontDatas['eventId'])){

                $invitedUser = new Guest();
                $invitedUser->setEvent($event);
                $invitedUser->setAppUser($user);
                $om->persist($invitedUser);
           }
            
            $om->flush();

            $alerts = $user->getSubscriptions();
        
            foreach ($alerts as $alert){

                if(isset($frontDatas['eventId'])){
                    $alertName = "eventEdit";
                }else{
                    $alertName = "eventCreate";
                }

                //if the user has subscribed to event creation alert
                if ($alert->getAlert()->getName() === $alertName 
                && $alert->getHasSubscribed() === true){
                    
                    $distanceAccepted = $user->getDistanceKM();

                    
                    $userLatitude = floatval($user->getAdress()->getLatitude());
                    $userLongitude = floatval($user->getAdress()->getLongitude());

                    $eventLatitude = floatval($frontDatas['latitude']);
                    $eventLongitude = floatval($frontDatas['longitude']);
                    
                    //service to calculate km differences between coordonates 
                    $distanceCalculator = new DistanceCalculator();
                    $distanceDifference = $distanceCalculator
                                        ->distance($userLatitude, $userLongitude, $eventLatitude, $eventLongitude, $unit = 'k');

                    if ($distanceAccepted <= $distanceDifference){

                        $usersToMail[] = $user;
                    }  
                }
            }
        }
        
        foreach($usersToMail as $user){
            $mail[] = $user->getEmail();   
        }
         

        //determines if the mail is about creation or edition
        if (isset($frontDatas['eventId'])){
                $view = $this->renderView('mails/eventEdit.html.twig');
            }else{
                $view = $this->renderView('mails/eventCreate.html.twig');
            }

            

        $message = (new \Swift_Message('IL y a du nouveau dans un de vos groupes !'))
            ->setFrom('AperoclockRocket@gmail.com')
            ->setTo($mail)
            ->setBody($view, 'text/html');
    
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
    public function delete(Request $request, EventRepository $eventRepository, ObjectManager $om, \Swift_Mailer $mailer)
    {
        if ($content = $request->getContent()){
            $frontDatas = json_decode($content, true);
        }

        $id = $frontDatas['eventId'];

        $eventToDelete = $eventRepository->find($id);

        $eventLatitude = floatval($eventToDelete->getAdress()->getLatitude()); 
        $eventLongitude = floatval($eventToDelete->getAdress()->getLongitude());
    
       
           
        $eventGroup = $eventToDelete->getAppGroup();
        $usersOfGroup = $eventGroup->getAppUsers();


        


            foreach ($usersOfGroup as $user){
                $alerts = $user->getSubscriptions();
                $adress = $user->getAdress();

            
                foreach ($alerts as $alert){
    
                    //if the user has subscribed to event creation alert
                    if ($alert->getAlert()->getName() === "eventDelete" 
                    && $alert->getHasSubscribed() === true){
                        
                        $distanceAccepted = $user->getDistanceKM();
    
                        $userLatitude = floatval($adress->getLatitude());
                        $userLongitude = floatval($adress->getLongitude());
    
                       
                        //service to calculate km differences between coordonates 
                        $distanceCalculator = new DistanceCalculator();
                        $distanceDifference = $distanceCalculator
                                            ->distance($userLatitude, $userLongitude, $eventLatitude, $eventLongitude, $unit = 'k');
    
                        if ($distanceAccepted <= $distanceDifference){
    
                            $usersToMail[] = $user;
                        }  
                    }
                }
            }
            
            $om->remove($eventToDelete);
            $om->flush();
            
            foreach($usersToMail as $user){
                $mail[] = $user->getEmail();
                
            }
    
           
    
            $message = (new \Swift_Message('Un évènement vient d\'être annulé ! '))
                ->setFrom('AperoclockRocket@gmail.com')
                ->setTo($mail)
                ->setBody($this->renderView('mails/eventDelete.html.twig'), 'text/html');
        
            $mailer->send($message);

            

        

            return new JsonResponse(
                [
                    'status' => 'ok'
                ],
                JsonResponse::HTTP_OK);
            
        
    
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
