import { bindEvent, diceAnimation, disableElement, enableElement, getNode, getNodes, visibleElement, invisibleElement, insertLast, attr, clearContents, memo } from "./lib/index.js";

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기  > 이미 만들었음. 사용 안 할 거임!
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기

// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기

// 이렇게 해도 되지만.. 번거롭다!! 배열로 받아서 사용하기 => getNodes() 사용
// const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");
// const recordButton = getNode(".buttonGroup > button:nth-child(2)");
// const resetButton = getNode(".buttonGroup > button:nth-child(3)");

// 배열의 구조분해할당
// 유사배열도 배열의 구조분해할당을 사용할 수 있음
const [rollingDiceButton, recordButton, resetButton] = getNodes(".buttonGroup > button"); //NodeList가 반환이 됨. 노드리스트는 유사배열
const recordListWrapper = getNode(".recordListWrapper");
memo("@tbody", () => getNode(".recordListWrapper tbody"));

//내가 작성한 얼레벌레 코드
// function renderRecordListItem() {
//   const record = getNode(".recordList > tbody");
//   insertLast(
//     record,
//     `<tr>
//   <td>0</td>
//   <td>5</td>
//   <td>5</td>
// </tr>`
//   );
// }

/* --------------------------------------------------------- */
/* render */
/* --------------------------------------------------------- */

// 특정 대상의 속성값을 가져오거나 / 설정할 수 있는 함수

let count = 0;
let total = 0;

function renderRecordListItem() {
  let diceValue = Number(attr(memo("cube"), "data-dice")); //이미 캐싱된 값이 있기 때문에 이렇게 불러오기만 해도 됨!(다른데서 저장한 값도 불러올 수 있음!)
  let template = /* html */ `<tr>
  <td>${++count}</td>
  <td>${diceValue}</td>
  <td>${(total += diceValue)}</td>
</tr>`;

  insertLast(memo("@tbody"), template);
  //스크롤 탑의 위치를 스크롤의 길이만큼 줘서 계속 스크롤이 아래에 가있게 > 밑으로 정보가 쌓이면 밑으로 같이 내려감!
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

/* --------------------------------------------------------- */
/* event */
/* --------------------------------------------------------- */

// const handlerRollingDice = () => {
//   // diceAnimation();

//   let stopAnimation;
//   let isRolling = false;

//   return () => {
//     if (!isRolling) {
//       stopAnimation = setInterval(diceAnimation, 100);
//     } else {
//       clearInterval(stopAnimation);
//     }

//     isRolling = !isRolling;
//   };
// };

//IIFE
const handleRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;

  return () => {
    if (!isRolling) {
      //첫번째 클릭
      stopAnimation = setInterval(diceAnimation, 100);
      // recordButton.disabled = true; //활성화가 안 된 상태
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      // 두번째 클릭
      clearInterval(stopAnimation);
      // recordButton.disabled = false; //주사위를 멈추면 활성화
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
  };
})();

const handleRecord = () => {
  visibleElement(recordListWrapper);
  renderRecordListItem();
};

const handleReset = () => {
  count = 0;
  total = 0;
  invisibleElement(recordListWrapper);
  clearContents(memo("@tbody"));
};

// rollingDiceButton.addEventListener("click", handlerRollingDice()); // handlerRollingDice()() 이거랑 같음. 이벤트 핸들러 안에 넣으면 한번 실행한거니까 한번 더 실행하면 됨
rollingDiceButton.addEventListener("click", handleRollingDice); //이렇게 실행해서 안의 함수까지 실행하게 하려면 IIFE 패턴을 이용해야 함
recordButton.addEventListener("click", handleRecord);
resetButton.addEventListener("click", handleReset);

// let eventOff = bindEvent(rollingDiceButton.addEventListener("click", handlerRollingDice);)
