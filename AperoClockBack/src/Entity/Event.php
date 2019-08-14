<?php
namespace App\Entity;
use App\Entity\Guest;
use App\Utils\Slugger;
use App\Entity\Comment;
use App\Entity\Category;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\PreUpdate;
use Doctrine\ORM\Mapping\PrePersist;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\Common\Collections\ArrayCollection;
/**
 * @Entity @HasLifecycleCallbacks
 * @ORM\Entity(repositoryClass="App\Repository\EventRepository")
 */
class Event
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @Assert\NotBlank(
     *       message = "Vous devez renseigner ce champs"
     * )
     * @Assert\Length(max=255)
     * @ORM\Column(type="string", length=255)
     */
    private $name;
    /**
     * @Assert\Length(max=255)
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;
    /**
     * @Assert\DateTime
     * @var string A "Y-m-d H:i:s" formatted value
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @Assert\Length(max=200)
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $website;
   
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
     * 
     * @ORM\ManyToMany(targetEntity="App\Entity\Category", inversedBy="events")
     */
    private $categories;
  
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $slug;
   
    /**
     * @Assert\Valid
     * @ORM\ManyToOne(targetEntity="App\Entity\AppUser", inversedBy="events")
     * @ORM\JoinColumn(nullable=true, onDelete="CASCADE")
     */
    private $createdBy;
    /**
     * @Assert\Valid
     * @ORM\OneToOne(targetEntity="App\Entity\Adress", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true, onDelete="SET NULL")
     */
    private $adress;
    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\AppUser", mappedBy="events")
     */
    private $appUsers;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AppGroup", inversedBy="events", cascade={"persist"})
     * @ORM\JoinColumn(nullable=true, onDelete="CASCADE")
     */
    private $appGroup;
   
    public function __construct()
    {
        $this->categories = new ArrayCollection();
     
        $this->comments = new ArrayCollection();
        $this->appUsers = new ArrayCollection();
       
       
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
    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }
    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;
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
    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }
  
    public function addCategory(Category $category): self
    {
        // if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
        // }
        return $this;
    }
    public function removeCategory(Category $category): self
    {
        if ($this->categories->contains($category)) {
            $this->categories->removeElement($category);
        }
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
    public function getAdress(): ?Adress
    {
        return $this->adress;
    }
    public function setAdress(?Adress $adress): self
    {
        $this->adress = $adress;
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
            $appUser->addEvent($this);
        }
        return $this;
    }
    public function removeAppUser(AppUser $appUser): self
    {
        if ($this->appUsers->contains($appUser)) {
            $this->appUsers->removeElement($appUser);
            $appUser->removeEvent($this);
        }
        return $this;
    }
    public function resetAppUser():void
    {
        $this->appUsers = new ArrayCollection();
    }
    public function getAppGroup(): ?AppGroup
    {
        return $this->appGroup;
    }
    public function setAppGroup(?AppGroup $appGroup): self
    {
        $this->appGroup = $appGroup;
        return $this;
    }
    
}
