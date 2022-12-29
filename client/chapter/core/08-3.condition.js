/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

let thisTime = DAWN;

switch (thisTime) {
  case MORNING:
    console.log("뉴스 기사 글을 읽는다.");
    break;
  case LUNCH:
    console.log("자주 가는 식당에 가서 식사를 한다.");
    break;
  case DINNER:
    console.log("동네 한바퀴를 조깅한다.");
    break;
  case NIGHT:
    console.log("친구에게 전화를 걸어 수다를 떤다.");
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
    break;
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log("뉴스 기사 글을 읽는다.");
} else if (thisTime === LUNCH) {
  console.log("자주 가는 식당에 가서 식사를 한다.");
} else if (thisTime === DINNER) {
  console.log("동네 한바퀴를 조깅한다.");
} else if (thisTime === NIGHT) {
  console.log("친구에게 전화를 걸어 수다를 떤다.");
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
}

/* switch vs. if -------------------------------------------------------- */

// 재사용할 수 있게 랜덤 숫자를 만드는 것도 함수로 만들어 버림
// Math.round()는 반올림하는 함수
// Math.random()은 0부터 1보다 작은 숫자까지 랜덤 숫자를 반환함. 원하는 최댓값이 있는 경우, 그 수만큼 곱해주면 됨
function getRandom(n) {
  return Math.round(Math.random() * n);
}

function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
    default:
      return "올바른 숫자를 입력하세요.";
  }
}

// 0 ~ 6 값을 받는다

// let number = +prompt("0~6까지 숫자르 입력하세요", "");
let result = getDay(getRandom(4));
console.log(result);
