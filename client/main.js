/* global gsap */
import { addClass, clearContents, copy, getInputValue, getNode, getRandom, insertLast, isNumericString, removeClass, showAlert } from "./lib/index.js";
import { jujeobData } from "./data/data.js";

const submit = getNode("#submit");
const resultArea = getNode(".result");

function clickSubmitHandler(e) {
  e.preventDefault();
  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    showAlert(".alert", "이름을 입력해주세요.", 2000);
    // addClass(resultArea, "shake"); // 창을 흔드는 클래스를 만들었음. 근데, 두번째부터는 적용되지 않음. 클래스가 이미 있으니까..
    // 1초 뒤에 클래스를 지우기
    // setTimeout(() => {
    //   removeClass(resultArea, "shake");
    // }, 1000);
    // 성공한 다음 일정 시간이 지난 뒤 실행하는 것이 더 좋음. 근데 복잡해짐.. 이때 사용하는 것이 GSAP
    gsap.fromTo(resultArea, 0.01, { x: -5 }, { x: 5, clearProps: "x", repeat: 20 });
    // 클래스를 추가하는 것이 아니라 트랜지션을 건드는 것
    return;
  }

  if (isNumericString(name)) {
    showAlert(".alert", "제대로 된 이름을 입력해주세요.", 2000);
    gsap.fromTo(resultArea, 0.01, { x: -5 }, { x: 5, clearProps: "x", repeat: 20 });
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function clickCopyHandler() {
  let text = resultArea.textContent;
  // navigator.clipboard.writeText(text); //writeText(): 매개변수로 받은 문자를 클립보드에 써주는 역할
  //위 코드는 콘솔에 찍으면 Promise가 반환되는 걸 볼 수 있음
  // copy(text); //약속구문 반환
  // 다음 해야 할 일. 복사됐다고 알럿을 보여줘야 함 => promise가 함
  // 복사됐다는 알림은 여기에 작성하면 안 됨. 성공해야만 보여야 하니까. 그때 사용하는 것이 promise!
  copy(text).then(() => {
    showAlert(".alert-success", "클립보드 복사가 완료됐습니다.", 2000);
    return;
  });
  //promise-then 이건 약속된 규칙. 성공하면 then에 있는 함수를 실행한다
}

submit.addEventListener("click", clickSubmitHandler);
resultArea.addEventListener("click", clickCopyHandler);
