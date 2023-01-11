function addClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string") typeError("addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.");
  node.classList.add(className);
}

// 변경하기: 대상의 클래스를 지우고 지운 값을 받아서 뭘 해야하나? => 아님. return 할 필요 없음!
function removeClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (!className) {
    node.className = " ";
    return; //함수종료
  }
  if (typeof className !== "string") typeError("addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.");
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string") typeError("addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.");
  node.classList.toggle(className);
}

// 자바스크립트에서 객체의 key, value를 변수로 받기 위해선 . 사용 X
// [] 각괄호 표기법
function getCss(node, prop) {
  if (typeof node === "string") node = getNode(node);
  if (!(prop in document.body.style)) {
    syntaxError("getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.");
  }
  return getComputedStyle(node)[prop];
}
// jQuery
// 대상에게 원하는 css 속성을 추가.
function setCss(node, prop, value) {
  if (typeof node === "string") node = getNode(node);
  if (!(prop in document.body.style)) {
    syntaxError("setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.");
  }
  if (!value) syntaxError("setCss 함수의 세 번째 인자는 필수값입니다.");
  if (typeof value !== "string") typeError("setCss 함수의 세 번째 인자는 문자 타입이어야 합니다.");
  node.style[prop] = value;
}

const css = (node, prop, value) => (!value ? getCss(node, prop) : setCss(node, prop, value));
