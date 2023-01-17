/* readyState
0: uninitalized 초기화
1: loading 로딩
2: loaded 로딩이 완료된
3:interative 작동중인 단계, 인터랙티브
4:complete 완료
0~1은 거의 찍히지 않는다 */

function xhrData(options) {
  //객체 하나만 받음!
  // const options = {
  //   url: "https://jsonplaceholder.typicode.com/users",
  //   method: "GET",
  //   body: null,
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // 내부적으로 위처럼 적용될 것임!!
  const { method, url, body } = options;
  const xhr = new XMLHttpRequest();
  //비동기 통신 오픈
  xhr.open(method, url);

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr; //객체 구조 분해 할당
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        console.log(JSON.parse(response));
      }
    } else {
      console.error("통신실패");
    }
  });

  //서버에 요청
  xhr.send(JSON.stringify(body)); // POST method를 사용한다고 했을 때, 정보를 보내줘야 함. send할 때 같이 보낸다
  //open과 send는 세트다!
}

xhrData({
  url: "https://jsonplaceholder.typicode.com/users",
  method: "GET",
  body: null,
  headers: {
    "Content-Type": "application/json",
  },
});

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
