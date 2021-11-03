const requestURL =
  "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration";

const body = {
  firstName: "Oleg2 ",
  lastName: "Pozharytskiy2",
  email: "pozhar.oleh2@gmail.com",
  username: "Pozhar2",
  password: "Pozhar123",
  language: "ua",
  age: 27,
  text: "Hello from Poltava",
};

function sendRequest(method, url, body = null) {
  const headers = { "Content-Type": "application/json" };

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((responce) => {
    if (responce.ok) {
      return responce.json();
    }
    return responce.json().then((error) => {
      const e = new Error("щось пішло не так");
      e.data = error;
      throw e;
    });
  });
}

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// sendRequest("POST", requestURL, body)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
