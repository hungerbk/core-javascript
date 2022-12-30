/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

// 2 ~ 10까지의 짝수 출력하기
// let value = 10;
// for (let i = 1; i <= value; i++) {
//   if (i % 2) {
//     continue;
//   }
//   console.log(i);
// }

const frontEndDev = "HTML CSS SVG JavaScript jQuery React Redux".split(" ");

// let i = 0;
// let l = frontEndDev.length;

// while (i < l) {
//   // console.log(frontEndDev[i]);
//   i += 1;
// }

for (let i = 0; i < frontEndDev.length; i++) {
  let result = frontEndDev[i];
  // if (result.includes("SVG") || result.includes("jQuery")) continue;

  if (result.includes("JavaScript")) {
    console.log(result);
    break;
  }

  console.log(result);
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
