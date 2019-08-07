<?php

namespace App\Controller\Api;

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
     * @Route("/api/user/infos/list/{id}", name="user_infos_list", methods={"GET"})
     */

    public function list(AppUserRepository $userRepository, SerializerInterface $serializer, AppUser $user)
    {
         $userInfos = $serializer->serialize($user, 'json', [
            'ignored_attributes' => [
                'appGroups', 'events'
                ]
            ]);
        return new JsonResponse($userInfos);

    
    }


     /**
     *@Route("/api/user/infos/edit", name="user_infos_edit", methods={"POST"})
     * @Route("/api/user/signup", name="signup", methods={"POST"})
     */
    public function signUp(Request $request,AlertRepository $alertRepository, AppUserRepository $appUserRepository, SerializerInterface $serializer, ObjectManager $om, UserPasswordEncoderInterface $encoder)
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

        if (isset($frontDatas['userId'])){

            $id = $frontDatas['userId'];
            $user = $appUserRepository->find($id);

        }else{

             $user = new AppUser();
        }
       
        $user = $serializer->deserialize($content, AppUser::class, 'json', [
            'object_to_populate' => $adress
        ]);
       
        $user->setAdress($adress);
        $encodedPassword = $encoder->encodePassword(
            $user, 
            $user->getPassword() 
       );

       $user->setPassword($encodedPassword);

       //if new User, he suscribes all mail alerts
       if (!isset($frontDatas['userId'])){
            $alerts = $alertRepository->findAll();
            
            foreach ($alerts as $alert){

                $subscription = new Subscription();
                $subscription->setAlert($alert);
                $subscription->setAppUser($user);

                $om->persist($subscription);
            }
       }
        

        $om->persist($user);
        $om->flush();

        return new JsonResponse(['status' => 'ok'], JsonResponse::HTTP_CREATED);
    }
}

     