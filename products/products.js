import {
  getProductsContainer,
  emptyCart,
  succesfull,
  getProductCardInstance,
  getProductDetailsInstance,
  getCartInstance,
} from "./../components/sections.js";

const cart = [];
let loggedIn = Number(localStorage.getItem("loggedIn"));

const BACKEND_API =
  "https://yusufecommercebackend-production.up.railway.app/api";
let allProducts;
const renderProducts = (products, type) => {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "";

  if (type !== "cart") {
    products.forEach(({ id, thumbnail, title, category, price }) => {
      productsDiv.innerHTML += getProductCardInstance(
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
    fetch(`${BACKEND_API}/products`)
      .then(function (products) {
        return products.json();
      })
      .then(function (products) {
        allProducts = products;
        container.innerHTML = getProductsContainer(loggedIn);

        const searchInput = document.getElementById("search");
        const searchBtn = document.getElementById("searchBtn");

        searchBtn.addEventListener("click", () => {
          const searchValue = searchInput.value.toLowerCase();
          const filteredProducts = products.filter(
            (product) =>
              product.title.toLowerCase().includes(searchValue) ||
              product.description.toLowerCase().includes(searchValue)
          );

          renderProducts(filteredProducts);
        });
        renderProducts(products);
      })
      .catch(function (err) {
        console.error("Error fetching products:", err);
      });
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

const renderProduct = (id) => {
  const product = allProducts.find((product) => product.id === id);
  container.innerHTML = getProductsContainer(loggedIn, product.title);
  document.getElementById("products").innerHTML += getProductDetailsInstance(
    product.id,
    product.thumbnail,
    product.images,
    product.title,
    product.brand,
    product.category,
    product.price,
    product.discountPercentage,
    product.rating,
    product.reviews,
    product.availabilityStatus,
    product.stock,
    product.description,
    product.tags,
    product.weight,
    product.dimensions,
    product.warrantyInformation,
    product.shippingInformation,
    product.returnPolicy,
    product.minimumOrderQuantity
  );
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

export { renderAllProducts };

window.renderCart = renderCart;
window.addToCart = addToCart;
window.renderProduct = renderProduct;
