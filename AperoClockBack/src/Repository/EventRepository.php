<?php

namespace App\Repository;

use App\Entity\Event;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Event::class);
    }

    /**
    * @return [] Returns all events  as an array
    */
    
    public function getEventsList()
    {
        return $this->createQueryBuilder('e')
            ->getQuery()
            ->getArrayResult()
        ;
    }


     

    //public function findByUserId($userId)
    //{
        //return $this->createQueryBuilder('c')
            
            
            //->innerJoin('c.comment', 'co')
            //->addSelect('co')
            //->andWhere('c.event = :val')
            //->setParameter('val', $userId)
          //  ->getQuery()
        //    ->getArrayResult()
      //  ;
    //}
    

    // public function getEventByUser($id)
    // {
    //     $query = $this->getEntityManager()->createQuery('
    //         SELECT e, e 
    //         FROM App\Entity\Event e
    //         JOIN e.event e
    //         WHERE e.appUser = :userId
    //     ')
    //     ->setParameter('userId', $id);

    //     return $query->getResult();
    // }
    
    
    
    
    
}
