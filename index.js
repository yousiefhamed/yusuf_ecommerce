import {
  getHome,
  getAbout,
  getProductsContainer,
  emptyCart,
  succesfull,
  getProductInstance,
  getCartInstance,
} from "./components/sections.js";
import { renderSignUp, renderLogin, renderLogout } from "./account/account.js";
import products from "./data/products.js";

const allProducts = products();
const cart = [];
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

const renderProducts = (products, type) => {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "";

  if (type !== "cart") {
    products.forEach(({ id, thumbnail, title, category, price }) => {
      productsDiv.innerHTML += getProductInstance(
        id,
        thumbnail,
        title,
        category,
        price
      );
    });
  } else {
    const cartIDs = new Set(products);
    cartIDs.size
      ? cartIDs.forEach(({ id, thumbnail, title, category, price }) => {
          const quantity = products.filter((product) => product.id === id);
          productsDiv.innerHTML += getCartInstance(
            id,
            thumbnail,
            title,
            category,
            price,
            quantity.length
          );
        })
      : (productsDiv.innerHTML += emptyCart(loggedIn));
  }
};

const renderAllProducts = () => {
  if (loggedIn) {
    container.innerHTML = getProductsContainer(loggedIn);

    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", () => {
      const searchValue = searchInput.value.toLowerCase();
      const filteredProducts = allProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchValue) ||
          product.description.toLowerCase().includes(searchValue)
      );

      renderProducts(filteredProducts);
    });

    renderProducts(allProducts);
  } else {
    container.innerHTML += succesfull(
      "error.png",
      `Please Login to See All Products`
    );
    setTimeout(() => {
      document.getElementById("successPopup").remove();
      renderLogin(loggedIn);
    }, 2000);
  }
};

const renderCart = () => {
  if (!loggedIn) {
    container.innerHTML += succesfull("error.png", `Please login to view Cart`);
    setTimeout(() => {
      document.getElementById("successPopup").remove();
      renderLogin(loggedIn);
    }, 2000);
    return;
  }
  container.innerHTML = getProductsContainer(loggedIn, "cart");
  renderProducts(cart, "cart");
};

const addToCart = (id) => {
  const product = allProducts.find((product) => product.id === id);
  cart.push(product);
  container.innerHTML += succesfull(
    "success.png",
    `The product has been added to the cart`
  );
  setTimeout(() => document.getElementById("successPopup").remove(), 2000);
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
