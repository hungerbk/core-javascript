const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const tiger = async (options = {}) => {
  const { url, ...restoptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...(defaultOptions.headers ?? {}), ...(options.headers ?? {}) },
  }; // 객체 합성과 동시에 추출
  let response = await fetch(url, restoptions); // fetch 자체가 url과 나머지 객체를 받기 때문에 위에서 url과 restOptions으로 나눠서 받은거임
  if (response.ok) {
    response.data = await response.json();
    //response.json() : response 안에 있는 json 값을 가져 오겠다. 이게 promise 라서 값만 받아오려고 await 사용
    //알아서 parse()해주는 듯..! 내장되어 있는 기능임!!
  }
  return response;
};

// console.log(await tiger()); //tiger는 promise를 반환함 > 여기에서 값만 가져오려고 await 사용

tiger.get = async (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
tiger.delete = (url, options) => {
  return tiger({
    method: "DELETE",
    url,
    ...options,
  });
};

// tiger.post("www.naver.com", { name: "tiger" }, { mode: "cors", headers: {}, cache: "no-cache", credential: "same-origin" });
