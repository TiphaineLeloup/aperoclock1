<?php

namespace App\Controller\Backend;

use App\Repository\AppUserRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppUserController extends AbstractController
{
    /**
     * @Route("/backend/users", name="backend_users_list")
     */
    public function list(AppUserRepository $userRepository)
    {
        $usersList = $userRepository->getUsersList();

       return  new JsonResponse($usersList);

        //instead of json, return render with twig for admin by symfo
    }
}
