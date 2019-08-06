<?php
namespace App\Utils;

class Slugger
{
    private $toLower;
   
    public function __construct(bool $toLower)
    {
        $this->toLower = $toLower;
    }
    public function slugify($strToConvert) 
    {
       
        if($this->toLower){
            $strToConvert = strtolower($strToConvert);
        }
        $strConverted = preg_replace( '/[^a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*/', '-', trim(strip_tags($strToConvert)));
        return $strConverted;
    }
}
