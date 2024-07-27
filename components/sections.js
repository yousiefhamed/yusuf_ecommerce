const generateHeader = (loggedIn) => `
  <header class="header flex w-full screen-bg">
    <h1><a href="#" onclick="renderHome()">YUSUF</a></h1>
    <button onclick="openMenu()" class="button roundful flex menu">
      <span class="material-symbols-outlined">menu</span>
    </button>
    <nav class="navigation flex">
      <a href="#" onclick="renderHome()" class="link mobile">
        <p class="medium">home</p>
      </a>
      <a href="#" onclick="renderAllProducts()" class="link mobile">
        <p class="medium">products</p>
      </a>
      <a href="#" onclick="renderAbout()" class="link mobile">
        <p class="medium">about</p>
      </a>
      <a href="#" onclick="renderCart()" class="flex link">
        <span class="material-symbols-outlined">shopping_cart</span>
      </a>
      ${
        !loggedIn
          ? `
            <button onclick="renderLogin(${loggedIn})" class="button login">
              <p class="large">login</p>
            </button>
          `
          : `
            <button onclick="renderLogout(${loggedIn})" class="button logout">
              <p class="large">logout</p>
            </button>
          `
      }
    </nav>
  </header>
`;

const emptyCart = () => `
    <div class="empty-cart flex flex-col">
      <img class="empty-cart" src="./assets/empty-cart.png" alt="empty-cart" />
      <p class="large">Oh no! Your Cart is Empty.... :(</p>
      <br />
      <button onclick="renderAllProducts()" class="button">
        <p class="medium">Explore Products</p>
      </button>
    </div>
`;

const succesfull = (img, title) => `
      <div id="successPopup" class="successful-popup flex">
        <img src="./assets/${img}" />
        <p>${title}</p>
      </div>
`;

