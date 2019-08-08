<?php
namespace App\Entity;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
/**
 * @Entity @HasLifecycleCallbacks
 * @ORM\Entity(repositoryClass="App\Repository\CommentRepository")
 */
class Comment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @Assert\Length(min=5)
     * @ORM\Column(type="text")
     */
    private $content;
    /**
     *  @Assert\DateTime
     * @ORM\Column(type="datetime")
     */
    private $createdAt;
    /**
     *  @Assert\DateTime
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;
    /**
     * 
     * @ORM\ManyToOne(targetEntity="App\Entity\Event", inversedBy="comments")
     * @ORM\JoinColumn(nullable=false, onDelete="CASCADE")
     */
    private $event;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AppUser", inversedBy="comments")
     * @ORM\JoinColumn(nullable=TRUE, onDelete="CASCADE")
     */
    private $appUser;
   


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
    public function getContent(): ?string
    {
        return $this->content;
    }
    public function setContent(string $content): self
    {
        $this->content = $content;
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
    public function getEvent(): ?Event
    {
        return $this->event;
    }
    public function setEvent(?Event $event): self
    {
        $this->event = $event;
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