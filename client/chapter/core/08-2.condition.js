/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.

// "이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.
// let age = prompt("나이를 입력하세요", 0);
// if (age >= 14 && age <= 90) {
//   console.log("14세 이상 90세 이하이시군요.");
// }

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thIsisFalsy: false };
//전부 true 임. " " 공백이 있기 때문에 true. 배열 자체도 값을 가짐(true). 마지막은 객체(key : value) 객체 자체도 true임. 안의 값이 false인 것은 상관 없음
//모두 true이기 때문에 마지막 값 반환

// 첫번째 Truthy를 찾는 연산 (||) 2 리턴 ([2, 3].length])
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };

let userName = prompt("ID를 입력하세요", "");

// if (userName?.localeCompare("Admin", "en", { sensitivity: "base" }) === 0) {
//   let pw = prompt("비밀번호를 입력하세요", "");
//   if (pw?.localeCompare("TheMaster", "en", { sensitivity: "base" }) === 0) {
//     alert("환영합니다!");
//   } else if (pw === "" || pw === null) {
//     alert("취소했습니다.");
//   } else {
//     alert("인증에 실패하였습니다.");
//   }
// } else if (userName === "" || userName === null) {
//   alert("취소했습니다.");
// } else {
//   alert("인증되지 않은 사용자입니다.");
// }
//대소문자 구분 없이 가능하게 만들어 보기
if (userName?.toLowerCase() === "admin") {
  let pw = prompt("비밀번호를 입력하세요", "");
  if (pw?.toLowerCase() === "themaster") {
    alert("환영합니다!");
  } else if (pw === "" || pw === null) {
    alert("취소했습니다.");
  } else {
    alert("인증에 실패하였습니다.");
  }
} else if (userName.replace(/\s*/g, "") === "" || userName === null) {
  // 모든 공백을 빈 문자열로 반환하는 정규식 사용. 이걸 사용하지 않으면 공백을 인식 못해서(문자로 취급해서) 다른 코드가 실행 됨
  alert("취소했습니다.");
} else {
  alert("인증되지 않은 사용자입니다.");
}

// let num = +prompt("숫자를 입력하세요", 0);

// if (num % 2 === 0) {
//   console.log("짝수입니다.");
// } else {
//   console.log("홀수입니다.");
// }
