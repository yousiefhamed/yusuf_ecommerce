const generateHeader = (loggedIn) => `
  <header class="header flex w-full screen-bg">
    <h1><a href="/">YUSUF</a></h1>
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
      <button onclick="renderProducts()" class="button">
        <p class="medium">Explore Products</p>
      </button>
    </div>
`;

const succesfull = (title) => `
      <div id="successPopup" class="successful-popup flex">
        <img src="./assets/success.png" />
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
        <label for="username">
          <p>Username:</p>
          <input
            placeholder="example@gmail.com"
            type="text"
            id="username"
            required
          />
          <span class="error-message"></span>
        </label>
        <label for="password">
          <p>Password:</p>
          <input
            placeholder="Enter your password..."
            type="password"
            id="password"
            required
          />
          <span class="error-message"></span>
        </label>
        <button type="submit" class="button">Login</button>
        <div class="center flex flex-col gap-1">
          <p>
            Forget your password?
            <a href="#" class="forgot-password link small">Reset Password?</a>
          </p>
          <p>
            Don't Have an Account?
            <a href="#" class="link small">Sign Up</a>
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
      <h2 class="heading">${!type ? "Products" : "Cart"}</h2>
      <div class="flex" id="products"></div>
    </section>
`;

const getProductInstance = (id, img, title, category, price) => `
      <div class="product flex flex-col">
        <img src=${img} alt="product" />
        <div class="flex">
          <div>
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
  getProductsContainer,
  getProductInstance,
  getCartInstance,
  emptyCart,
  succesfull,
};
