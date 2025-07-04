<?php

namespace FakerPress\ThirdParty\Faker\Provider\zh_TW;

/**
 * @deprecated Use {@link \Faker\Provider\Internet} instead
 * @see \FakerPress\ThirdParty\Faker\Provider\Internet
 */
class Internet extends \FakerPress\ThirdParty\Faker\Provider\Internet
{
    /**
     * @deprecated Use {@link \Faker\Provider\Internet::userName()} instead
     * @see \FakerPress\ThirdParty\Faker\Provider\Internet::userName()
     */
    public function userName()
    {
        return parent::userName();
    }

    /**
     * @deprecated Use {@link \Faker\Provider\Internet::domainWord()} instead
     * @see \FakerPress\ThirdParty\Faker\Provider\Internet::domainWord()
     */
    public function domainWord()
    {
        return parent::domainWord();
    }
}
