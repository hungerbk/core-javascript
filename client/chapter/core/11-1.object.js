/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  "z-index": 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  "max-width": 800,
  height: "40vh",
  "min-height": 280,
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한

let authUser = null;

authUser = {
  uid: "user-id-2wr4tt3ed",
  name: "kindtiger",
  email: "seonbeom2@gmail.com",
  isSignIn: true,
  permission: "paid", //free || paid
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.name);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser["name"]);
// 계산된 프로퍼티 (calcurate property)
let calculateProperty = "phone"; // phone | tel

function createUser(computeProp = calculateProperty) {
  //디폴트 파라미터
  return {
    name: "unknown",
    email: "unknown@company.io",
    [computeProp]: "010-7169-0262",
  };
}

const user = createUser();

// 프로퍼티 포함 여부 확인

Object.prototype.SIGN = true; //전역 오염

for (let key in authUser) {
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    //오브젝트의 능력을 빌려서 authUser의 키만 가져옴
    // console.log(key); //그냥 이것만 쓰면 위의 SIGN도 출력됨
  }
}

// 프로퍼티 나열 객체를 배열로

// let valList = Object.values(authUser);
// let keyList = Object.keys(authUser);

// console.log(valList, keyList);

const getPropertiesList = (object) => Object.keys(object);
// function getPropertiesList(object) {
//   let result = [];
//   for (let key in object) {
//     if ({}.hasOwnProperty.call(object, key)) {
//       result.push(key);
//     }
//   }
//   return result;
// }

let result = getPropertiesList(authUser);

console.log(result);

// 프로퍼티 제거(remove) 값을 비워놓는 것 (키는 두고 값만 삭제) or 삭제(delete) 프로퍼티 키, 값 모두 삭제

//유틸함수 만들기

function removeProperty(object, key) {
  if (!(typeof object === "object")) {
    // throw
  }
  object[key] = null;
}
// console.log(authUser);
// removeProperty(authUser, "name");
// console.log(authUser);

function deleteProperty(object, key) {
  delete object[key];
}

// console.log(authUser);
// deleteProperty(authUser, "name");
// console.log(authUser);

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ... 지양하자

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 개수가 0이면 ? true : false
function isEmptyObject(object) {
  // if(Object.keys(object).length){
  //   return true
  // }else{
  //   return false
  // }

  // return Object.keys(object).length === 0 ? true : false
  return Object.keys(object).length === 0;
}

console.log(isEmptyObject(authUser));

const empty = {};

console.log(isEmptyObject(empty));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
};

//월급의 총 합 구하기

let total = 0;
// for (let keyValue of Object.entries(salaries)) {
//   let key = keyValue[0];
//   let value = keyValue[1];

//   total += value;
// }

//배열 구조 분해 할당 destructuring assignment
for (let [key, value] of Object.entries(salaries)) {
  total += value;
}

console.log(total);

let color = ["#ff0000", "#2b00ff", "#00ff2f"];
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

const [COLOR_RED, COLOR_BLUE, COLOR_GREEN] = color;
//초과인자 넣으면 뒤는 undefined 리턴

//발췌
const [, , GREEN] = color;

//객체 구조 분해 할당
const { John, Ann, Pete } = salaries;
console.log(John);
//100 return
//const { John: a, Ann: b, Pete: c } = salaries => a가 변수이름
//salaries[John] => John
//프로퍼티를 변수인 것 처럼 사용할 수 있음
//키만 일치하면 순서는 상관 없음

//이건 무슨 코드지...
const element = {
  width: 500,
  height: 600,
};

function getElementWidth(option, node) {
  const { width, height } = element;

  width;
}
