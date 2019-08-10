<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity(repositoryClass="App\Repository\GuestRepository")
 */
class Guest
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $choice;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AppUser", inversedBy="guests")
     * @ORM\JoinColumn(nullable=false, onDelete="CASCADE")
     */
    private $appUser;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Event", inversedBy="guests")
     * @ORM\JoinColumn(nullable=false, onDelete="CASCADE")
     */
    private $event;
    
    public function __construct()
    {
        $this->choice = null;
    }
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getChoice(): ?bool
    {
        return $this->choice;
    }
    public function setChoice(?bool $choice): self
    {
        $this->choice = $choice;
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
    public function getEvent(): ?Event
    {
        return $this->event;
    }
    public function setEvent(?Event $event): self
    {
        $this->event = $event;
        return $this;
    }
}