/* global gsap */

import { insertLast, tiger, delayP, getNode as $, renderUserCard, changeColor, renderSpinner, renderEmptyCard, attr } from "./lib/index.js";

// 1. userList.js 로 갑니다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard 를 던지고,
// 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록
const userCardContainer = $(".user-card-inner");

async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000); //실제로 이렇게 딜레이를 줘서 하는 경우는 별로 없다. 바로 보여주니까.. 보통 인터랙티브 앱이 이렇게 함(무거워서 렌더링이 오래걸리니까)
    $(".loadingSpinner").remove();
    let response = await tiger.get("http://localhost:3000/users");
    let userData = response.data;
    // 내가 작성한 코드
    // userData.reduce((acc, cur) => {
    //   return renderUserCard(userCardContainer, cur);
    // }, "");

    userData.forEach((data) => renderUserCard(userCardContainer, data));

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2, //각각 실행
    });
    // console.log(userData);
    // insertLast(userCardContainer, createUserCard(userData));
    // renderUserCard(userCardContainer, userData);
  } catch (err) {
    console.log(err);
    renderEmptyCard(userCardContainer);
  }
}

rendingUserList();

function handler(e) {
  let deleteButton = e.target.closest("button");
  let article = e.target.closest("article");

  if (!deleteButton || !article) return; //버튼이 아니면 실행 안 함
  // if(!article) return; // 누른 대상의 인접한 대상이 article이 아니면 실행 안함.

  let id = attr(article, "data-index").slice(5);

  // await tiger.delete(`http://localhost:3000/users/${id}`)
  // userCardContainer.innerHTML = '';
  // rendingUserList();

  //async await으로 쓸 수 있지만 범쌤이나 야무쌤은 핸들러에 잘 안 씀!

  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    //데이터는 지웠지만, 화면은 새로고침을 해야 반영이 됨
    userCardContainer.innerHTML = ""; //전체를 비우고
    rendingUserList(); //다시 채우기(서버에서 데이터는 삭제됐기 때문에, 데어터가 없는 건 렌더되지 않음)
  });
}

userCardContainer.addEventListener("click", handler);
