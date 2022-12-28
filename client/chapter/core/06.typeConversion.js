/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// String()

// number -> '2022'
const YEAR = 2022;
console.log(String(YEAR));
// console.log(typeof YEAR);

// undefined -> 'undefined'
// null
console.log(String(undefined));
let days = null;
console.log(String(days));

// boolean -> 'true'
let isKind = true;
console.log(String(isKind));
console.log(typeof (isKind + ""));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// Number()

// undeinfed -> NaN
console.log(Number(undefined));

// null -> 0
let money = null;
console.log(Number(money));

// boolean -> true: 1 / false: 0
let cutie = true;
console.log(Number(cutie));
console.log(cutie * 1);
console.log(cutie / 1);
console.log(+cutie);

// string
// 공백을 제거하고 숫자로 만듦
let num = "  123";
console.log(num / 3);

// numeric string
let width = "320.12px";
// 10진수의 정수로. 기본진수가 10진수이긴 하지만, 명시해주는 것이 좋다!
console.log(parseInt(width, 10));
// 소숫점 까지
console.log(parseFloat(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(null));
// 위에 나열한 것 이외의 것들
console.log(Boolean(123));
// 느낌표 하나는 부정 -> 부정의 부정의 원래 자기의 것!
console.log(!!123);
