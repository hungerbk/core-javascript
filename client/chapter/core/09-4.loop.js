/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  hasOwnProperty: function () {
    "헤헤";
  },
};

let key = "valueOf";

console.log(key in javaScript);
// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

console.log(javaScript.hasOwnProperty(key));

Object.prototype.nickName = "tiger";
// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

//Object가 가지고 있는 함수. Object의 능력을 우리가 선언한 javascript가 빌려쓰는 법: call 사용
//call 함수를 빌려서 호출하는 것
Object.prototype.hasOwnProperty.call(javaScript, key);

// for ~ in 문

// let a = {}; 객체 생성하는 방법. {}는 객체를 의미함.
// {}는 객체 자체를 의미하기 때문에 Object.prototype를 {}로 치환할 수 있음

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    //if문이 없으면 부모에 선언한 nickName도 출력됨
    console.log(key);
  }
}
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

//성능 이슈로 배열엔 for in을 쓰지 않는 것을 권장. 순서대로 나온다는 보장이 없음...!!
let tens = [10, 100, 1000, 10000];

for (let value in tens) {
  // 마찬가지로 이렇게 안 쓰면 오브젝트 자체의 값(여기에선 tiger가 계속 출력됨)
  if ({}.hasOwnProperty.call(tens, value)) {
    console.log(tens[value]);
  }
}
