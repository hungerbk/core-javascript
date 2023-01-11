/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode(".visual");
const news = getNode(".news");
const desc = getNode(".desc");

visual.addEventListener("click", function (e) {
  let elem = e.currentTarget;
  // console.log("target : ", e.target);
  // console.log("currentTarget :  ", e.currentTarget);
  // console.log(this === e.currentTarget);
  // console.log(this);
  console.log("%c visual", "background-color:dodgerblue"); //콘솔창에도 css를 쓸 수 있음
  css(".pop", "display", "block");
});

getNode(".pop").addEventListener("click", (e) => {
  e.stopPropagation();
  css(".pop", "display", "none"); //버블링: none이 되는 순가 바로 visual이 눌리면서 다시 팝업이 뜸 => 팝업이 사라지지 않는 것처럼 보임
});

// news.addEventListener("click", function () {
//   console.log("%c news", "background-color:orange");
// });

// desc.addEventListener("click", function (e) {
//   // e.stopPropagation();
//   console.log("%c desc", "background-color:pink");
// });

/* 캡처링 ----------------------------------------------------------------- */
