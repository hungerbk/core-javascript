/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];
console.log(typeof arr); //object
console.log(Array.isArray(arr)); //true

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "array";
}

function isNull(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "null";
}

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {};
// $.each((index, item) => {}); //제이쿼리
arr.forEach(function (item, index) {
  this[index] = item;
}, user);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse();
// console.log(arr);

// splice
arr.splice(1, 0, 23, 5); //[10, 23, 5, 100, 1000, 10000]
//시작 제거 [추가]
// arr.splice(1, 3, 23, 5); //[10, 23, 5]
console.log(arr);

// sort
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다
arr.sort((a, b) => {
  // return b - a;//내림차순
  return a - b; //오름차순
});
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map 새로운 배열을 반환하기 때문에 return과 받는 값이 필요함
// forEach는 순환처리만 하는 것.
// map은 조건 처리를 해서 새로운 배열을 반환

let todo = ["밥먹기", "미용실가기", "코딩공부하기"];

let template = todo.map((todoList) => {
  return /* html */ `<li>${todoList}</li>`;
});

let neArray = arr.map((item) => item * 2);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];

// find 하나만 찾음

const find = users.find((item, idnex) => {
  return item.id < 5;
});
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter 전부 다 찾아서 배열로 넣어줌

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬져",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

// reduce

//친구들 나이의 총합
let friendsAge = friends.reduce((acc, cur) => acc + cur.age, 0); //초기값을 지정하지 않으면 첫번째 acc는 객체임 [object object]2321 출력

console.log(friendsAge);

let template2 = todo.reduce((acc, cur, index) => {
  return /* html */ acc + `<li>할일${index + 1}: ${cur}</li>`;
}, "");
console.log(template2);
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join