const getHome = (loggedIn) => `
    ${generateHeader(loggedIn)}
    <header class="hero-section">
      <div class="background"></div>
      <div class="content flex flex-col">
        <h1 class="heading">Modern furniture for minimalist lovers</h1>
        <p class="gray xl">
          Experience the ultimate relaxation with our collection of serene and
          tranquil spa-inspired designs.
        </p>
        <div class="flex gap-5">
          <button class="button">
            <p class="large">Shop now</p>
          </button>
          <a class="link">
            <p class="medium">Show reel</p>
          </a>
        </div>
      </div>
      <div class="img">
        <img src="./assets/hero.jpeg" alt="cozy woody furniture" />
      </div>
    </header>

    <section class="section flex flex-col">
      <div class="flex justify-between gap-5 w-full flex-col-mob">
        <h2 class="heading">Our new exclusive collections</h2>
        <p class="xl gray">
          Elevate your interiors with our curated selection of premium furniture
          and accessories
        </p>
      </div>
      <div class="categories flex justify-start gap-5 w-full flex-wrap">
        <p role="button" class="xl button roundful flex">Dinning</p>
        <p role="button" class="xl button roundful gray flex">Chair</p>
        <p role="button" class="xl button roundful gray flex">Bed</p>
        <p role="button" class="xl button roundful gray flex">Kitchen</p>
        <p role="button" class="xl button roundful gray flex">Shelves</p>
      </div>
      <div class="products flex" id="products">
        <div class="product flex flex-col">
          <img src="./assets/karate.jpeg" alt="product" />
          <div class="flex">
            <div>
              <h2>Woden Chair</h2>
              <p class="gray small">Dinning</p>
              <p class="price">$15.63</p>
            </div>
            <button class="button flex add-to-cart" onclick="addToCart()">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
        </div>
        <div class="product flex flex-col">
          <img src="./assets/karate.jpeg" alt="product" />
          <div class="flex">
            <div>
              <h2>Woden Chair</h2>
              <p class="gray small">Dinning</p>
              <p class="price">$15.63</p>
            </div>
            <button class="button flex add-to-cart" onclick="addToCart()">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
        </div>
        <div class="product flex flex-col">
          <img src="./assets/karate.jpeg" alt="product" />
          <div class="flex">
            <div>
              <h2>Woden Chair</h2>
              <p class="gray small">Dinning</p>
              <p class="price">$15.63</p>
            </div>
            <button class="button flex add-to-cart" onclick="addToCart()">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
        </div>
        <div class="product flex flex-col">
          <img src="./assets/karate.jpeg" alt="product" />
          <div class="flex">
            <div>
              <h2>Woden Chair</h2>
              <p class="gray small">Dinning</p>
              <p class="price">$15.63</p>
            </div>
            <button class="button flex add-to-cart" onclick="addToCart()">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
        </div>
        <div class="product flex flex-col">
          <img src="./assets/karate.jpeg" alt="product" />
          <div class="flex">
            <div>
              <h2>Woden Chair</h2>
              <p class="gray small">Dinning</p>
              <p class="price">$15.63</p>
            </div>
            <button class="button flex add-to-cart" onclick="addToCart()">
              <span class="material-symbols-outlined">add_shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section grid-50 gap-5 m-5 grid-50-mob">
      <img src="./assets/desk.png" alt="woody desk simple" />
      <div class="flex flex-col items-end">
        <h2 class="heading">New Experience is going to unlock</h2>
        <p class="xl gray">
          Indulge in comfort and style with our range of plush furniture and
          cozy accents
        </p>
      </div>
    </section>

    <div class="screen-bg grid-50">
      <div class="flex flex-col items-start gap-5">
        <h2 class="heading">Minialism actually meets the functionality</h2>
        <p class="small gray">
          Experience the ultimate relaxation with our collection of serene and
          tranquil spa-inspired designs.
        </p>
        <button class="button">
          <p class="large">Shop now</p>
        </button>
      </div>
      <img
        src="./assets/North Bondi Home _ Ama Studio.jpeg"
        alt="a clean simple bedroom"
      />
    </div>

    <section class="section flex flex-col m-5 projects-grid">
      <h2 class="heading center">Inspiring interiors crafted with passion</h2>
      <div class="grid-50 gap-5 w-full grid-50-mob">
        <div class="w-full flex flex-col gap-5">
          <img
            class="w-full roundful"
            src="./assets/office.jpeg"
            alt="office"
          />
          <img
            class="w-full roundful"
            src="./assets/meeting.jpeg"
            alt="meeting"
          />
        </div>
        <div class="w-full">
          <img
            class="h-full w-full roundful"
            src="./assets/salon.jpeg"
            alt="salon"
          />
        </div>
      </div>
    </section>

    <section class="section grid-50 gap-5 m-5 grid-50-mob">
      <img src="./assets/chair.png" alt="woody chair simple" />
      <div class="flex flex-col items-end">
        <h2 class="heading">New Experience is going to unlock</h2>
        <p class="xl gray">
          Indulge in comfort and style with our range of plush furniture and
          cozy accents
        </p>
        <button class="button">
          <p class="large">Shop Now</p>
        </button>
      </div>
    </section>

    <section class="section flex flex-col">
      <div class="projects-heading flex gap-5 flex-col-mob">
        <h2 class="heading">Some of our well know projects!</h2>
        <p class="gray xl">
          Elevate your interiors with our curated selection of premium furniture
          and accessories
        </p>
      </div>
      <div class="border"></div>
      <div class="w-full projects grid-50 gap-5 grid-50-mob">
        <div class="flex items-start gap-5">
          <h3 class="xxl">01</h3>
          <div class="flex flex-col gap-5 items-start">
            <h4 class="xxl">Refined Elegance</h4>
            <p class="xl gray">
              Indulge in comfort and style with our range of plush furniture and
              cozy accents
            </p>
          </div>
        </div>
        <div class="flex btn-img w-full">
          <button class="button btn-border">
            <p class="large">View project</p>
          </button>
          <img src="./assets/bedroom.jpeg" alt="projects" />
        </div>
      </div>
      <div class="border"></div>
      <div class="w-full projects grid-50 gap-5 grid-50-mob">
        <div class="flex items-start gap-5">
          <h3 class="xxl">02</h3>
          <div class="flex flex-col gap-5 items-start">
            <h4 class="xxl">Artistic Fusion</h4>
            <p class="xl gray">
              Indulge in comfort and style with our range of plush furniture and
              cozy accents
            </p>
          </div>
        </div>
        <div class="flex btn-img w-full flex-col-mob">
          <button class="button btn-border">
            <p class="large">View project</p>
          </button>
          <img src="./assets/dinning-room.jpeg" alt="projects" />
        </div>
      </div>
      <div class="border"></div>
      <div class="w-full projects grid-50 gap-5 grid-50-mob">
        <div class="flex items-start gap-5">
          <h3 class="xxl">03</h3>
          <div class="flex flex-col gap-5 items-start">
            <h4 class="xxl">Harmonious Spaces</h4>
            <p class="xl gray">
              Indulge in comfort and style with our range of plush furniture and
              cozy accents
            </p>
          </div>
        </div>
        <div class="flex btn-img w-full flex-col-mob">
          <button class="button btn-border">
            <p class="large">View project</p>
          </button>
          <img src="./assets/kitchen.jpeg" alt="projects" />
        </div>
      </div>
      <div class="border"></div>
    </section>
`;

