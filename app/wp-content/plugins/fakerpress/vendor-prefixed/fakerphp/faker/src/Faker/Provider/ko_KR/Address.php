<?php

namespace FakerPress\ThirdParty\Faker\Provider\ko_KR;

class Address extends \FakerPress\ThirdParty\Faker\Provider\Address
{
    protected static $postcode = ['#####'];
    protected static $buildingNumber = ['%###', '%##'];
    protected static $metropolitanCity = [
        '서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시',
    ];
    protected static $province = [
        '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도',
    ];
    protected static $city = [
        '파주시', '수원시', '수원시 권선구', '수원시 팔달구', '수원시 영통구', '성남시', '성남시 수정구', '성남시 중원구', '화성시',
        '성남시 분당구', '안양시', '안양시 만안구', '안양시 동안구', '부천시', '부천시 원미구', '부천시 소사구', '부천시 오정구', '광명시',
        '평택시', '이천시', '동두천시', '안산시', '안산시 상록구', '안산시 단원구', '안성시', '고양시', '고양시 덕양구', '고양시 일산동구',
        '고양시 일산서구', '과천시', '구리시', '남양주시', '오산시', '시흥시', '군포시', '의왕시', '하남시', '김포시', '용인시', '용인시 처인구',
        '용인시 기흥구', '용인시 수지구', '연천군', '가평군', '양평군', '광주시', '포천시', '양주시', '수원시 장안구', '의정부시', '여주시',
    ];
    protected static $borough = [
        '종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구',
        '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구',
        '동구', '서구', '남구', '북구', '중구',
    ];
    protected static $streetName = [
        '압구정로', '도산대로', '학동로', '봉은사로', '테헤란로', '역삼로', '논현로', '언주로', '강남대로', '양재천로', '삼성로', '영동대로',
        '개포로', '선릉로', '반포대로', '서초중앙로', '서초대로', '잠실로', '석촌호수로', '백제고분로', '가락로', '오금로',
    ];
    protected static $country = [
        '가나', '가봉', '가이아나', '감비아', '과테말라', '그레나다', '그리스', '기니', '기니비사우', '나고르노카라바흐 공화국', '나미비아',
        '나우루', '나이지리아', '남수단', '남아프리카 공화국', '남오세티야', '네덜란드', '네팔', '노르웨이', '뉴질랜드', '니제르', '니카라과',
        '대한민국', '덴마크', '도미니카', '도미니카 공화국', '독일', '동티모르', '라오스', '라이베리아', '라트비아', '러시아', '레바논', '레소토',
        '루마니아', '룩셈부르크', '르완다', '리비아', '리투아니아', '리히텐슈타인', '마다가스카르', '마셜 제도', '마케도니아 공화국', '말라위',
        '말레이시아', '말리', '멕시코', '모나코', '모로코', '모리셔스', '모리타니', '모잠비크', '몬테네그로', '몰도바', '몰디브', '몰타', '몽골',
        '미국', '미얀마', '미크로네시아 연방', '바누아투', '바레인', '바베이도스', '바티칸', '바하마', '방글라데시', '베냉', '베네수엘라',
        '베트남', '벨기에', '벨라루스', '벨리즈', '보스니아 헤르체고비나', '보츠와나', '볼리비아', '부룬디', '부르키나파소', '부탄', '북키프로스',
        '불가리아', '브라질', '브루나이', '사모아', '사우디아라비아', '사하라 아랍 민주 공화국 (서사하라)', '산마리노', '상투메 프린시페', '세네갈',
        '세르비아', '세이셸', '세인트 루시아', '세인트 키츠 네비스', '세인트빈센트 그레나딘', '소말리아', '소말릴란드 (소말리아 영토)',
        '솔로몬 제도', '수단', '수리남', '스리랑카', '스와질란드', '스웨덴', '스위스', '스페인', '슬로바키아', '슬로베니아', '시리아',
        '시에라리온', '싱가포르', '아랍에미리트', '아르메니아', '아르헨티나', '아이슬란드', '아일랜드', '아제르바이잔', '아프가니스탄', '안도라',
        '알바니아', '알제리', '압하스', '앙골라', '앤티가 바부다', '에리트레아', '에스토니아', '에콰도르', '에티오피아', '엘살바도르', '영국',
        '예멘', '오만', '오스트레일리아', '오스트리아', '온두라스', '요르단', '우간다', '우루과이', '우즈베키스탄', '우크라이나', '이란', '이라크',
        '이스라엘', '이집트', '이탈리아', '인도', '인도네시아', '일본', '자메이카', '잠비아', '적도 기니', '조선민주주의인민공화국', '조지아',
        '중앙아프리카 공화국', '중화민국', '중화인민공화국', '지부티', '짐바브웨', '차드', '체코', '칠레', '카메룬', '카보베르데', '카자흐스탄',
        '카타르', '캄보디아', '캐나다', '케냐', '코모로', '코소보 공화국', '코스타리카', '코트디부아르', '콜롬비아', '콩고 공화국',
        '콩고 민주 공화국', '쿠바', '쿠웨이트', '크로아티아', '키르기스스탄', '키리바시', '키프로스', '타이', '타지키스탄', '탄자니아', '터키',
        '토고', '통가', '투르크메니스탄', '투발루', '튀니지', '트란스니스트리아', '트리니다드 토바고', '파나마', '파라과이', '파키스탄',
        '파푸아 뉴기니', '팔라우', '팔레스타인국', '페루', '포르투갈', '폴란드', '프랑스', '피지', '핀란드', '필리핀', '헝가리',
    ];
    protected static $addressFormats = [
        '{{metropolitanCity}} {{borough}} {{streetName}} {{buildingNumber}}',
        '{{province}} {{city}} {{streetName}} {{buildingNumber}}',
    ];

    /**
     * @example '서울특별시'
     */
    public function metropolitanCity()
    {
        return static::randomElement(static::$metropolitanCity);
    }

    /**
     * @example '경기도'
     */
    public static function province()
    {
        return static::randomElement(static::$province);
    }

    /**
     * @example '고양시'
     */
    public function city()
    {
        return static::randomElement(static::$city);
    }

    /**
     * @example '강남구'
     */
    public function borough()
    {
        return static::randomElement(static::$borough);
    }

    /**
     * @example '강남대로'
     */
    public function streetName()
    {
        return static::randomElement(static::$streetName);
    }
}
