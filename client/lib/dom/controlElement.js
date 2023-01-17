import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";

//바로 밑에 오는 함수의 설명을 적는 것 JSDoc
/**
 * @function isElement checkElement //isElement 함수 설명
 * @param {HTMLElement} node
 * @return {disabled} set disabled
 */
export function disableElement(node) {
  if (!isElement(node)) {
    typeError("disableElement 함수의 인자는 DOM 요소 노드여야 합니다.");
  }
  node.disabled = true;
}

export function enableElement(node) {
  if (!isElement(node)) {
    typeError("enableElement 함수의 인자는 DOM 요소 노드여야 합니다.");
  }
  node.disabled = false;
}

export function visibleElement(node) {
  //보여야 함
  if (!isElement(node)) {
    typeError("visibleElement 함수의 인자는 DOM 요소 노드여야 합니다.");
  }
  node.hidden = false;
}

export function invisibleElement(node) {
  //안보여야 함
  if (!isElement(node)) {
    typeError("invisibleElement 함수의 인자는 DOM 요소 노드여야 합니다.");
  }
  node.hidden = true;
}
