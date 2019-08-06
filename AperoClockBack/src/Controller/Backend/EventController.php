<?php

namespace App\Controller\Backend;

use App\Repository\EventRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EventController extends AbstractController
{
    /**
     * @Route("/backend/events", name="events_list", methods={"GET"})
     */
    public function list(EventRepository $eventRepository)
    {
        $eventsList = $eventRepository->getEventsList();

        return new JsonResponse($eventsList);
 //instead of json, return render with twig for admin by symfo
    }
}