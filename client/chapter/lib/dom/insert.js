function insertBefore(node, text) {
  if (typeof node === "string") node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    // 이 if문이 밑으로 와야 함. 위로 올라가면 노드로 변환하기 전인 스트링 값과 비교하는 것이기 때문에 무조건 true가 나옴
    typeError("insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");
  }

  node.insertAdjacentHTML("beforebegin", text);
}

function insertFirst(node, text) {
  if (typeof node === "string") node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    typeError("insertFirst 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");
  }
  node.insertAdjacentHTML("afterbegin", text);
}

function insertLast(node, text) {
  if (typeof node === "string") node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError("insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");
  }
  node.insertAdjacentHTML("beforeend", text);
}

function insertAfter(node, text) {
  if (typeof node === "string") node = getNode(node);
  if (node.nodeType !== document.ELEMENT_NODE) {
    refError("insertAfter 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");
  }
  node.insertAdjacentHTML("afterend", text);
}
