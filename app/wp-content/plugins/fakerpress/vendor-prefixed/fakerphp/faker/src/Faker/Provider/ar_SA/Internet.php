<?php

namespace FakerPress\ThirdParty\Faker\Provider\ar_SA;

class Internet extends \FakerPress\ThirdParty\Faker\Provider\Internet
{
    protected static $userNameFormats = [
        '{{lastNameAscii}}.{{firstNameAscii}}',
        '{{firstNameAscii}}.{{lastNameAscii}}',
        '{{firstNameAscii}}##',
        '?{{lastNameAscii}}',
    ];
    protected static $safeEmailTld = [
        'com', 'jo', 'me', 'net', 'org',
    ];

    protected static $tld = [
        'biz', 'com', 'info', 'sa', 'net', 'org',
    ];

    protected static $lastNameAscii = [
        'abbad', 'abbadi', 'abbas', 'abulebbeh', 'flefel', 'hadi', 'hamad', 'hasan', 'jabri', 'kanaan', 'karam', 'maanee', 'melhem', 'nimry', 'obaisi', 'qasem', 'qawasmee', 'rabee', 'rashwani', 'shami', 'zaloum',
    ];
    protected static $firstNameAscii = [
        'abd', 'abdullah', 'ahmad', 'akram', 'amr', 'bashar', 'bilal', 'fadi', 'ibrahim', 'khaled', 'layth', 'mohammad', 'mutaz', 'omar', 'osama', 'rami', 'saleem', 'samer', 'sami', 'yazan',
    ];

    public static function lastNameAscii()
    {
        return static::randomElement(static::$lastNameAscii);
    }

    public static function firstNameAscii()
    {
        return static::randomElement(static::$firstNameAscii);
    }

    /**
     * @example 'ahmad.abbadi'
     */
    public function userName()
    {
        $format = static::randomElement(static::$userNameFormats);

        return static::bothify($this->generator->parse($format));
    }

    /**
     * @example 'wewebit.jo'
     */
    public function domainName()
    {
        return static::randomElement(static::$lastNameAscii) . '.' . $this->tld();
    }
}
