export const BASE_URL = "https://register.nomoreparties.co";

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .then((data) => {
      localStorage.setItem("jwt", data.token);
      return data;
    })
    .catch((err) => {
      return Promise.reject(err);
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
    }).then(async (res) => {
      try {
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    });
};
