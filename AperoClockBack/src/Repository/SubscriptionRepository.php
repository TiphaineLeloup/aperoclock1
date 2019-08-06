<?php

namespace App\Repository;

use App\Entity\Subscription;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Subscription|null find($id, $lockMode = null, $lockVersion = null)
 * @method Subscription|null findOneBy(array $criteria, array $orderBy = null)
 * @method Subscription[]    findAll()
 * @method Subscription[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SubscriptionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Subscription::class);
    }

    /**
    * @return Subscription[] Returns an array of Subscription objects
    */
    
    public function findByUserId($userId)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin('s.alert', 'a')
            ->addSelect('a.name')
            ->andWhere('s.appUser = :val')
            ->setParameter('val', $userId)
            ->getQuery()
            ->getArrayResult()
        ;
    }


    
    public function findByUserAndAlert($userId, $alertId)
    {
        return $this->createQueryBuilder('s')
            ->Where('s.appUser = :val1')
            ->andWhere('s.alert = :val2')
            ->setParameter('val1', $userId)
            ->setParameter('val2', $alertId)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    
}
