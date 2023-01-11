// 바인딩하는 유틸 함수
function bindEvent(node, type, handler) {
  if (typeof node === "string") node = getNode(node);
  if (!/mouseenter|click|mousemove|mouseleave/g.test(type)) {
    typeError("bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.");
  }
  node.addEventListener(type, handler);
  return () => node.removeEventlistener(type, handler);
  // 이벤트의 정보를 모두 가지고 있음 => 그걸 리턴
}
