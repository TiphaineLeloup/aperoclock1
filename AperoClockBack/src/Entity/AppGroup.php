<?php
namespace App\Entity;
use App\Utils\Slugger;
use App\Entity\AppUser;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\Common\Collections\ArrayCollection;
/**
 * @Entity @HasLifecycleCallbacks
 * @ORM\Entity(repositoryClass="App\Repository\AppGroupRepository")
 */
class AppGroup
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @Assert\NotBlank(message = "Vous devez renseigner ce champs")
     *  @Assert\Length(max=100)
     * @ORM\Column(type="string", length=100)
     */
    private $name;
    /**
     * @Assert\Length(max=255)
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;
    
    /**
     * @Assert\DateTime
     * @ORM\Column(type="datetime")
     */
    private $createdAt;
    /**
     * @Assert\DateTime
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $slug;
    
    /**
     * @Assert\Valid
     * @ORM\ManyToOne(targetEntity="App\Entity\AppUser")
     * @ORM\JoinColumn(nullable=true, onDelete="SET NULL")
     */
    private $createdBy;
    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\AppUser", mappedBy="appGroups")
     */
    private $appUsers;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Event", mappedBy="appGroup", orphanRemoval=true)
     */
    private $events;
    
    
    public function __construct()
    {
        $this->appUsers = new ArrayCollection();
        $this->events = new ArrayCollection();
        
    }
    
    /**
     * @ORM\PreUpdate
     * @ORM\PrePersist
     */
    public function applySlug()
    {
        $slugger = new Slugger(true);
        $slug = $slugger->slugify($this->name);
        $this->slug = $slug;
    }

    /**
     * @ORM\PrePersist
     */
    public function setCreationDate()
    {
        $this->createdAt = new \DateTime;
        $this->updatedAt = new \DateTime;
    }
    
    /**
     * @ORM\PreUpdate
     */
    public function setUpdateDate()
    {
        $this->updatedAt = new \DateTime;
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getName(): ?string
    {
        return $this->name;
    }
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }
    public function getDescription(): ?string
    {
        return $this->description;
    }
    public function setDescription(?string $description): self
    {
        $this->description = $description;
        return $this;
    }
    
    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }
    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }
    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }
    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }
    public function getSlug(): ?string
    {
        return $this->slug;
    }
    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;
        return $this;
    }
    
    
    
    public function getCreatedBy(): ?AppUser
    {
        return $this->createdBy;
    }
    public function setCreatedBy(?AppUser $createdBy): self
    {
        $this->createdBy = $createdBy;
        return $this;
    }
    /**
     * @return Collection|AppUser[]
     */
    public function getAppUsers(): Collection
    {
        return $this->appUsers;
    }
    public function addAppUser(AppUser $appUser): self
    {
        if (!$this->appUsers->contains($appUser)) {
            $this->appUsers[] = $appUser;
            $appUser->addAppGroup($this);
        }
        return $this;
    }
    public function removeAppUser(AppUser $appUser): self
    {
        if ($this->appUsers->contains($appUser)) {
            $this->appUsers->removeElement($appUser);
            $appUser->removeAppGroup($this);
        }
        return $this;
    }
    /**
     * @return Collection|Event[]
     */
    public function getEvents(): Collection
    {
        return $this->events;
    }
    public function addEvent(Event $event): self
    {
        if (!$this->events->contains($event)) {
            $this->events[] = $event;
            $event->setAppGroup($this);
        }
        return $this;
    }
    public function removeEvent(Event $event): self
    {
        if ($this->events->contains($event)) {
            $this->events->removeElement($event);
            // set the owning side to null (unless already changed)
            if ($event->getAppGroup() === $this) {
                $event->setAppGroup(null);
            }
        }
        return $this;
    }
   
   
}
