export const BASE_URL = "https://register.nomoreparties.co";
const CheckResponse = (response) => {
  if (response.ok) return response.json();
  return Promise.reject(response);
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => CheckResponse(response));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => CheckResponse(response))
    .then((data) => {
      localStorage.setItem("jwt", data.token);
      return data;
    });
};

export const checkToken = () => {
  if (localStorage.getItem("jwt") != null)
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => CheckResponse(res));
};
