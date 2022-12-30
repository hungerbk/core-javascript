/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// let i = 10;

// do {
//   console.log("최초실행");
//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let count = +prompt("몇 번 순환할까요?", "");

// do {
//   console.log(count);
//   if (count <= 0 || !count) {
//     console.log("최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'");
//     break;
//   }
//   count--;
// } while (count);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector(".first");
let second = document.querySelector(".second");

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);
  // 값을 계속 실행하는데, 부정문인 것이 중요. true일 때 실행하는 것
  // element는 노드타입이 1, node.nodeType이 1이 아닌가? => 아니면 다음 요소 탐색
  // => 맞으면 false가 돼서 do while문 종료. node 리턴
  return node;
}

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);

  return node;
}

next(first);
console.log(prev(second));