const getAbout = (loggedIn) => `
    ${generateHeader(loggedIn)}
    <section class="section flex flex-col">
      <h2 class="heading">About</h2>
      <div class="center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto natus cum commodi laudantium quae vel officiis dolore eius consectetur debitis. Eius modi laboriosam, pariatur perferendis soluta perspiciatis saepe architecto quidem.
        </p>
      </div>
    </section>
`;

const getLogin = (loggedIn) => `
    ${generateHeader(loggedIn)}
    <section class="section flex flex-col">
      <form class="flex flex-col login">
        <h2 class="heading">Login</h2>
        <label for="email">
          <p>Email:</p>
          <input
            placeholder="example@gmail.com"
            type="text"
            id="email"
            autocomplete=true
          />
          <span class="error-message"></span>
        </label>
        <label for="password">
          <p>Password:</p>
          <input
            placeholder="Enter your password..."
            type="password"
            id="password"
          />
          <span class="error-message"></span>
        </label>
        <button type="submit" onclick="validateLogin(event)" class="button">Login</button>
        <div class="center flex flex-col gap-1">
          <p>
            Forget your password?
            <a href="#" class="forgot-password link small">Reset Password?</a>
          </p>
          <p>
            Don't Have an Account?
            <a href="#" onclick="renderSignUp()" class="link small">Sign Up</a>
          </p>
        </div>
      </form>
    </section>
`;

const getSignUp = (loggedIn) => `
    ${generateHeader(loggedIn)}
    <section class="section flex flex-col">
      <form class="flex flex-col sign-up">
        <h2 class="heading">Sign Up</h2>
        <label for="name">
          <p>Name:</p>
          <input
            placeholder="Enter your Name..."
            type="text"
            id="name"
            autocomplete=true
          />
          <span class="error-message"></span>
        </label>
        <label for="email">
          <p>Email:</p>
          <input
            placeholder="example@gmail.com"
            type="email"
            id="email"
            autocomplete=true
          />
          <span class="error-message"></span>
        </label>
        <label for="password">
          <p>Password:</p>
          <input
            placeholder="Enter your password..."
            type="password"
            id="password"
          />
          <span class="error-message"></span>
        </label>
        <button type="submit" onclick="validateSignUp(event)" class="button">Sign Up</button>
        <div class="center flex flex-col gap-1">
          <p>
            Already Have an Account?
            <a href="#" onclick="renderLogin()" class="link small">Login</a>
          </p>
        </div>
      </form>
    </section>
`;

const search = `
      <section class="section flex flex-col items-start ">
        <p class="search large">Search</p>
        <form class="section flex">
          <input placeholder="Search..." type="text" id="search" />
          <button id="searchBtn" class="button roundful">
            <span class="material-symbols-outlined">search</span>
          </button>
        </form>
      </section>
`;

const getProductsContainer = (loggedIn, type) => `
    ${generateHeader(loggedIn)}
    ${!type ? `${search}` : ""}
    <section class="section flex flex-col items-start">
      <h2 class="heading">${
        !type ? "Products" : type === "cart" ? "Cart" : ""
      }</h2>
      <div class="flex" id="products"></div>
    </section>
`;

const getProductCardInstance = (id, img, title, category, price) => `
      <div class="product flex flex-col">
        <img onclick="renderProduct(${id})" src=${img} alt="product" />
        <div class="flex">
          <div onclick="renderProduct(${id})">
            <h2>${title}</h2>
            <p class="gray small">${category}</p>
            <p class="price">$${price}</p>
          </div>
          <button class="button flex add-to-cart" onclick=addToCart(${id})>
            <span class="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
`;

