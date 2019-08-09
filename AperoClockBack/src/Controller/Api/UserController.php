<?php

namespace App\Controller\Api;

use Exception;
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
    public function signUp(Request $request, AlertRepository $alertRepository, AppUserRepository $appUserRepository, ValidatorInterface $validator, SerializerInterface $serializer, ObjectManager $om, UserPasswordEncoderInterface $encoder)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
           }
        if (isset($frontDatas['userId'])) {
            $id     = $frontDatas['userId'];
            $user      = $userRepository->find($id);
            $user = $serializer->deserialize($content, AppUser::class, 'json', ['object_to_populate' => $user]);
            

            //Validation and send status
            try {
                 if (count($errors) > 0) {
                 $errors = $validator->validate($user);
                 $errorsString = (string) $errors;}
        
                 return new JsonResponse( 
                 [
                    'status' => 'error',
                    $errorsString
                 ],
                 JsonResponse::HTTP_BAD_REQUEST);
                 $om->persist($user);
                 $om->flush();
                } catch (Exception $e) {
                 print($e);}

        }
               return new JsonResponse(
                [
                'status' => 'ok',
                ],
                JsonResponse::HTTP_OK);
               
               
    }
}

     