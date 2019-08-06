<?php

namespace App\Repository;

use App\Entity\Guest;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Guest|null find($id, $lockMode = null, $lockVersion = null)
 * @method Guest|null findOneBy(array $criteria, array $orderBy = null)
 * @method Guest[]    findAll()
 * @method Guest[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GuestRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Guest::class);
    }

     /**
      * @return Guest[] Returns an array of Guest objects
     */
    
    public function findByUserId($userId)
    {
        return $this->createQueryBuilder('e')
            
            
            ->innerJoin('e.event', 'ev')
            ->addSelect('ev')
            ->andWhere('e.appUser = :val')
            ->setParameter('val', $userId)
            ->getQuery()
            ->getArrayResult()
        ;
    }
    

    
    public function findByUserAndEvent($userId, $eventId)
    {
        return $this->createQueryBuilder('g')
            ->Where('g.appUser = :val1')
            ->andWhere('g.event = :val2')
            ->setParameter('val1', $userId)
            ->setParameter('val2', $eventId)
            ->getQuery()
            ->getResult()
        ;
    }
    
}
