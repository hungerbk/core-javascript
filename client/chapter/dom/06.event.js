/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const first = getNode(".first");
const second = getNode(".second");
const ground = getNode(".ground");
const ball = getNode(".ball");

function handler() {
  console.log("hit!");
  // const second = getNode(".second");
  // second.style.display = "none";

  // css(".second", "display", "none"); 우리가 만든 함수가 있었다..
}
// first.addEventListener("click", function () {});
first.addEventListener("click", handler); // handler() 이렇게 넣으면 안 됨!

// 바인딩하는 유틸 함수
// bindEvent.js로 옮김. 필기 떄문에 냅둠..
// function bindEvent(node, type, handler) {
//   if (typeof node === "string") node = getNode(node);
//   if (!/mouseenter|click|mousemove|mouseleave/g.test(type)) {
//     typeError("bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.");
//   }
//   node.addEventListener(type, handler);
//   return () => node.removeEventlistener(type, handler);
//   // 이벤트의 정보를 모두 가지고 있음 => 그걸 리턴
// }

// const off = bindEvent(".first", "click", handler); // <리턴한 값을 off로 받음. off는 지우는 함수

// bindEvent(".second", "click", off); // <off를 사용해서 바로 끌 수 있다

ground.addEventListener("click", function (e) {
  console.log(e.offsetX, e.offsetY);
  //공이 마우스 정가운데에 오게 하기 위해서 볼의 높이와 넓이를 빼줌
  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, ${e.offsetY - ball.offsetHeight / 2}px)`;
});

function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// resize
ground.addEventListener(
  "mousemove",
  debounce((e) => {
    console.log(e.offsetX, e.offsetY);

    let posX = e.offsetX;
    let posY = e.offsetY;

    const emotion = /* html */ `<div class="emotion" style="left:${posX}px;top:${posY}px">😘</div>`;

    insertLast(ground, emotion);
  }, 1000)
);

// second.addEventListener('click',function(){
//   first.removeEventListener('click', handler);
// })
