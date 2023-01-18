/* readyState
0: uninitalized 초기화
1: loading 로딩
2: loaded 로딩이 완료된
3:interative 작동중인 단계, 인터랙티브
4:complete 완료
0~1은 거의 찍히지 않는다 */

import { typeError } from "../error/typeError.js";

/* ------------------------------------------------------------------------ */
// callback 방식
/* ------------------------------------------------------------------------ */
export function xhrData({
  method = "GET",
  url = "",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*",
  },
} = {}) {
  // {}={} 디폴트 값을 객체로 받기
  //변수를 받을 때 구조분해할당을 하면 편하지 않을까?
  // 이렇게 구조분해하면 초기값을 설정할 수 있음!

  //객체 하나만 받음!
  // const options = {
  //   url: "https://jsonplaceholder.typicode.com/users",
  //   method: "GET",
  //   body: null,
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // 내부적으로 위처럼 적용될 것임!!
  // const { method, url, body } = options;
  const xhr = new XMLHttpRequest();
  //비동기 통신 오픈
  xhr.open(method, url);

  // Object.entries(headers).forEach(([key, value]) => {
  //   //이중 배열을 반환하기 때문에 forEach를 통해 구조분해할당
  //   xhr.setRequestHeader(key, value);
  //   //헤더를 리퀘스트할 때 세팅하는 내장함수
  // });

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr; //객체 구조 분해 할당
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        onSuccess(JSON.parse(response));
      }
    } else {
      // console.error();
      onFail("통신실패");
    }
  });

  //서버에 요청
  xhr.send(JSON.stringify(body)); // POST method를 사용한다고 했을 때, 정보를 보내줘야 함. send할 때 같이 보낸다
  //open과 send는 세트다!
}

// xhrData({
//   url: "https://jsonplaceholder.typicode.com/users/1",
//   onSuccess: (result) => {
//     console.log(result);
//   },
//   onFail: (err) => {
//     console.error(err);
//   },
// });

// shorthand property 변수와 프로퍼티 키 이름이 같으면 한번만 써도 됨 url:url 이렇게 안 써도 됨
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST", //값을 받는 게 아니라 우리가 강제하는 것. 이렇게 post로 쓸거니까
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.error(err);
//   }
// );

// xhrData.delete(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.error(err);
//   }
// );

// xhrData.post(
//   "https://jsonplaceholder.typicode.com/users",
//   {
//     name: "seonbeom",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.error(err);
//   }
// );

// xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// });

/* ------------------------------------------------------------------------ */
// promise API
/* ------------------------------------------------------------------------ */

const defaultOptions = {
  url: "",
  method: "GET",
  headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  body: null,
};

export function xhrPromise(options = {}) {
  const xhr = new XMLHttpRequest();

  const { method, url, body, headers } = Object.assign({}, defaultOptions, options);
  //빈 객체 꼭 넣어야 함. defaulOptions 값이 바뀜..! {}를 안 적으면 새로운 객체를 생성하는 것이 아님. {} <-여기에 값을 넣겠다

  if (!url) typeError("서버와 통신할 url 인자는 반드시 필요합니다.");
  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null); // 리턴 밑에 있으면 실행이 안 되기 때문에 위로 올라옴!

  return new Promise((resolve, reject) => {
    xhr.addEventListener("readystatechange", () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response));
        }
      } else {
        reject("에러입니다.");
      }
    });
  });
}

// xhrPromise({ url: "https://jsonplaceholder.typicode.com/users/1" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

xhrPromise.get = (url) => {
  return xhrPromise({ url }); //promise가 나와야 then을 쓸 수 있기 때문에 promise를 바로 나오게!
};

xhrPromise.post = (url, body) => {
  return xhrPromise({ url, method: "POST", body });
};
xhrPromise.put = (url, body) => {
  return xhrPromise({ method: "PUT", url, body });
};
xhrPromise.delete = (url) => {
  return xhrPromise({ method: "DELETE", url });
};

// xhrPromise
//   .get("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
