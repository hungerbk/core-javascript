/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);
// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let nickName = "tiger";
let message3 = `안녕 내 이름은 ${"안녕" / 3}야`;
console.log(message3);
// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;
console.log("number: ", typeof number);
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// console.log(12345n + 10); bigint에 일반 숫자를 더할 수 없음
console.log(typeof 12345n);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol("id"));

console.log(typeof Math);

const func = function () {};
console.log(func);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류
// null을 불러왔을 때 object로 나옴
// Math를 object라고 알려줌. 객체인 것은 맞지만, Math라고 알려주는 것이 좋음

// Object

// const user = new Object(); //생성자 함수는 대문자로 시작
// user.name = "tiger";
// user.age = 32;
// 위와 아래는 같음!

// 오브젝트는 key, value
// 객체 리터럴
const user = {
  name: "tiger",
  age: 27,
  fish: function () {
    return "뻐끔뻐끔";
  },
};
// 객체의 요소는 property, 객체 안의 함수는 method
// user.fish()로 실행

// Array
// let list = new Array();

// 배열 리터럴
// collection
// key 없이 value로만 구성되어 있음
// 알아서 key를 indexing함 (0부터 시작)
let list = [10, 100, 1000, 1, 2, 3];

// function
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 30));
// this
