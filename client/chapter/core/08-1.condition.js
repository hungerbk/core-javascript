/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.

// 입력받은 숫자가 0보다 큰 경우 1을 출력
// 입력받은 숫자가 0보다 작은 경우 -1을 출력
// 입력받은 숫자가 0인 경우 0을 출력
// (사용자는 항상 숫자를 입력한다고 가정)

let num = prompt("숫자를 입력하세요", 0);
if (num > 0) {
  console.log(1);
} else if (num < 0) {
  console.log(-1);
} else {
  console.log(0);
}

let message = num > 0 ? "1" : num < 0 ? "-1" : "0";

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

// if 문(statement)

if (didWatchMovie === "yes") {
  console.log("재밌었니?");
} else {
  if (goingToWatchMovie === "yes") {
    console.log("언제볼거니?");
  } else {
    console.log("그렇구나");
  }
}

if (didWatchMovie.includes("yes")) {
  console.log("재밌었니?");
} else if (goingToWatchMovie === "yes") {
  console.log("언제볼거니?");
} else {
  console.log("그렇구나");
}

let message2 = didWatchMovie.includes("yes") ? "재밌었니?" : goingToWatchMovie === "yes" ? "언제볼거니?" : "그렇구나";

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
