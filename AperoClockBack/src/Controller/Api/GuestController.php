<?php


namespace App\Controller\Api;

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
    public function choice(Request $request, SerializerInterface $serializer,AppUserRepository $appUserRepository, EventRepository $eventRepository, GuestRepository $guestRepository, ObjectManager $om)
    {
        $frontDatas = [];
        if ( $content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }

        $userId = $frontDatas['userId'];
        $eventId = $frontDatas['eventId'];



        $guest = $guestRepository->findByUserAndEvent($userId, $eventId);
        $guest = $guest[0];


        $guestChoice = $frontDatas['choice'];

        $guest->setChoice($guestChoice);

        $om->flush();

        return new JsonResponse(['status' => 'ok'], JsonResponse::HTTP_OK);
    }

    /**
     * @Route("api/guest/create", name="guest_new", methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer,AppUserRepository $appUserRepository, EventRepository $eventRepository, GuestRepository $guestRepository, ObjectManager $om , ValidatorInterface $validator)
    {
        $frontDatas = [];
        if ( $content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }

        $userId = $frontDatas['userId'];
        $eventId = $frontDatas['eventId'];

        $user = $appUserRepository->find($userId);
        $event = $eventRepository->find($eventId);

        $guest = new Guest();

        $guest->setAppUser($user);
        $guest->setEvent($event);

        //Validation and send status
        $errors = $validator->validate($guest);

        if (count($errors) > 0){

            $errorsString = (string) $errors;

            return new JsonResponse(
                [
                    'status' => 'error',
                    $errorsString
                ],
                JsonResponse::HTTP_BAD_REQUEST);
        }


        
        $om->persist($guest);
        
        $om->flush();

        return new JsonResponse(['status' => 'ok'], JsonResponse::HTTP_OK);

        

    }
}