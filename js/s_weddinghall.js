$(document).ready(function () {
  // 상위 홀 선택 버튼 클릭시 필터링
  $(".hall-list button").click(function () {
    $(".hall-list button").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $(".mix-wrapper").isotope({
      filter: selector,
    });
  });
  // 셀렉트 박스 내 선택시 필터링
  $("#selcity").change(function () {
    var selcity = $(this).val(); // 선택된 옵션의 값 가져오기
    var filterValue = selcity === "all" ? "*" : "." + selcity;

    $(".mix-wrapper").isotope({
      filter: filterValue,
    });
  });

  // "지역(시/도)" 셀렉트 박스 변경 이벤트 핸들러
  $("#selcity").change(function () {
    var selectedCity = $(this).val();
    var citySelect = $("#city");

    // "전체"를 선택한 경우, "지역(시/군/구)" 셀렉트 박스 초기화
    if (selectedCity === "all") {
      citySelect.empty();
      citySelect.append('<option value="all">지역을 선택해주세요.</option>');
    } else {
      // 선택한 "시/도"에 따라 해당하는 동 이름 추가
      var cityOptions = getCityOptions(selectedCity);
      citySelect.html(cityOptions);
    }
  });

  // "시/도"에 따라 해당하는 동 이름을 가져오는 함수 (예시)
  function getCityOptions(selectedCity) {
    var cityOptions = "";

    // 선택한 "시/도"에 따라 동적으로 옵션 추가
    switch (selectedCity) {
      case "seoul":
        cityOptions =
          '<option value="all" data-filter=".sall" >전체</option>' +
          '<option value="gangnam" data-filter=".gangnam" >강남구</option>' +
          '<option value="Seocho" data-filter=".seocho">서초</option>' +
          '<option value="gangseo" data-filter=".gangseo">강서/양천</option>' +
          '<option value="songpa" data-filter=".songpa">송파/잠실</option>' +
          '<option value="sindorim" data-filter=".sindorim">신도림/구로/영등포</option>' +
          '<option value="mapo" data-filter=".mapo">마포/서대문/은평</option>' +
          '<option value="gangdong" data-filter=".gangdong">강동</option>' +
          '<option value="seongdong" data-filter=".seongdong">성동/광진</option>' +
          '<option value="junggu" data-filter=".junggu">중구/용산/종로</option>' +
          '<option value="gwanak" data-filter=".gwanak">관악/동작/금천</option>' +
          '<option value="seongbuk" data-filter=".seongbuk">성북/동대문/중랑</option>' +
          '<option value="gangbuk" data-filter=".gangbuk">강북/노원/도봉</option>';
        break;
      case "gyeonggi":
        cityOptions =
          '<option value="all-gyeonggi" data-filter=".gall">전체</option>' +
          '<option value="seongnam" data-filter=".seongnam">성남/분당</option>' +
          '<option value="suwon" data-filter=".suwon">수원</option>' +
          '<option value="yongin" data-filter=".yongin">용인</option>' +
          '<option value="anyang" data-filter=".anyang">안양/광명</option>' +
          '<option value="ansan" data-filter=".ansan">안산</option>' +
          '<option value="bucheon" data-filter=".bucheon">부천</option>' +
          '<option value="ilsan" data-filter=".ilsan">일산</option>' +
          '<option value="pyeongtaek" data-filter=".pyeongtaek">평택</option>' +
          '<option value="uijeongbu" data-filter=".uijeongbu">의정부</option>';
        break;
      case "gangwon":
        cityOptions =
          '<option value="all-gangwon" data-filter=".gwall">전체</option>';
        break;
      case "gyeongnam":
        cityOptions =
          '<option value="all-gyeongnam" data-filter=".gnall">전체</option>';
        break;
      case "gwangju":
        cityOptions =
          '<option value="all-gwangju" data-filter=".gjall">전체</option>';
        break;
      case "daejeon":
        cityOptions =
          '<option value="all-daejeon" data-filter=".djall">전체</option>';
        break;
      case "daegu":
        cityOptions =
          '<option value="all-daegu" data-filter=".dgall">전체</option>';
        break;
      case "busan":
        cityOptions =
          '<option value="all-busan" data-filter=".bsall">전체</option>';
        break;
      case "ulsan":
        cityOptions =
          '<option value="all-ulsan" data-filter=".usall">전체</option>';
        break;
      case "incheon":
        cityOptions =
          '<option value="all-incheon" data-filter=".icall">전체</option>';
        break;
      case "jeonbuk":
        cityOptions =
          '<option value="all-jeonbuk" data-filter=".jball">전체</option>';
        break;
      case "chungnam":
        cityOptions =
          '<option value="all-chungnam" data-filter=".cnall">전체</option>';
        break;
      case "chungbuk":
        cityOptions =
          '<option value="all-gyeonggi" data-filter=".cball">전체</option>';
        break;
      case "Jeju":
        cityOptions =
          '<option value="all-Jeju" data-filter=".jjall">전체</option>';
        break;
      // 다른 시/도에 대한 경우 추가
    }

    return cityOptions;
  }

  // JSON 데이터 예시 (웨딩홀 정보)
  const weddingHallData = [
    {
      imageSrc: "images/wd1.jpg",
      location: "서울 강남구",
      name: "발라드지디 수서",
      hallType: "호텔",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 500명",
      id: "all seoul sall gangnam hotel bf 300 79won sc",
    },
    {
      imageSrc: "images/wd2.jpg",
      location: "서울 강남구",
      name: "상록 아트홀",
      hallType: "컨벤션",
      menuType: "뷔페",
      mealCost: "78,000원",
      capacity: "최대 400명",
      id: "all seoul sall gangnam convention 300 79won sc bf",
    },
    {
      imageSrc: "images/wd3.jpg",
      location: "서울 강남구",
      name: "소노펠리체컨벤션",
      hallType: "컨벤션",
      menuType: "뷔페",
      mealCost: "95,000원",
      capacity: "최대 700명",
      id: "all seoul sall gangnam convention 300 99won wt sc",
    },
    {
      imageSrc: "images/wd4.jpg",
      location: "서울 강남구",
      name: "그랜드힐컨벤션",
      hallType: "컨벤션",
      menuType: "양식,퓨전",
      mealCost: "120,000원",
      capacity: "최대 660명",
      id: "all seoul sall gangnam convention 300 100won mc wt fs",
    },
    {
      imageSrc: "images/wd5.jpg",
      location: "서울 강남구",
      name: "토브헤세드",
      hallType: "하우스",
      menuType: "뷔페",
      mealCost: "78,000원",
      capacity: "최대 300명",
      id: "all seoul sall gangnam out 200 79won sc bf",
    },
    {
      imageSrc: "images/wd6.jpg",
      location: "서울 강남구",
      name: "엘리에나호텔",
      hallType: "호텔",
      menuType: "양식",
      mealCost: "137,000원",
      capacity: "최대 650명",
      id: "all seoul sall gangnam hotel 100won 300 mc wt",
    },
    {
      imageSrc: "images/wd7.jpg",
      location: "서울 강남구",
      name: "발라드지디 청담",
      hallType: "일반",
      menuType: "양식",
      mealCost: "198,000원",
      capacity: "최대 380명",
      id: "all seoul sall gangnam nomal 100won 300 mc wt ",
    },
    {
      imageSrc: "images/wd8.jpg",
      location: "서울 강남구",
      name: "더베일리하우스 삼성점",
      hallType: "일반,채플",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최대 500명",
      id: "all seoul sall gangnam nomal chapel 300 79won sc bf",
    },
    {
      imageSrc: "images/wd9.jpg",
      location: "서울 강남구",
      name: "라비돌웨딩강남",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "60,000원",
      capacity: "최대 1500명",
      id: "all seoul sall gangnam nomal chapel bf 300 79won sc",
    },
    {
      imageSrc: "images/wd10.jpg",
      location: "서울 강남구",
      name: "노블발렌티_대치점",
      hallType: "일반,채플",
      menuType: "뷔페",
      mealCost: "80,000원",
      capacity: "최대 600명",
      id: "all seoul sall gangnam nomal chapel bf 300 99won sc",
    },
    {
      imageSrc: "images/wd11.jpg",
      location: "서울 영등포구",
      name: "더파티움 여의도",
      hallType: "일반,컨벤션",
      menuType: "한식,뷔페",
      mealCost: "79,000원",
      capacity: "최대 700명",
      id: "all seoul sall sindorim nomal convention bf ko sc 300 79won",
    },
    {
      imageSrc: "images/wd12.jpg",
      location: "서울 영등포구",
      name: "JK아트컨벤션",
      hallType: "일반,채플",
      menuType: "뷔페",
      mealCost: "80,000원",
      capacity: "최대 600명",
      id: "all seoul sall sindorim nomal convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd13.jpg",
      location: "서울 영등포구",
      name: "루나미엘레",
      hallType: "일반,채플",
      menuType: "뷔페",
      mealCost: "80,000원",
      capacity: "최대 400명",
      id: "all seoul sall sindorim convention fs 300 99won mc",
    },
    {
      imageSrc: "images/wd14.jpg",
      location: "서울 영등포구",
      name: "그랜드컨벤션센터",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "66,000원",
      capacity: "최대 1200명",
      id: "all seoul sall sindorim nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd15.jpg",
      location: "서울 영등포구",
      name: "63컨벤션센터",
      hallType: "컨벤션",
      menuType: "한식,양식",
      mealCost: "175,000원",
      capacity: "최대 800명",
      id: "all seoul sall sindorim convention ko wt 300 100won mc",
    },
    {
      imageSrc: "images/wd16.jpg",
      location: "서울 서초구",
      name: "더리버사이드호텔",
      hallType: "호텔,컨벤션",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최대 650명",
      id: "all seoul sall seocho hotel convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd17.jpg",
      location: "서울 서초구",
      name: "더화이트베일",
      hallType: "일반,컨벤션",
      menuType: "한식",
      mealCost: "75,000원",
      capacity: "최대 950명",
      id: "all seoul sall seocho nomal convention ko 300 79won sc",
    },
    {
      imageSrc: "images/wd18.jpg",
      location: "서울 서초구",
      name: "ELTOWER(엘타워)",
      hallType: "컨벤션",
      menuType: "한식,양식",
      mealCost: "110,000원",
      capacity: "최대 780명",
      id: "all seoul sall seocho convention ko wt 300 100won mc",
    },
    {
      imageSrc: "images/wd19.jpg",
      location: "서울 서초구",
      name: "플로팅아일랜드",
      hallType: "일반,야외/하우스",
      menuType: "양식",
      mealCost: "85,000원",
      capacity: "최소 150명",
      id: "all seoul sall seocho nomal out wt 100 99won mc",
    },
    {
      imageSrc: "images/wd20.jpg",
      location: "서울 서초구",
      name: "아펠가모_반포점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "75,000원",
      capacity: "최소 250명",
      id: "all seoul sall seocho nomal bf 100 79won sc",
    },
    {
      imageSrc: "images/wd21.jpg",
      location: "서울 강서구",
      name: "보타닉파크웨딩",
      hallType: "일반,야외/하우스,채플,컨벤션",
      menuType: "뷔페",
      mealCost: "70,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangseo nomal out chapel convention bf 200 79won sc",
    },
    {
      imageSrc: "images/wd22.jpg",
      location: "서울 강서구",
      name: "더뉴컨벤션웨딩",
      hallType: "일반,컨벤션",
      menuType: "뷔페",
      mealCost: "67,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangseo nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd23.jpg",
      location: "서울 강서구",
      name: "더베뉴지서울",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "65,000원",
      capacity: "최소 200명",
      id: "all seoul sall gangseo nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd24.jpg",
      location: "서울 강서구",
      name: "메이필드호텔",
      hallType: "호텔",
      menuType: "한식,양식",
      mealCost: "110,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangseo hotel ko wt 200 100won mc",
    },
    {
      imageSrc: "images/wd25.jpg",
      location: "서울 강서구",
      name: "코트야드메리어트서울보타닉파크",
      hallType: "야외/하우스,채플,호텔",
      menuType: "뷔페",
      mealCost: "100,000원",
      capacity: "최소 80명",
      id: "all seoul sall gangseo out chapel hotel bf 50 100won sc",
    },
    {
      imageSrc: "images/wd26.jpg",
      location: "서울 송파구",
      name: "더컨벤션_잠실점(교통회관)",
      hallType: "일반,컨벤션",
      menuType: "뷔페",
      mealCost: "73,000원",
      capacity: "최소 300명",
      id: "all seoul sall songpa nomal convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd27.jpg",
      location: "서울 송파구",
      name: "롯데호텔월드(잠실)",
      hallType: "호텔",
      menuType: "양식",
      mealCost: "105,000원",
      capacity: "최소 150명",
      id: "all seoul sall songpa hotel bf 100 100won mc",
    },
    {
      imageSrc: "images/wd28.jpg",
      location: "서울 송파구",
      name: "서울웨딩타워",
      hallType: "일반",
      menuType: "퓨전",
      mealCost: "80,000원",
      capacity: "최소 350명",
      id: "all seoul sall songpa nomal fs 300 79won sc",
    },
    {
      imageSrc: "images/wd29.jpg",
      location: "서울 송파구",
      name: "더컨벤션_송파문정점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "80,000원",
      capacity: "최소 350명",
      id: "all seoul sall songpa hotel bf 300 79won sc",
    },
    {
      imageSrc: "images/wd30.jpg",
      location: "서울 송파구",
      name: "아펠가모_잠실점",
      hallType: "일반,컨벤션",
      menuType: "뷔페",
      mealCost: "75,000원",
      capacity: "최소 300명",
      id: "all seoul sall songpa nomal convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd31.jpg",
      location: "서울 마포구",
      name: "웨딩시그니처",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "67,000원",
      capacity: "최소 250명",
      id: "all seoul sall mapo nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd32.jpg",
      location: "서울 마포구",
      name: "아펠가모_공덕점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "75,000원",
      capacity: "최소 300명",
      id: "all seoul sall mapo nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd33.jpg",
      location: "서울 마포구",
      name: "DMC타워웨딩",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "65,000원",
      capacity: "최소 300명",
      id: "all seoul sall mapo nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd34.jpg",
      location: "서울 마포구",
      name: "아만티호텔",
      hallType: "일반,채플,호텔,컨벤션",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최소 300명",
      id: "all seoul sall mapo nomal chapel hotel convention bf 300 79won sc",
    },
    {
      imageSrc: "images/wd35.jpg",
      location: "서울 마포구",
      name: "서울가든호텔",
      hallType: "일반,호텔",
      menuType: "양식,중식",
      mealCost: "77,000원",
      capacity: "최소 200명",
      id: "all seoul sall mapo nomal hotel wt ch 200 79won mc",
    },
    {
      imageSrc: "images/wd36.jpg",
      location: "서울 강동구",
      name: "루벨 강동점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "71,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangdong nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd37.jpg",
      location: "서울 강동구",
      name: "스테이지28",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최소 150명",
      id: "all seoul sall gangdong out bf 100 79won sc mc",
    },
    {
      imageSrc: "images/wd38.jpg",
      location: "서울 강동구",
      name: "강동웨딩KDW",
      hallType: "일반",
      menuType: "양식,중식",
      mealCost: "66,000원",
      capacity: "최소 250명",
      id: "all seoul sall gangdong nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd39.jpg",
      location: "서울 성동구",
      name: "보테가마지오",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "85,000원",
      capacity: "최소 300명",
      id: "all seoul sall seongdong nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd40.jpg",
      location: "서울 성동구",
      name: "디노체컨벤션",
      hallType: "일반",
      menuType: "한식",
      mealCost: "60,000원",
      capacity: "최소 300명",
      id: "all seoul sall seongdong nomal ko 300 79won sc",
    },
    {
      imageSrc: "images/wd41.jpg",
      location: "서울 성동구",
      name: "레노스블랑쉬",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "48,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongdong nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd42.jpg",
      location: "서울 성동구",
      name: "H스퀘어",
      hallType: "일반",
      menuType: "한식",
      mealCost: "61,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongdong nomal ko 200 79won sc",
    },
    {
      imageSrc: "images/wd43.jpg",
      location: "서울 중구",
      name: "PJ호텔",
      hallType: "야외/하우스,호텔",
      menuType: "뷔페",
      mealCost: "72,000원",
      capacity: "최소 200명",
      id: "all seoul sall junggu out hotel bf 200 79won sc",
    },
    {
      imageSrc: "images/wd44.jpg",
      location: "서울 중구",
      name: "명동라루체",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최소 250명",
      id: "all seoul sall junggu nomal ko 200 79won sc",
    },
    {
      imageSrc: "images/wd45.jpg",
      location: "서울 중구",
      name: "라비두스",
      hallType: "야외/하우스,컨벤션",
      menuType: "한식,양식",
      mealCost: "88,000원",
      capacity: "최소 100명",
      id: "all seoul sall junggu out convention ko 100 79won mc",
    },
    {
      imageSrc: "images/wd46.jpg",
      location: "서울 중구",
      name: "아벤티움",
      hallType: "일반,채플,컨벤션",
      menuType: "뷔페",
      mealCost: "65,000원",
      capacity: "최소 250명",
      id: "all seoul sall junggu nomal chapel convention bf 200 79won sc",
    },
    {
      imageSrc: "images/wd47.jpg",
      location: "서울 중구",
      name: "웨스턴조선호텔",
      hallType: "호텔",
      menuType: "양식,중식,퓨전",
      mealCost: "150,000원",
      capacity: "최소 300명",
      id: "all seoul sall junggu hotel wt ch fs 300 100won mc",
    },
    {
      imageSrc: "images/wd48.jpg",
      location: "서울 관악구",
      name: "이라운지 서울대점",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "51,000원",
      capacity: "최소 300명",
      id: "all seoul sall gwanak nomal bf 300 59won sc mc",
    },
    {
      imageSrc: "images/wd49.jpg",
      location: "서울 관악구",
      name: "서울대교수회관",
      hallType: "일반",
      menuType: "한식",
      mealCost: "55,000원",
      capacity: "최소 250명",
      id: "all seoul sall gwanak nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd50.jpg",
      location: "서울 관악구",
      name: "낙성대공원전통혼례식장",
      hallType: "야외/하우스",
      menuType: "양식,중식,퓨전",
      mealCost: "45,000원",
      capacity: "최소 100명",
      id: "all seoul sall gwanak out bf 100 49won mc",
    },
    {
      imageSrc: "images/wd51.jpg",
      location: "서울 성북구",
      name: "르한스",
      hallType: "야외/하우스",
      menuType: "뷔페",
      mealCost: "77,000원",
      capacity: "최소 150명",
      id: "all seoul sall seongbuk out bf 100 79won sc mc",
    },
    {
      imageSrc: "images/wd52.jpg",
      location: "서울 성북구",
      name: "에디스웨딩하우스",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "50,000원",
      capacity: "최소 150명",
      id: "all seoul sall seongbuk nomal bf 100 59won sc",
    },
    {
      imageSrc: "images/wd53.jpg",
      location: "서울 성북구",
      name: "웨딩스퀘어",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 150명",
      id: "all seoul sall seongbuk nomal bf 200 59won sc",
    },
    {
      imageSrc: "images/wd54.jpg",
      location: "서울 성북구",
      name: "고려스퀘어",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "47,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongbuk nomal bf 200 49won sc",
    },
    {
      imageSrc: "images/wd55.jpg",
      location: "서울 성북구",
      name: "아리랑힐호텔동대문",
      hallType: "야외/하우스,호텔",
      menuType: "뷔페,한식,양식",
      mealCost: "49,000원",
      capacity: "최소 20명",
      id: "all seoul sall seongbuk out hotel bf 0 49won sc mc",
    },
    {
      imageSrc: "images/wd56.jpg",
      location: "서울 성북구",
      name: "파라스파라호텔",
      hallType: "호텔",
      menuType: "한식,양식",
      mealCost: "90,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongbuk hotel bf 200 99won mc",
    },
    {
      imageSrc: "images/wd57.jpg",
      location: "서울 성북구",
      name: "더빅토리아웨딩파티",
      hallType: "일반,호텔",
      menuType: "뷔페",
      mealCost: "58,000원",
      capacity: "최소 200명",
      id: "all seoul sall seongbuk nomal hotel bf 0 59won sc",
    },
    {
      imageSrc: "images/wd58.jpg",
      location: "서울 성북구",
      name: "선운각",
      hallType: "야외/하우스",
      menuType: "뷔페,한식,양식",
      mealCost: "77,000원",
      capacity: "최소 100명",
      id: "all seoul sall seongbuk out bf 100 79won sc mc",
    },
    {
      imageSrc: "images/wd59.jpg",
      location: "경기 성남시",
      name: "분당앤스퀘어",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "55,000원",
      capacity: "최소 150명",
      id: "all gyeonggi gall seongnam nomal bf 100 59won sc",
    },
    {
      imageSrc: "images/wd60.jpg",
      location: "경기 성남시",
      name: "라온제나분당",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "62,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall seongnam nomal bf 200 79won sc",
    },
    {
      imageSrc: "images/wd61.jpg",
      location: "경기 성남시",
      name: "W스퀘어컨벤션",
      hallType: "일반,야외/하우스",
      menuType: "뷔페",
      mealCost: "65,000원",
      capacity: "최소 150명",
      id: "all gyeonggi gall seongnam nomal out bf 100 79won sc",
    },
    {
      imageSrc: "images/wd62.jpg",
      location: "경기 성남시",
      name: "밀리토피아호텔",
      hallType: "일반,호텔",
      menuType: "양식,퓨전",
      mealCost: "66,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall seongnam nomal hotel bf 200 79won sc mc",
    },
    {
      imageSrc: "images/wd63.jpg",
      location: "경기 성남시",
      name: "가천컨벤션센터",
      hallType: "일반",
      menuType: "퓨전",
      mealCost: "69,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall seongnam nomal fs 300 79won sc mc",
    },
    {
      imageSrc: "images/wd64.jpg",
      location: "경기 수원시",
      name: "수원노블레스웨딩컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "62,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall suwon nomal bf 300 79won sc",
    },
    {
      imageSrc: "images/wd65.jpg",
      location: "경기 수원시",
      name: "수원호텔리츠컨벤션",
      hallType: "일반",
      menuType: "뷔페",
      mealCost: "64,000원",
      capacity: "최소 150명",
      id: "all gyeonggi gall suwon nomal bf 100 79won sc",
    },
    {
      imageSrc: "images/wd66.jpg",
      location: "경기 수원시",
      name: "호텔앙코르이비스앰배서더",
      hallType: "호텔",
      menuType: "뷔페",
      mealCost: "79,000원",
      capacity: "최소 300명",
      id: "all gyeonggi gall suwon hotel bf 300 79won sc",
    },
    {
      imageSrc: "images/wd67.jpg",
      location: "경기 수원시",
      name: "수원더아리엘",
      hallType: "일반,야외/하우스",
      menuType: "뷔페",
      mealCost: "60,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall suwon nomal out bf 200 79won sc",
    },
    {
      imageSrc: "images/wd68.jpg",
      location: "경기 수원시",
      name: "라마다프라자수원호텔",
      hallType: "호텔",
      menuType: "한식,양식",
      mealCost: "68,000원",
      capacity: "최소 250명",
      id: "all gyeonggi gall suwon hotel fs 200 79won mc",
    },

    // 다른 웨딩홀 데이터를 추가할 수 있습니다.
  ];

  // 웨딩홀 정보를 동적으로 생성하고 페이지에 추가하는 함수
  function createWeddingHallElements(data) {
    const weddingHallsList = $("#weddingHallsList");

    data.forEach((hall) => {
      const hallContainer = $("<div>").addClass(`mix ${hall.id}`);

      // 이미지 추가
      const image = $("<img>")
        .attr("src", hall.imageSrc)
        .attr("alt", "웨딩홀 이미지");
      hallContainer.append(image);

      const leftContainer = $("<div>").addClass("w-box-left");
      // 위치 정보 추가
      const location = $("<p>").text(hall.location);
      leftContainer.append(location);

      const name = $("<h3>").text(hall.name);
      leftContainer.append(name);

      hallContainer.append(leftContainer);

      const rightContainer = $("<div>").addClass("w-box-right");

      // 홀 종류 추가
      const hallType = $("<p>").html(`<span>홀 종류: </span>${hall.hallType}`);
      rightContainer.append(hallType);

      // 메뉴 종류 추가
      const menuType = $("<p>").html(
        `<span>메뉴 종류: </span>${hall.menuType}`
      );
      rightContainer.append(menuType);

      // 식사 비용 추가
      const mealCost = $("<p>").html(
        `<span>식사 비용: </span>${hall.mealCost}`
      );
      rightContainer.append(mealCost);

      // 보증 인원 추가
      const capacity = $("<p>").html(
        `<span>보증 인원: </span>${hall.capacity}`
      );
      rightContainer.append(capacity);

      hallContainer.append(rightContainer);

      // 페이지에 추가
      weddingHallsList.append(hallContainer);
    });
  }

  // 페이지 로드 시 웨딩홀 정보 생성
  createWeddingHallElements(weddingHallData);
});
