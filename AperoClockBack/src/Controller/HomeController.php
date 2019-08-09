<?php

namespace App\Controller;

use App\Entity\AppUser;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    

    /**
     * @Route("/contact", name="contact", methods={"POST"})
     */
    public function contact( \Swift_Mailer $mailer, Request $request)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
           }

           $email = $frontDatas['email'];
           $subject = $frontDatas['subject'];
           $content = $frontDatas['content'];

           
        
        
        
       
               
            $message = (new \Swift_Message('subject'))
         
            ->setFrom('aperoclock@gmail.com')
            ->setTo('aperoclock@gmail.com')
            ->setBody($email, $subject, $content);
           
             
               
               $mailer->send($message);
               
               
               
               return new JsonResponse(
                   [
                       'status' => 'ok'
                    ],
                    JsonResponse::HTTP_OK);
                    
            
            
    }

           
    

}
