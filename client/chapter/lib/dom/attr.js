/* 
// IIFE 패턴 
const attr = (function(){
  function getAttr(node,prop){
    // node = '.first'
    // prop = 'class'
    
    if(typeof node === 'string'){
      node = getNode(node);
    }
  
    return node.getAttribute(prop);
    
  }
  
  
  
  // computed property
  function setAttr(node,prop,value){
    // validation : 확인 
    if(typeof node === 'string') node = getNode(node);
    if(typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다.')
  
    if(prop.includes('data')){
      let rest = prop.slice(5);
      node.dataset[rest] = value;
    }
  
    if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')
    
    node.setAttribute(prop,value);
  
  }
  
  
  
  
  // const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);
  
  function attr(node,prop,value){
  
    // if(!value){
    //   return getAttr(node,prop);
    // }else{
    //   setAttr(node,prop,value);
    // }
  
    return !value ? getAttr(node,prop) : setAttr(node,prop,value);
  
  
  }
   
  // incapsulation // 캡슐화 
  // 정보 은닉 
  return attr
  
})()
// incapsulation // 캡슐화
// 정보 은닉
attr()
 */

function getAttr(node, prop) {
  if (typeof node === "string") {
    //node가 스트링이 아니라 변수일 수도 있기 때문에 추가해야 하는 부분
    node = getNode(node);
  }
  return node.getAttribute(prop);
}

//set함수 만들기
// function setAttr(node, prop, val) {
//   //validation: 확인
//   if (typeof node === "string") node = getNode(node);
//   if (typeof prop !== "string") throw new TypeError("setAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.");

//   if (prop.includes("data")) {
//     let rest = prop.slice(5);
//     node.dataset[rest] = val; //변수는 []안에 넣어야 함 .으로 안 됨
//     //node.dataset.value = "hello";
//   }

//   if (!val) throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수값입니다.");

//   node.setAttribute(prop, val); //세팅만 하는 것이기 때문에 return을 쓸 필요가 없음
// }
function setAttr(node, prop, val) {
  //validation: 확인
  if (typeof node === "string") node = getNode(node);
  if (typeof prop !== "string") throw new TypeError("setAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  if (!val) throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수값입니다.");

  if (prop.includes("data")) {
    let rest = prop.slice(5);
    node.dataset[rest] = val; //변수는 []안에 넣어야 함 .으로 안 됨
    //node.dataset.value = "hello";
    return; //set을 완료했기 때문에 함수 종료
  }

  node.setAttribute(prop, val); //세팅만 하는 것이기 때문에 return을 쓸 필요가 없음
}

//common 함수 만들기
// function attr(node, prop, value) {
//   // if (!value) {
//   //   return getAttr(node, prop); //getAttr가 return 하는 것은 중요하지 않음. 그 값을 attr가 리턴을 해야함!
//   // } else {
//   //   setAttr(node, prop, value);
//   // }

//   return !value ? getAttr(node, prop) : setAttr(node, prop, value);
// }
const attr = (node, prop, value) => (!value ? getAttr(node, prop) : setAttr(node, prop, value));
