export function isNumericString(data) {
  data = Number(data);
  return !isNaN(data); // !를 해서 숫자면 true, 문자면 false
}
