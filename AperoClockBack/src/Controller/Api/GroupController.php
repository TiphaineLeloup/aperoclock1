<?php

namespace App\Controller\Api;

use Exception;
use App\Entity\AppUser;
use App\Entity\AppGroup;
use App\Entity\Guest;
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
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bridge\Doctrine\Form\DataTransformer\CollectionToArrayTransformer;

class GroupController extends AbstractController
{
    /**
     * @Route("/api/user/groups", name="user_groups", methods={"GET"})
     */
    public function userGroups(Request $request, AppUserRepository $appUserRepository, SerializerInterface $serializer)
    {
        $user = $this->getUser();

        $persistentCollectionGroups= $user->getAppGroups();
        
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getName();
            },
        ];

        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $serializer = new Serializer([$normalizer], [$encoder]);

        $jsonContent = $serializer->serialize(
            $persistentCollectionGroups,
            'json',
            ['ignored_attributes' => ['appUsers', 'createdBy']]
        );

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

        
        $user = $this->getUser();

        if (!isset($frontDatas['groupId'])){
            $group = new AppGroup();
        }else{
            $id = $frontDatas['groupId'];
            $group = $appGroupRepository->find($id);
        }
        

        $group = $serializer->deserialize($content, AppGroup::class, 'json', ['object_to_populate' => $group]);
        $group->setCreatedBy($user);

           
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
     * @Route("/api/user/groups/created", name="user_groups_created", methods={"GET"})
     */
    public function eventsCreated(Request $request, AppGroupRepository $appGroupRepository, SerializerInterface $serializer)
    {

        if ($user = $this->getUser())
        {
                $groupsCreated = $appGroupRepository->findByCreatedBy($user);

                $jsonContent = $serializer->serialize($groupsCreated, 'json', ['ignored_attributes' => ['appUsers', 'createdBy', 'events']]);

                return new JsonResponse($jsonContent);

        }else{

            return new JsonResponse(['status' => 'error'], JsonResponse::HTTP_BAD_REQUEST);
        }
       
    }

     /**
     * @Route("/api/group/infos/{id}", name="group_infos", methods={"GET"})
     */
    public function infos(Request $request, AppGroupRepository $appGroupRepository, SerializerInterface $serializer, AppGroup $appgroup)
    {

        if($this->getUser()->hasAppGroup($appgroup)){
            $userCallback = function ($innerObject, $outerObject, string $attributeName, string $format = null, array $context = []) {
                foreach($innerObject as $user){
                    $user->setPassword("");
                    $user->setEmail("");
                    $user->resetAppGroups();
                    $user->resetSubscriptions();
                    $user->resetEvents();
                }
                    return $innerObject;
            };
            $eventCallback = function ($innerObject, $outerObject, string $attributeName, string $format = null, array $context = []) {
                foreach($innerObject as $event) {
                    $event->resetAppUser();
                    $event->setAppGroup(null);
                }                

                return $innerObject;
            };
            
            $defaultContext = [
                AbstractNormalizer::CALLBACKS => [
                    'appUsers' => $userCallback,
                    'events' => $eventCallback,
                ],
            ];
            
            $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
            
            $serializer = new Serializer([$normalizer], [new JsonEncoder()]);
            
            $jsonContent = $serializer->serialize($appgroup, 'json', ['ignored_attributes' => ['createdBy']]);

            $subscriptions = [];
            $guestRepo = $this->getDoctrine()->getRepository(Guest::class);
            foreach($appgroup->getEvents() as $event) {
                $guests = $guestRepo->findBy(['event'=>$event]);
                $subscriptions[$event->getId()] = [];
                foreach($guests as $guest) {
                    array_push($subscriptions[$event->getId()], ['choice'=>$guest->getChoice(), 'user'=>$guest->getAppUser()->getId()]);
                } 
            }

            $jsonResponse = json_encode(array_merge_recursive( json_decode($jsonContent, true), $subscriptions ));

            return new JsonResponse($jsonResponse);
        }

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


        $jsonContent = $serializer->serialize($groupEvents, 'json', ['ignored_attributes' => ['appUsers', 'createdBy', 'appGroup', 'categories', 'adress']]);

        return new JsonResponse($jsonContent);
    }

     /**
     * @Route("/api/user/group/add", name="group_add_user", methods={"POST"})
     */
    public function addUser(Request $request,AppUserRepository $appUserRepository, AppGroupRepository $appGroupRepository,
     SerializerInterface $serializer, ObjectManager $om)
    {
        $frontDatas = [];

        if ($content = $request->getContent()){
            $frontDatas = json_decode($content, true);
        }

        $user = $this->getUser();
        
        $id  = $frontDatas['groupId'];
        $group = $appGroupRepository->find($id);

        $group->addAppUser($user);

        $om->persist($group);
        $om->flush();

        return new JsonResponse([
            'status' => 'ok'
        ],
        JsonResponse::HTTP_OK);
    }


}
