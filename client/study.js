// // 두 배열 요소의 합을 비교해서, 합이 더 큰 배열 반환하는 함수 만들기. 같으면 같다는 메시지 반환
// let array1 = [3, 4, 5, 67, 3, 2, 33, 5, 66, 7];
// let array2 = [44, 5, 4, 22, 35, 6, 8, 50, 9];

// function compare(arr1, arr2) {
//   let num1 = arr1.reduce((acc, cur) => acc + cur, 0);
//   let num2 = arr2.reduce((acc, cur) => acc + cur, 0);

//   if (num1 > num2) {
//     return arr1;
//   } else if (num1 < num2) {
//     return arr2;
//   } else {
//     return "두 배열의 합은 같다.";
//   }
// }

// console.log(compare(array1, array2));

// function compare2(arr1, arr2) {
//   let num1 = arr1.reduce((acc, cur) => acc + cur, 0);
//   let num2 = arr2.reduce((acc, cur) => acc + cur, 0);

//   if (num1 > num2) {
//     return `배열: ${arr1}, 배열의 합: ${num1}`;
//   } else if (num1 < num2) {
//     return console.log("배열: " + arr2 + " 배열의 합: " + num2);
//   } else {
//     return "두 배열의 합은 같다.";
//   }
// }
// console.log(compare2(array1, array2));

// // 배열과 배열의 합을 각각 출력하고 싶어서 백틱도 써보고 따옴표도 넣고 해봤는데, 그렇게 되면 배열이 아니라 안의 값만 출력이 됨
// // 문자열과 함께 배열을 반환하는 방법이 없을까...? => 콘솔 넣기

// let compare3 = function (arr1, arr2) {
//   let sum_arr1 = 0;
//   let sum_arr2 = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum_arr1 += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     sum_arr2 += arr2[i];
//   }
//   if (sum_arr1 > sum_arr2) {
//     return `${array1}`;
//   } else if (sum_arr1 < sum_arr2) {
//     return `${array2}`;
//   } else {
//     return "두 배열의 합이 같당";
//   }
// };

// console.log(compare3(array1, array2));

// // //다음코드에서 count값을 예상해보시오(코딩x)

// // var str = "hello world"
// // var search = "o"
// // var count = 0

// // for(let i = 0; i < str.length; i++){
// //   if(str[i] !== search) continue;
// //    ++count;
// // }

// // // 2

// // //다음중 반환하는 값이 틀린 것은?

// // console.log(typeof function () {})    //function?

// // console.log(typeof "")    //string?

// // console.log(typeof NaN)    //number?

// // console.log(typeof null)  //null?
// // //object

// // console.log(typeof Symbol()) //symbol?"

// // //||연산자와 ??연산자의 차이, nullish 병합 연산자를 사용해야 하는 상황은?
// // //다음 예시로 설명

// // let 선택당도 = 0;
// // let 기본당도 = 50;

// // console.log(선택당도||기본당도)
// // console.log(선택당도??기본당도)
// // ||의 경우는 0이나 ""도 false로 인식한다.
// // ??의 경우는 개발자가 값을 할당하지 않는 경우에 false를 반환하는 것으로, 0은 0으로 인식해서 css에서 사용한다.(width:0 처럼)

// // bag 에서 입력받은 과일의 갯수만을 출력 ( ex . apple 의 갯수는 5 개 입니다. )

// let bag = {
//   apple: "5",
//   mango: "11",
//   orange: "1",
// };

// for (let key in bag) {
//   console.log(`${key}의 개수는 총 ${bag[key]}개입니다.`);
// }

// const palindrome = (str) => {
//   // 해당 문자열의 길이가 1이거나 0이면(처음부터 0, 1이거나 회문 검사를 끝까지 통과했거나)
//   if (str.length <= 1) {
//     return true;
//   }
//   // 배열의 길이 -1 이면 마지막 인덱스라고 선언!
//   const lastIndex = str.length - 1;

//   // 첫 글자와 마지막 글자가 같으면
//   if (str[0] === str[lastIndex]) {
//     // (동일한) 첫 글자와 마지막 글자를 제외한 글자를 다시 회문 검사
//     return palindrome(str.slice(1, lastIndex));
//   } else {
//     // 검사 도중 첫 글자와 마지막 글자가 같지 않으면 false
//     return false;
//   }
// };

// console.log(palindrome("기러기")); //true
// console.log(palindrome("토마토")); //true
// console.log(palindrome("별똥별")); //true
// console.log(palindrome("우영우")); //true
// console.log(palindrome("김제제")); //false

// // 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// // 단, 주어진 배열을 수정하지 않도록!
// // let input = ["🍌", "🍓", "🍇", "🍓"];
// // let copied = [...input];
// // for (let i = 0; i < copied.length; i++) {
// //   if (copied[i] === "🍓") copied[i] = "kiwi";
// // }
// // console.log(copied);
// // console.log(input);

// //화살표 함수의 축약형입니다.

// const doubleArrow = (x) => ({ name: "Study4" });

// console.log("doubleArrow", doubleArrow(7));

// // 위 코드는 name의 값(Study4)이 반환되지 않는다

// // name의 (Study4)값을 반환할 수 있도록 코드를 수정해보세요
// // (화살표 함수의 축약형은 유지 시켜야함)
// // 이유까지 적으시면 아주 칭찬해

// //<value값이 통일되게 급여 단위를 "~만원"으로 맞추는 함수 작성하기>

// const payDay = {
//   짱구: 300,
//   철수: "130만원",
//   맹구: "500만원",
//   훈이: 150,
//   유리: "380만원",
// };

// function pay(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") obj[key] += "만원";
//   }
//   return obj;
// }

// console.log(pay(payDay));
let str = "qws1d1e11dddd1fg1hgrhsfs1";

function solution(str, s) {
  // return str.split(s).length - 1;
  let count = 0;
  for (let x of str) {
    if (x === s) count++;
  }
  return count;
}

solution(str, "1");
