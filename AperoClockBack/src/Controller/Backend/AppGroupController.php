<?php

namespace App\Controller\Backend;

use App\Repository\AppGroupRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppGroupController extends AbstractController
{
    /**
     * @Route("/backend/groups", name="backend_groups_list")
     */
    public function list(AppGroupRepository $appGroupRepository)
    {
        $groupsList = $appGroupRepository->getGroupsList();
        
        return new JsonResponse($groupsList);
    }
}
