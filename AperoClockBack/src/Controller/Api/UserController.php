<?php

namespace App\Controller\Api;

use App\Entity\AppUser;
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
     *
     * @Route("/api/user/infos/edit", name="user_infos_edit", methods={"POST"})
     */
    public function edit(Request $request, SerializerInterface $serializer, AppUserRepository $userRepository,  ObjectManager $om, ValidatorInterface $validator)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }
        if (isset($frontDatas['userId'])) {
            $id     = $frontDatas['userId'];
            $user      = $userRepository->find($id);

            
        
            $user = $serializer->deserialize($content, AppUser::class, 'json', ['object_to_populate' => $user]);
            // dd($user);

            //Validation and send status
        $errors = $validator->validate($user);

        if (count($errors) > 0){

            $errorsString = (string) $errors;

            return new JsonResponse(
                [
                    'status' => 'error',
                    $errorsString
                ],
                JsonResponse::HTTP_BAD_REQUEST);
        }


            $om->persist($user);

            $om->flush();

            return new JsonResponse(
                [
                'status' => 'ok',
                ]);
               
        
        }
        return new JsonResponse(
            [
                'status' => 'error',
                'message' => 'utilisateur inconnu'
            ],
            JsonResponse::HTTP_BAD_REQUEST
        );
    }
}

     