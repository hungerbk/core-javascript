/* eslint no-undef: "warn" */
/* eslint no-unused-vars: "off" */

// const firstNumber = getNode("#firstNumber");
// const secondNumber = getNode("#secondNumber");
// const done = getNode("#done");
// const result = getNode(".result");

// function plus(e) {
//   e.preventDefault();
//   let firstNum = Number(firstNumber.value);
//   let secondNum = Number(secondNumber.value);
//   changeResult(firstNum, secondNum);
// }

// function changeResult(firstNum, secondNum) {
//   result.textContent = firstNum + secondNum;
// }

// done.addEventListener("click", plus);

const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const done = getNode("#done");
const result = getNode(".result");

// 재사용을 고려하기 위해 이 함수에서는 숫자로 변환하지 않음! 다른데서도 쓸건데 거기에서도 숫자만 받지는 않을거니까
function getInputValue(node) {
  if (typeof node === "string") node = getNode(node);
  if (node.tagName !== "INPUT") refError("getInputValue 함수는 INPUT ELEMENT만 허용합니다.");
  return node.value;
}

// const sum = (valueA, valueB) => valueA + valueB;

function sum(valueA, valueB) {
  return valueA + valueB;
}

function clearContents(node) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = "";
}

function handler(e) {
  //form 태그는 값을 전달해야 하기 때문에 submit을 해야함.
  //근데 우리가 저장될 곳을 지정하지 않아서 값은 전달되지 않는데 페이지가 리로드됨(기본기능) <이벤트가 적용되기 전에 실행
  //그걸 막아주기
  e.preventDefault();
  //input은 모든 값을 문자로 받기 때문에 숫자로 형변환
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);
  console.log(total);
  clearContents(result);
  insertLast(result, total);
}

function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);
  clearContents(result);
  insertLast(result, total);
}

done.addEventListener("click", handler);

firstInput.addEventListener("change", inputHandler);
secondInput.addEventListener("change", inputHandler);
