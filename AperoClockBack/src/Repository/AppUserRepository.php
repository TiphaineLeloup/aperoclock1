<?php

namespace App\Repository;

use App\Entity\AppUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AppUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method AppUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method AppUser[]    findAll()
 * @method AppUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AppUserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AppUser::class);
    }

     /**
      * @return [] Returns an array of all users
      */
    
    public function getUsersList()
    {
        return $this->createQueryBuilder('a')
            ->getQuery()
            ->getArrayResult()
        ;
    }

   
    

    

    /*
    public function findOneBySomeField($value): ?AppUser
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
