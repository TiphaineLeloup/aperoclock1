<?php
namespace App\Entity;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity(repositoryClass="App\Repository\AdressRepository")
 */
class Adress
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @Assert\PositiveOrZero
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $numero;
    /**
     *
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $typeVoie;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $street;
    /**
     * @Assert\Length(max=5)
     * @Assert\NotBlank
     * @Assert\PositiveOrZero
     * @ORM\Column(type="integer")
     */
    private $postalCode;
    /**
     * @Assert\NotBlank
     * @ORM\Column(type="string", length=255)
     */
    private $city;
    /**
     *
     * @Assert\NotBlank
     * @ORM\Column(type="string", length=255)
     */
    private $country;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=4, nullable=true)
     */
    private $longitude;

    /**
     * @ORM\Column(type="decimal", precision=8, scale=4, nullable=true)
     */
    private $latitude;
   

    
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getNumero(): ?int
    {
        return $this->numero;
    }
    public function setNumero(?int $numero): self
    {
        $this->numero = $numero;
        return $this;
    }
    public function getTypeVoie(): ?string
    {
        return $this->typeVoie;
    }
    public function setTypeVoie(?string $typeVoie): self
    {
        $this->typeVoie = $typeVoie;
        return $this;
    }
    public function getStreet(): ?string
    {
        return $this->street;
    }
    public function setStreet(?string $street): self
    {
        $this->street = $street;
        return $this;
    }
    public function getPostalCode(): ?int
    {
        return $this->postalCode;
    }
    public function setPostalCode(int $postalCode): self
    {
        $this->postalCode = $postalCode;
        return $this;
    }
    public function getCity(): ?string
    {
        return $this->city;
    }
    public function setCity(string $city): self
    {
        $this->city = $city;
        return $this;
    }
    public function getCountry(): ?string
    {
        return $this->country;
    }
    public function setCountry(string $country): self
    {
        $this->country = $country;
        return $this;
    }

    public function getLongitude()
    {
        return $this->longitude;
    }

    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude()
    {
        return $this->latitude;
    }

    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;

        return $this;
    }
}