<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity(repositoryClass="App\Repository\SubscriptionRepository")
 */
class Subscription
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @ORM\Column(type="boolean")
     */
    private $hasSubscribed;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Alert", inversedBy="subscriptions")
     * @ORM\joinColumn(nullable=false, onDelete="CASCADE")
     */
    private $alert;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AppUser", inversedBy="subscriptions", cascade={"persist"})
     * @ORM\joinColumn(nullable=false, onDelete="CASCADE")
     */
    private $appUser;

    public function __construct()
    {
        $this->hasSubscribed = true;
    }

    
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getHasSubscribed(): ?bool
    {
        return $this->hasSubscribed;
    }
    public function setHasSubscribed(bool $hasSubscribed): self
    {
        $this->hasSubscribed = $hasSubscribed;
        return $this;
    }
    public function getAlert(): ?Alert
    {
        return $this->alert;
    }
    public function setAlert(?Alert $alert): self
    {
        $this->alert = $alert;
        return $this;
    }
    public function getAppUser(): ?AppUser
    {
        return $this->appUser;
    }
    public function setAppUser(?AppUser $appUser): self
    {
        $this->appUser = $appUser;
        return $this;
    }
}