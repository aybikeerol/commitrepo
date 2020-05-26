export const apiCall = url => {
  const requestOptions = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "febe73a1d3msh7f4d8a89770cf21p175519jsn1774298e4524",
      useQueryString: true
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  };
  return fetch(url, requestOptions);
};
