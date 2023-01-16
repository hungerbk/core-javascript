export function copy(text) {
  return navigator.clipboard.writeText(text);
}
// 리턴을 하지 않으면 언디파인드 반환..!
// navigator.clipboard.writeText(text); << 이 부분이 promise
