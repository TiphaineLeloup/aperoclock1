<?php

namespace App\Controller\Api;

use Exception;
use App\Entity\Adress;
use App\Entity\AppUser;
use App\Entity\Subscription;
use App\Repository\AlertRepository;
use App\Repository\GuestRepository;
use App\Repository\AppUserRepository;
use App\Repository\AppGroupRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;




class UserController extends AbstractController
{

       /**
     *
     * @Route("/api/user/infos/list/", name="user_infos_list", methods={"GET"})
     */

    public function list(SerializerInterface $serializer)
    {
         $userInfos = $serializer->serialize($this->getUser(), 'json', [
            'ignored_attributes' => [
                'appGroups',
                 'events',
                 'subscriptions'
                ]
            ]);
        return new JsonResponse($userInfos);

    
    }


     /**
     *@Route("/api/user/infos/edit", name="user_infos_edit", methods={"POST"})
     * @Route("/api/user/signup", name="signup", methods={"POST"})
     */
    public function signUp(Request $request, AlertRepository $alertRepository, AppGroupRepository $appGroupRepository, ValidatorInterface $validator, SerializerInterface $serializer, ObjectManager $om, UserPasswordEncoderInterface $encoder)
    {
        $frontDatas = [];

        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }
        
        $adress = new Adress();
        $adress = $serializer->deserialize($content, Adress::class, 'json', [
            'object_to_populate' => $adress
            ]);
        
        $om->persist($adress);

        
        if ($this->getUser()){
            $user = $this->getUser(); 

        }else{
             $user = new AppUser();
        }
       
        $user = $serializer->deserialize($content, AppUser::class, 'json', [
            'object_to_populate' => $adress,
            
        ]);
       
        $user->setAdress($adress);

       
        $encodedPassword = $encoder->encodePassword(
            $user, 
            $user->getPassword() 
       );
       $user->setPassword($encodedPassword);

       //if new User, he suscribes all mail alerts
       if (!$this->getUser()){
            $alerts = $alertRepository->findAll();
            
            foreach ($alerts as $alert){

                $subscription = new Subscription();
                $subscription->setAlert($alert);
                $subscription->setAppUser($user);
                $om->persist($subscription);
                
                $id = $frontDatas['groupId'];
                $group = $appGroupRepository->find($id);
                $group->addAppUser($user);
            }
       }

       

       $om->persist($user);
       $om->flush();

       return new JsonResponse(
        [
        'status' => 'ok',
        ]);
           
               
    }

     /**
     * @Route("/api/invite/website", name="invite_website", methods={"POST"})
     */
    public function inviteWebsite( \Swift_Mailer $mailer, Request $request)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
           }

         if (isset($frontDatas['email']) && ($frontDatas['groupToken'])){
             $email = $frontDatas['email'];
            $groupToken = $frontDatas['groupToken'];

         }  

         $userName = $this->getUser()->getUsername();


        $message = (new \Swift_Message('Invitation à rejoindre un groupe ! '))
        ->setFrom('AperoclockRocket@gmail.com')
        ->setTo($email)
        ->setBody($this->renderView('mails/inviteWebsite.html.twig', 
                                [
                                    'groupToken' => $groupToken,
                                    'username' => $userName
                                ]), 'text/html');

        $mailer->send($message);

        return new JsonResponse([
            'statut' => 'ok'
        ],
        JsonResponse::HTTP_OK);

    }
}

     