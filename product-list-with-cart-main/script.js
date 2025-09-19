// import { cart } from "./cart.js";

const products = [
  {
    id: "id1",
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 650,
  },
  {
    id: "id2",
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 700,
  },
  {
    id: "id3",
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 800,
  },
  {
    id: "id4",
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 550,
  },
  {
    id: "id5",
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 400,
  },
  {
    id: "id6",
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 500,
  },
  {
    id: "id7",
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 450,
  },
  {
    id: "id8",
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 550,
  },
  {
    id: "id9",
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 650,
  },
];

let productsHtml = ""; //Accumulator variable

products.forEach((product) => {
  //Accumulator pattern
  productsHtml += ` 
  
  
  <figure>
    <div class="image-block">
        <picture>
        <source media="(min-width: 1440px)" srcset="${product.image.desktop}">
        <source media="(min-width: 768px)" srcset="${product.image.tablet}">
        <img src="${product.image.mobile}" alt="${product.name}">
        </picture>
            
          <button class="js-add-to-cart button" data-product-id="${product.id}">
        <img src="assets/images/icon-add-to-cart.svg" alt="" class="cart-img"> 
        <span>Add to
            Cat</span>
        </button>
    </div>

    
    
    <figcaption>${product.category}</figcaption>
    <p class="text-title">${product.name}</p>
    <p class="text-price">$${(product.price / 100).toFixed(2)}</p>
  </figure>
  `;
});

document.querySelector(".js-product").innerHTML = productsHtml;
// next step is add event listener to all the 'add buttons'.
// data attribute for unique identity of products.

let cart = [];

// Add to cart logic
function addToCart(productId) {
  const found = cart.find((item) => item.productId === productId);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  renderCart();
}

// Remove from cart logic
function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  renderCart();
}

// Render cart
function renderCart() {
  const cartList = document.querySelector(".product-selected");
  const emptySection = document.querySelector(".empty-section");
  const orderTotal = document.querySelector(".order-summary h2");
  const cartQuantity = document.querySelector(".cart-quantity");

  if (cart.length === 0) {
    emptySection.style.display = "block";
    cartList.innerHTML = "";
    orderTotal.textContent = "$0.00 (0 items)";
    cartQuantity.textContent = "0";
    return;
  } else {
    emptySection.style.display = "none";
  }

  let cartHtml = "";
  let total = 0;
  let totalQty = 0;

  cart.forEach((cartItem) => {
    const product = products.find((p) => p.id === cartItem.productId);
    const itemTotal = (product.price * cartItem.quantity) / 100;
    total += itemTotal;
    totalQty += cartItem.quantity;

    cartHtml += `
      <section class="item">
        <img src="${product.image.thumbnail}" alt="${
      product.name
    }" style="width:40px;border-radius:50%;">
        <div>
          <h4>${product.name}</h4>
          <p>
            <span>${cartItem.quantity}x</span>
            <span>@$${(product.price / 100).toFixed(2)}</span>
            <span>$${itemTotal.toFixed(2)}</span>
          </p>
        </div>
        <button class="remove-item" data-product-id="${
          product.id
        }" style="background:none;border:none;cursor:pointer;">
          <img src="assets/images/icon-remove-item.svg" alt="Remove" style="width:20px;">
        </button>
      </section>
    `;
  });

  cartList.innerHTML = cartHtml;
  orderTotal.textContent = `$${total.toFixed(2)} (${totalQty} items)`;
  cartQuantity.textContent = totalQty;

  // Add remove event listeners
  cartList.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(btn.dataset.productId);
    });
  });
}

// Add event listeners to add-to-cart buttons
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
  });
});

// Initial render
renderCart();
