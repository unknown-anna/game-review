<?php

declare(strict_types=1);

namespace FakerPress\ThirdParty\Faker\Core;

use FakerPress\ThirdParty\Faker\Extension;

/**
 * @experimental This class is experimental and does not fall under our BC promise
 */
final class Blood implements Extension\BloodExtension
{
    /**
     * @var string[]
     */
    private array $bloodTypes = ['A', 'AB', 'B', 'O'];

    /**
     * @var string[]
     */
    private array $bloodRhFactors = ['+', '-'];

    public function bloodType(): string
    {
        return Extension\Helper::randomElement($this->bloodTypes);
    }

    public function bloodRh(): string
    {
        return Extension\Helper::randomElement($this->bloodRhFactors);
    }

    public function bloodGroup(): string
    {
        return sprintf(
            '%s%s',
            $this->bloodType(),
            $this->bloodRh(),
        );
    }
}
