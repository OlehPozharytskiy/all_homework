const requestURL = "url";
const user = {
  name: "Oleg Pozharytskiy",
  age: 27,
  text: "Hello from Poltava",
};

function sendRequest(method, url, user = null) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.open(method, url);

    req.setRequestHeader();

    req.onload = () => {
      if (req.status >= 400) {
        reject(req.response);
      } else {
        resolve(JSON.parse(req.response));
      }
    };

    req.onerror = () => {
      reject(req.response);
    };

    req.send(JSON.stringify(user));
  });
}

sendRequest("GET", requestURL)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// sendRequest("POST", requestURL, user)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
