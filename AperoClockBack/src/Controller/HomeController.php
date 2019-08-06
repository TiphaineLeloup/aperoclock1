<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    // public function contact(Request $request, \Swift_Mailer $mailer)
    // {

    //     $parametersAsArray = [];
    //             if ($content = $request->getContent()) {
    //                 $parametersAsArray = json_decode($content, true);
    //             }

    //             $id = $parametersAsArray['id'];
    //             $name = $parametersAsArray['nom'];

    //     $response = new Response($id . $name . 'COUCOU');

    //     return $response;
        
        

    // }
}
