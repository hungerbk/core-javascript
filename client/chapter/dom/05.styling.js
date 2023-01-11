/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode(".first");

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

console.log(first.className); //first //get
// console.log((first.className = "hola"));  //hola로 바뀜 class="hola" //set

// first.classList.add("hola"); //hola 추가 class="first hola"
// first.classList.remove("hola");
// first.classList.toggle("is-active");
// console.log(first.classList.contains("hola"));

addClass(".first", "hello");
removeClass(".first", "hello");
toggleClass(".first", "is-active");

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = "red";
first.style.transform = "rotate(360deg)";

console.log(first.style.fontSize); //가져올 수 없음

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
let size = getComputedStyle(first).fontSize;
console.log(size);

css(".first", "font-size", "100px"); // set

//실행속도 때문에 get이 바로 반영되지 않음. 비동기처리
setTimeout(() => {
  console.log(css(".first", "font-size"));
}, 1000);

console.log(getCss(".first", "font-size")); //정확한 css 속성인지?
setCss(".first", "color", "blue");
