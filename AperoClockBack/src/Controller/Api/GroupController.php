<?php

namespace App\Controller\Api;

use App\Entity\AppUser;
use App\Entity\AppGroup;
use App\Repository\AppUserRepository;
use App\Repository\AppGroupRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bridge\Doctrine\Form\DataTransformer\CollectionToArrayTransformer;

class GroupController extends AbstractController
{
    /**
     * @Route("/api/user/groups", name="user_groups", methods={"POST"})
     */
    public function userGroups(Request $request, AppUserRepository $appUserRepository, SerializerInterface $serializer)
    {
        $frontDatas = [];
        if ( $content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }

        $id = $frontDatas["userId"];

        $user = $appUserRepository->find($id);

        $persistentCollectionGroups= $user->getAppGroups();
        

        $jsonContent = $serializer->serialize($persistentCollectionGroups, 'json', ['ignored_attributes' => ['appUsers', 'createdBy', 'events']]);

        return new JsonResponse($jsonContent); 
         
    }

    /**
     * @Route("/api/user/group/edit", name="group_edit", methods={"POST"})
     * @Route("/api/user/group/create", name="group_new", methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer, AppUserRepository $appUserRepository, ObjectManager $om, AppGroupRepository $appGroupRepository, ValidatorInterface $validator)
    {
        $frontDatas = [];
        if($content = $request-> getContent()){
            $frontDatas = json_decode($content, true);
        }

        $id = $frontDatas['userId'];
        $user = $appUserRepository->find($id);

        if (!isset($frontDatas['groupId'])){
            $group = new AppGroup();
        }else{
            $id = $frontDatas['groupId'];
            $group = $appGroupRepository->find($id);
        }
        

        $group = $serializer->deserialize($content, AppGroup::class, 'json', ['object_to_populate' => $group]);
        $group->setCreatedBy($user);

           //Validation and send status
        
        try {
            if (count($errors) > 0) {
                $errors = $validator->validate($group);
                $errorsString = (string) $errors;
            }
        
            return new JsonResponse(
                [
                    'status' => 'error',
                    $errorsString
                ],
                JsonResponse::HTTP_BAD_REQUEST);
            $om->persist($group);
            
            
            $om->flush();
        }
     catch (Exception $e) {
        print($e);
    }
        

        //ici, utiliser le validator, et si y a des erreurs, on strigify et on envoie un return json error
        $om->persist($group);
        $om->flush();

        return new JsonResponse(
            [
                'status' => 'ok'
            ],
            JsonResponse::HTTP_CREATED
        );
    }

     /**
     * @Route("/api/user/group/delete", name="group_delete", methods={"DELETE"})
     */
    public function delete(Request $request, AppGroupRepository $appGroupRepository, ObjectManager $om)
    {
        if ($content = $request->getContent()) {
            $data = json_decode($content, true);
        }

        $id = $data['groupId'];

        if (!$groupToDelete = $appGroupRepository->find($id)) {
            return new JsonResponse(
                [
                    'status' => 'error',
                    
                ],
                JsonResponse::HTTP_BAD_REQUEST
            );
        } else {
            $om->remove($groupToDelete);
            $om->flush();

            return new JsonResponse(
                [
                    'status' => 'ok'
                ],
                JsonResponse::HTTP_OK
            );
        }
    }

    /**
     * @Route("/api/user/groups/created", name="user_groups_created", methods={"POST"})
     */
    public function eventsCreated(Request $request, AppGroupRepository $appGroupRepository, SerializerInterface $serializer)
    {
        $frontDatas = [];

        if ($content = $request->getContent()){
            $frontDatas = json_decode($content, true);
        }

        if ($userId = $frontDatas['userId'])
        {
                $groupsCreated = $appGroupRepository->findByCreatedBy($userId);

                $jsonContent = $serializer->serialize($groupsCreated, 'json', ['ignored_attributes' => ['appUsers', 'createdBy', 'events']]);

                return new JsonResponse($jsonContent);

        }else if(!$userId){

            return new JsonResponse(['status' => 'error'], JsonResponse::HTTP_BAD_REQUEST);
        }
       
    }

     /**
     * @Route("/api/group/infos", name="group_infos", methods={"POST"})
     */
    public function infos(Request $request, AppGroupRepository $appGroupRepository, SerializerInterface $serializer)
    {
        $frontDatas = [];

        if ($content = $request->getContent()){
            $frontDatas = json_decode($content, true);
        }

        $id = $frontDatas['groupId'];
        

        $groupInfos = $appGroupRepository->find($id);

        $jsonContent = $serializer->serialize($groupInfos, 'json', ['ignored_attributes' => ['appUsers', 'createdBy', 'events']]);

        return new JsonResponse($jsonContent);
    }


     /**
     * @Route("/api/group/events", name="group_events", methods={"POST"})
     */
    public function events(Request $request, AppGroupRepository $appGroupRepository, SerializerInterface $serializer)
    {
        $frontDatas = [];

        if ($content = $request->getContent()){
            $frontDatas = json_decode($content, true);
        }

        $id = $frontDatas['groupId'];
        

        $group = $appGroupRepository->find($id);

        $groupEvents = $group->getEvents();

        // dd($groupEvents);

        $jsonContent = $serializer->serialize($groupEvents, 'json', ['ignored_attributes' => ['appUsers', 'createdBy', 'appGroup', 'categories', 'adress']]);

        return new JsonResponse($jsonContent);
    }

     /**
     * @Route("/api/user/group/add", name="group_add_user", methods={"GET"})
     */
    public function addUser(Request $request,AppUserRepository $appUserRepository, AppGroupRepository $appGroupRepository,
     SerializerInterface $serializer, ObjectManager $om)
    {
        $frontDatas = [];

        if ($content = $request->getContent()){
            $frontDatas = json_decode($content, true);
        }

        $id = $frontDatas['userId'];
        $user = $appUserRepository->find($id);
        $id  = $frontDatas['groupId'];
        $group = $appGroupRepository->find($id);

        $group->addAppUser($user);

        $om->persist($group);
        $om->flush();
    }


}
