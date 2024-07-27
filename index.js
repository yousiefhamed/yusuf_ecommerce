import { getHome, getAbout, succesfull } from "./components/sections.js";
import { renderSignUp, renderLogin, renderLogout } from "./account/account.js";
import { renderAllProducts } from "./products/products.js";

let loggedIn = Number(localStorage.getItem("loggedIn"));

const container = document.getElementById("container");

const updateLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
  loggedIn = value;
};

const renderHome = () => {
  container.innerHTML = getHome(loggedIn);
};

const renderAbout = () => {
  container.innerHTML = getAbout(loggedIn);
};

const openMenu = () => {
  document.querySelector("nav.navigation").classList.toggle("open-mobile");
};

const renderSuccessfulMessage = (img, title, timer, CB) => {
  container.innerHTML += succesfull(img, title);
  setTimeout(() => {
    document.getElementById("successPopup").remove();
    if (CB) CB();
  }, timer);
};

if (loggedIn) {
  renderAllProducts();
} else {
  renderHome();
}

window.renderHome = renderHome;
window.renderAbout = renderAbout;
window.renderAllProducts = renderAllProducts;
window.renderCart = renderCart;
window.addToCart = addToCart;
window.openMenu = openMenu;

// account
window.renderLogin = renderLogin;
window.renderLogout = renderLogout;
window.renderSignUp = renderSignUp;

export { renderSuccessfulMessage, updateLocalStorage };
