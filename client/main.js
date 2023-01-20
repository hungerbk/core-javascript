import { deleteStorage, getNode, loadStorage, saveStorage } from "./lib/index.js";

const textField = getNode("#textField");
const deleteButton = getNode('input[value="삭제"]');

//저장 된 값을 불러옴
//새로고침해도 날아가지 않음!
loadStorage("area").then((res) => {
  textField.value = res;
});

//값이 추가될 때마가 스토리지에 저장
const inputHandler = () => {
  saveStorage("area", textField.value);
};

const deleteHandler = () => {
  deleteStorage("area").then((textField.value = ""));
};

textField.addEventListener("input", inputHandler); //값이 추가되는 것을 인지
deleteButton.addEventListener("click", deleteHandler);
