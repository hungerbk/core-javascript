import { insertLast, xhrData, xhrPromise } from "./lib/index.js";

// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (res) => {
//     console.log(res);
//     insertLast("body", JSON.stringify(res));
//   },
//   (err) => {
//     insertLast("body", "데이터 로딩에 실패했습니다.");
//     console.error(err);
//   }
// );

xhrPromise
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log(res);
    insertLast(document.body, JSON.stringify(res));
  })
  .catch((err) => console.log(err));
