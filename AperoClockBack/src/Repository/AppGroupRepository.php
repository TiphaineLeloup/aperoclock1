<?php

namespace App\Repository;

use App\Entity\AppGroup;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AppGroup|null find($id, $lockMode = null, $lockVersion = null)
 * @method AppGroup|null findOneBy(array $criteria, array $orderBy = null)
 * @method AppGroup[]    findAll()
 * @method AppGroup[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AppGroupRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AppGroup::class);
    }

     /**
      * @return [] Returns all groups as an array
     */
    
    public function getGroupsList()
    {
        return $this->createQueryBuilder('a')
            ->getQuery()
            ->getArrayResult()
        ;
    }
    

    
    public function findByCreatedBy($userId)
    {
        return $this->createQueryBuilder('a')
            ->Where('a.createdBy = :id')
            ->setParameter('id', $userId)
            ->getQuery()
            ->getResult()
        ;
    }
    
}
