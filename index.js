import {
  getHome,
  getAbout,
  getLogin,
  getProductsContainer,
  emptyCart,
  succesfull,
  getProductInstance,
  getCartInstance,
} from "./components/sections.js";
import products from "./data/products.js";
import users from "./data/users.js";

const allProducts = products();
const allUsers = users();
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

const validateLogin = () => {
  document.querySelector("form.login").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const isUserRegistered = allUsers.find(
      (user) => user.username === username.value
    );

    if (isUserRegistered) {
      if (isUserRegistered.password === password.value) {
        container.innerHTML += succesfull(
          "success.png",
          `You've been Logged In Successfully.`
        );
        setTimeout(() => {
          document.getElementById("successPopup").remove();
          updateLocalStorage("loggedIn", 1);
          renderAllProducts();
        }, 2000);
      } else {
        password.parentElement.querySelector(".error-message").style.display =
          "inline";
        password.parentElement.querySelector(
          ".error-message"
        ).innerHTML = `The password is not correct`;
      }
    } else {
      username.parentElement.querySelector(".error-message").style.display =
        "inline";
      username.parentElement.querySelector(
        ".error-message"
      ).innerHTML = `The email is not registered yet`;
    }
  });
};

const renderLogin = (loggedIn) => {
  if (!loggedIn) {
    container.innerHTML = getLogin(loggedIn);
    validateLogin();
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

if (loggedIn) {
  renderAllProducts();
} else {
  renderHome();
}

window.renderHome = renderHome;
window.renderAbout = renderAbout;
window.renderLogin = renderLogin;
window.renderLogout = renderLogout;
window.renderAllProducts = renderAllProducts;
window.renderCart = renderCart;
window.addToCart = addToCart;
window.openMenu = openMenu;
