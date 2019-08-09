<?php


namespace App\Controller\Api;

use Exception;
use App\Entity\Guest;
use App\Repository\EventRepository;
use App\Repository\GuestRepository;
use App\Repository\AppUserRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class GuestController extends AbstractController
{
    /**
     * @Route("api/guest/choice", name="guest_choice", methods={"POST"})
     */
    public function choice(Request $request, SerializerInterface $serializer, EventRepository $eventRepository, GuestRepository $guestRepository, ObjectManager $om)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }

        $user = $this->getUser();
        $eventId = $frontDatas['eventId'];



        $guest = $guestRepository->findByUserAndEvent($user, $eventId);
        $guest = $guest[0];


        $guestChoice = $frontDatas['choice'];
        if ($guestChoice === "NULL"){
            $guestChoice = NULL;
        }

        $guest->setChoice($guestChoice);

        $om->flush();

        return new JsonResponse(['status' => 'ok'], JsonResponse::HTTP_OK);
    }

    /**
     * @Route("api/guest/create", name="guest_new", methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer, AppUserRepository $appUserRepository, EventRepository $eventRepository, GuestRepository $guestRepository, ObjectManager $om, ValidatorInterface $validator)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }

        $user = $this->getUser();

        $eventId = $frontDatas['eventId'];
         $event = $eventRepository->find($eventId);

        $guest = new Guest();

        $guest->setAppUser($user);
        $guest->setEvent($event);

        $om->persist($guest);
        $om->flush();
    
            return new JsonResponse(
            [
                'status' => 'ok'
                
            ],
            JsonResponse::HTTP_CREATED
        );
            
       
    }
}