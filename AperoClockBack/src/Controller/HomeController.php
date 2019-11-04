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
    public function contact( \Swift_Mailer $mailer, Request $request, $email)
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
           }

          $email = $frontDatas['email'];
          $subject = $frontDatas['subject'];
          $content = $frontDatas['content'];
           
            //$mailer =  new \Swift_Mailer($transport);
            $message = (new \Swift_Message('Nouveau mail user/visiteur: '.$subject.''))
         
             ->setFrom('aperoclockRocket@gmail.com')
             ->setTo('aperoclockRocket@gmail.com')
             ->setBody($this->render('mails/contact.html.twig', ['email'=>$email,  'content'=>$content]))

             ->addPart(
                $this->renderView(
                    // templates/emails/registration.txt.twig
                    'mails/contact.html.twig',
                    ['email' => $email,   'content'=>$content]
                ),
                'text/plain'
            );
                
             
               
             $mailer->send($message);
               
               
               
             return new JsonResponse(
                [
                    'status' => 'ok'
                ],
                JsonResponse::HTTP_CREATED
            );
    
                    
            
            
    }

    

           
    

}
