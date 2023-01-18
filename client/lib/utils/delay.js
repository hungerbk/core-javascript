import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode(".first");

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// delay(() => {
//   first.style.top = "-100px";
//   delay(() => {
//     delay(() => {
//       first.style.top = "0px";
//     });
//     first.style.transform = "rotate(360deg)";
//   });
// });

const defaultOptins = {
  shouldReject: false,
  timeout: 1000,
  data: "성공했습니다.",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

export function delayP(options = {}) {
  // defaultOptions
  let config = { ...defaultOptins };
  if (isNumber(options)) {
    config.timeout = options; //숫자가 들어오면 자동으로 timeout에 할당. timeout:3000 이렇게 안쓰고 3000만 써도 됨. {3000} 이렇게는 안 됨. 에러남! 객체인데 키가 없으니까!
  }

  // 객체 합성 mixin. 위에 정의된 객체와 내가 받은 객체를 합쳐서 써야 함
  if (isObject(options)) {
    config = { ...config, ...options }; //같은 속성이면 뒤에 있는 값으로 덮어짐
  }

  const { shouldReject, data, errorMessage, timeout } = config;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (!shouldReject) {
      //   resolve("성공");
      // } else {
      //   reject("실패");
      // }
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}

// delayP(3000).then((res) => console.log(res));

//res = result
// delayP()
//   .then((res) => console.log(res))
//   .catch((res) => console.log(res));

/* ------------------------------------------------------------------------ */
// async : 일반 함수를 promise를 반환하는 함수로 만든다
// await : 1. promise가 반환하는 result 가져오기
//         2. 코드 실행 흐름 제어
/* ------------------------------------------------------------------------ */

async function delayA() {
  return "완료";
}

let result = await delayA();

// console.log(result);