const getProductDetailsInstance = (
  id,
  thumbnail,
  imgs,
  title,
  brand,
  category,
  price,
  discount,
  rating,
  reviews,
  availabilityStatus,
  stock,
  description,
  tags,
  weight,
  dimensions,
  warrantyInformation,
  shippingInformation,
  returnPolicy,
  minimumOrderQuantity
) => `
      <div class="product-details items-start grid">
      <div class="img-slider flex justify-start" id="imgSlider">
        <img src="${thumbnail}"/>
        ${imgs.map((img) => `<img src="${img}"/>`)}
      </div>
      <div class="flex flex-col items-start gap-5">
        <div class="flex flex-col items-start gap-1">
          <h2>${title}</h2>
          <p class="gray small">by ${brand}</p>
          <p class="category gray small">${category}</p>
          <p class="price flex justify-start gap-1">
            $${price} <span>$${price * (1 / discount)}</span>
          </p>
          <div class="rating flex justify-start gap-1">
            <p class="stars flex justify-start">
              ${[1, 2, 3, 4, 5]
                .map((rate) => {
                  if (rating - rate > 0) {
                    return `<i class="fa-solid fa-star"></i>`;
                  } else if (rating - rate < 0 && rating - rate > -1) {
                    return `<i class="fa-regular fa-star-half-stroke"></i>`;
                  } else {
                    return `<i class="fa-regular fa-star"></i>`;
                  }
                })
                .join("")}
            </p>
            <p class="gray small">${rating}/5</p>
            <p class="reviews gray small">(${reviews.length} reviews)</p>
          </div>
          <p class="gray small">${availabilityStatus}</p>
        </div>
        <button class="button flex add-to-cart" onclick="addToCart(${id})">
          <span class="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
      <div class="col-span-all flex flex-col gap-5 items-start">
        <p class="description small">
          ${description}
        </p>
        <div class="tags flex justify-start">
          ${tags.map((tag) => `<p class="tag gray small">${tag}</p>`).join("")}
        </div>
        <div class="specifications flex flex-col items-start gap-1">
          <h3>Specifications</h3>
          <ul class="flex flex-col items-start gap-1">
            <li>
              weight:
              <span>${weight}</span>
            </li>
            <li>
              width:
              <span>${dimensions.width}</span>
            </li>
            <li>
              height:
              <span>${dimensions.height}</span>
            </li>
            <li>
              depth:
              <span>${dimensions.depth}</span>
            </li>
            <li>
              warrantyInformation:
              <span>${warrantyInformation}</span>
            </li>
            <li>
              shippingInformation:
              <span>${shippingInformation}</span>
            </li>
            <li>
              returnPolicy:
              <span>${returnPolicy}</span>
            </li>
            <li>
              minimumOrderQuantity:
              <span>${minimumOrderQuantity}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-all flex flex-col gap-5 items-start">
        <h3>Customer Reviews</h3>
        ${reviews
          .map((review) => {
            return `
            <div class="reviews rating flex flex-col items-start gap-1">
              <div class="flex flex-col items-start gap-1">
                <p class="gray small">${review.reviewerName}</p>
                <p class="gray small">${review.reviewerEmail}</p>
                <p class="stars flex justify-start">
                ${[1, 2, 3, 4, 5]
                  .map((rate) => {
                    if (review.rating - rate > 0) {
                      return `<i class="fa-solid fa-star"></i>`;
                    } else if (
                      review.rating - rate < 0 &&
                      review.rating - rate > -1
                    ) {
                      return `<i class="fa-regular fa-star-half-stroke"></i>`;
                    } else {
                      return `<i class="fa-regular fa-star"></i>`;
                    }
                  })
                  .join("")}
                </p>              </div>
                <p class="comment small">
                "${review.comment}"
                </p>
                <p class="gray small">${review.date}</p>
            </div>
          `;
          })
          .join("")}
      </div>
    </div>
`;

const getCartInstance = (id, img, title, category, price, quantity) => `
      <div class="product cart flex">
        <img src=${img} alt="product">
        <div class="grid">
          <div>
            <h2>${title}</h2>
            <p>${category}</p>
            <p class="price">$${price}</p>
          </div>
          <div class="flex flex-col">
            <button class="button update-cart flex">
              <span class="material-symbols-outlined">add</span>
            </button>
            <span style="font-size: 16px;font-weight: 700;line-height: 14px;">${quantity}</span>
            <button class="button update-cart flex">
                <span class="material-symbols-outlined">remove</span>    
            </button>
            <button class="button delete-cart flex">
              <span class="delete material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      </div>
`;

export {
  getHome,
  getAbout,
  getLogin,
  getSignUp,
  getProductsContainer,
  getProductCardInstance,
  getProductDetailsInstance,
  getCartInstance,
  emptyCart,
  succesfull,
};
