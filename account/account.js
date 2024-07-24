import { renderSuccessfulMessage, updateLocalStorage } from "./../index.js";
import { getLogin, getSignUp, succesfull } from "./../components/sections.js";

let loggedIn = Number(localStorage.getItem("loggedIn"));

const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api/users");
  const users = await response.json();
  return users;
};

const updateUsers = async (user) => {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

const validateLogin = (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  getUsers()
    .then((users) => {
      const isUserRegistered = users.find((user) => user.email === email.value);

      if (isUserRegistered) {
        if (isUserRegistered.password === password.value) {
          renderSuccessfulMessage(
            "success.png",
            "You've been Logged In Successfully.",
            2000,
            () => {
              updateLocalStorage("loggedIn", 1);
              renderAllProducts();
            }
          );
        } else {
          renderSuccessfulMessage(
            "error.png",
            "The password is not correct",
            2000
          );
        }
      } else {
        renderSuccessfulMessage(
          "error.png",
          "The email is not registered yet.",
          2000
        );
      }
    })
    .catch((err) => {
      console.error("Error fetching users:", err);
    });
};

const validateSignUp = (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  getUsers()
    .then((users) => {
      const isUserRegistered = users.find((user) => user.email === email.value);

      if (isUserRegistered) {
        renderSuccessfulMessage(
          "error.png",
          "This Email has been registered before try to Login",
          3000
        );
      } else {
        if (name.value === "" || name.value.length < 3) {
          renderSuccessfulMessage(
            "error.png",
            "Name should be at least 3 characters",
            2000
          );
        } else if (email.value === "") {
          renderSuccessfulMessage("error.png", "Email is required!", 2000);
        } else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
        ) {
          renderSuccessfulMessage("error.png", "The email is not valid", 2000);
        } else if (password.value === "") {
          renderSuccessfulMessage("error.png", "Password is required", 2000);
        } else if (password.value.length < 8) {
          renderSuccessfulMessage(
            "error.png",
            "Password should be at least 8 characters long",
            3000
          );
        } else {
          const user = {
            name: name.value,
            email: email.value,
            password: password.value,
          };
          updateUsers(user)
            .then(() => {
              renderSuccessfulMessage(
                "success.png",
                "You've been registered successfully. Please Login!",
                2000
              );
            })
            .catch((err) => console.error(err));
        }
      }
    })
    .catch((err) => {
      console.error("Error fetching users:", err);
    });
};

const renderSignUp = () => {
  container.innerHTML = getSignUp(loggedIn);
};

const renderLogin = (loggedIn) => {
  if (!loggedIn) {
    container.innerHTML = getLogin(loggedIn);
  } else {
    renderAllProducts();
  }
};

const renderLogout = (loggedIn) => {
  if (loggedIn) {
    loggedIn = 0;
    updateLocalStorage("loggedIn", 0);
    renderHome();
  }
};

export { renderSignUp, renderLogin, renderLogout };

window.validateLogin = validateLogin;
window.validateSignUp = validateSignUp;
