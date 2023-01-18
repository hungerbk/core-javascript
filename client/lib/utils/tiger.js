const tiger = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: null,
  });
  if (response.ok) {
    response.data = await response.json();
    //response.json() : response 안에 있는 json 값을 가져 오겠다. 이게 promise 라서 값만 받아오려고 await 사용
    //알아서 parse()해주는 듯..! 내장되어 있는 기능임!!
  }
  return response;
};

console.log(await tiger()); //tiger는 promise를 반환함 > 여기에서 값만 가져오려고 await 사용
