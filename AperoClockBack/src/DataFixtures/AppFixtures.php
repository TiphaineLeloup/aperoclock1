<?php

namespace App\DataFixtures;

use Faker;
use Faker\Factory;
use App\Entity\Alert;
use App\Entity\Event;
use App\Entity\Guest;
use App\Entity\Adress;
use App\Entity\AppUser;
use App\Entity\Comment;
use App\Entity\AppGroup;

use App\Entity\Category;
use App\Entity\Subscription;
use Faker\ORM\Doctrine\Populator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Collections\ArrayCollection;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $generator = Factory::create('fr_FR');
        $populator = new Faker\ORM\Doctrine\Populator($generator, $manager);

        $populator->addEntity(Adress::class, 45, [
            "longitude" => function() use ($generator) { return $generator->longitude(); },
            "latitude" => function() use ($generator) { return $generator->latitude(); },
            "numero" => function() use ($generator) { return $generator->randomDigitNotNull(); },
            "typeVoie" => function() use ($generator) { return $generator->streetSuffix(); },
            "postalCode" => function() use ($generator) { return $generator->randomNumber(5); },
            "street" => function() use ($generator) { return $generator->streetName(); },
            "country" => function() use ($generator) { return $generator->country(); },
        ]);

        $populator->addEntity(AppUser::class, 30, [
            "firstname" => function() use ($generator) { return $generator->firstName(); },
            "lastname" => function() use ($generator) { return $generator->lastName(); },
            "username" => function() use ($generator) { return $generator->email(); },
            "description" => function() use ($generator) { return $generator->text(200); },
            "image" => function() use ($generator) { return $generator->imageUrl(); },
            "password" => function() use ($generator) { return $generator->password() ;},
            "isAdmin" => function() use ($generator) { return $generator->boolean(); },
            "lastConnected" => function() use ($generator) { return $generator->datetimeAD(); },
            "distanceKM" => function() use ($generator) { return $generator->randomNumber(3); },
        ]); 
        $populator->addEntity(AppGroup::class, 10, [
            "name" => function() use ($generator) { return $generator->country(); },
            "description" => function() use ($generator) { return $generator->realText(150); },
            
            "slug" => function() use ($generator) { return $generator->slug(); },
        ]);
        $populator->addEntity(Event::class, 15, [
            "name" => function() use ($generator) { return $generator->realText(15); },
            "description" => function() use ($generator) { return $generator->realText(150); },
            "date" => function() use ($generator) { return $generator->datetimeAD(); },
            "slug" => function() use ($generator) { return $generator->slug(); },
            "website" => function() use ($generator) { return $generator->url(); },

        ]);
       
        
       
        
        $populator->addEntity(Category::class, 10, [
            "name" => function() use ($generator) { return $generator->sentence(); },
            "description" => function() use ($generator) { return $generator->realText(150); },
        ]);
        $populator->addEntity(Comment::class, 40, [
            "content" => function() use ($generator) { return $generator->realText(); },
        ]);

        $populator->addEntity(Guest::class, 30, [
            "choice" => function() use ($generator) { return $generator->boolean(); },
        ]);
        

        $inserted = $populator->execute();

        //generated lists for event_category
        $events = $inserted['App\Entity\Event'];
        $categories = $inserted['App\Entity\Category'];

        foreach ($events as $event) {

            shuffle($categories);

            $event->addCategory($categories[0]);
            $event->addCategory($categories[1]);
            $event->addCategory($categories[2]);

            $manager->persist($event);
        }


        //custom alerts 
        $appUsers = $inserted['App\Entity\AppUser'];
        $alertNames = ['eventCreate', 'eventEdit', 'eventDelete', 'eventComment'];

        foreach ($alertNames as $alertName){

            $alert = new Alert();
            $alert->setName($alertName);
            $alerts[]= $alert;

            
            $manager->persist($alert);
        }

        foreach ($appUsers as $user){
            foreach ($alerts as $alertToPut){
                
                $subscription = new Subscription();
                $subscription->setAppUser($user);
                $subscription->setAlert($alertToPut);
               
                $manager->persist($subscription);
            }
            
        }

        //generated lists for app_group_app_user
        
        $appGroups = $inserted['App\Entity\AppGroup'];


        foreach ($appUsers as $appUser) {

            shuffle($appGroups);
            
            $appUser->addAppGroup($appGroups[0]);
            
            $appUser->addAppGroup($appGroups[1]);
            $appUser->addAppGroup($appGroups[2]);

         
            $manager->persist($appUser);
        }

        


       

        $manager->flush();
    }
}
