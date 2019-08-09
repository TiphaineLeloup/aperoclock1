<?php
namespace App\Controller\Api;

use Exception;
use App\Entity\Alert;
use App\Repository\AlertRepository;
use App\Repository\AppUserRepository;
use App\Repository\SubscriptionRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class AlertController extends AbstractController
{
    /**
     *
     * @Route("/api/user/alerts/list", name="user_alerts_list", methods={"GET"})
     */
    public function list(Request $request, SubscriptionRepository $subscriptionRepository, SerializerInterface $serializer)
    {
       
        $subscriptionsDatas = $subscriptionRepository->findByUserId($this->getUser());

        $subscriptionsDatas = $serializer->serialize($subscriptionsDatas, 'json');

        return new JsonResponse($subscriptionsDatas);
    }


  
    /**
     *
     * @Route("/api/user/alert/edit", name="user_alert_edit", methods={"POST"})
     */
    public function edit(Request $request, ObjectManager $om, SubscriptionRepository $subscriptionRepository, SerializerInterface $serializer, ValidatorInterface $validator)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }
       
        $userId = $this->getUser();
        $alertId = $frontDatas['alertId'];

        $subscription = $subscriptionRepository->findByUserAndAlert($userId, $alertId);
       
        $choice = $subscription->getHasSubscribed();

        if ($choice === true) {
            $choice = false;
        } else {
            $choice = true;
        }

        $subscription->setHasSubscribed($choice);

       
            $om->persist($subscription);
            $om->flush();

        return new JsonResponse([
            'status' => 'ok'
        ],
        JsonResponse::HTTP_OK);
        
    }
}