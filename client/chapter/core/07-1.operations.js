/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

let firstValue = Number(prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1));
let secondValue = +prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
//숫자만 받을거니까 받는 순간 숫자로 만들기

console.log(firstValue + secondValue);

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = "10";
let b = "30";

// 단항 연산자 -> 피연산자가 하나인 경우
let unary = +a; //a가 숫자로 형변환

// 이항 연산자 -> 피연산자가 두개인 경우
let binary = a + b;

// 삼항 연산자 -> 피연산자가 세개인 경우
let ternary = Math.random() > 0.5 ? "big" : "small";

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 3;

// 산술 연산자: 곱셈
let multiplication = 2 * 3;

// 산술 연산자: 나눗셈
let division = 10 / 5;

// 산술 연산자: 나머지
let remainder = 10 % 3;

// 산술 연산자: 거듭 제곱
let power = 2 ** 53;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = "9" * "3";

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];

// let newArray = [1, 2, 3].concat([4, 5, 6]); //[1, 2, 3, 4, 5, 6] 요즈 concat은 많이 안 씀

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

// 전개 연산자 spread operatior
let newArray = [...firstArray, ...secondArray, "hola", 8, 9, 10];

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

let number = 100;
// 선,후 증감 연산자
// ++, --
number++; //100
console.log(number); //101
++number; //102
console.log(number); //102

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?
//2 * 5 = 10 + 125 = 135
console.log(total);

let total1 = count % 4;
count = count / 2;
let countPower = count ** 3;
total = total * count + countPower;
