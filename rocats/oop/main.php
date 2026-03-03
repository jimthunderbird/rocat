<?php

class GeneralObject
{
    public function hi(string $word): void
    {
        echo "hi $word\n";
    }

    public function hi2(string $word): void
    {
        echo "hi2 $word\n";
    }
}

class Car extends GeneralObject
{
    public function hello(string $word): void
    {
        echo "$word\n";
    }

    public function hi2(string $word): void
    {
        echo "child hi2 $word\n";
    }
}

$car = new Car();
$car->hello("word");
$car->hi("jim");
$car->hi2("jim");
