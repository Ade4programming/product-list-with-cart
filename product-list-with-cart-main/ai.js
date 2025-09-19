// const productSection = document.querySelector(".js-product");
// const cartSection = document.querySelector(".cart-section");
// const cartList = document.querySelector(".product-selected");
// const cartCount = cartSection.querySelector("h2 span");
// const orderTotal = cartSection.querySelector(".order-summary h2");
// const emptySection = cartSection.querySelector(".empty-section");

// let products = [];
// let cart = [];

// // Load products from data.json
// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => {
//     products = data;
//     renderProducts();
//     renderCart();
//   });

// // Render product cards
// function renderProducts() {
//   productSection.innerHTML = "";
//   products.forEach((product, index) => {
//     const inCart = cart.find((item) => item.name === product.name);
//     productSection.innerHTML += `
//       <figure>
//         <div class="image-block">
//           <img src="${product.image.thumbnail}" alt="${product.name}">
//           <button class="button" data-index="${index}">
//             <img src="assets/images/icon-cart.svg" class="cart-img" alt="cart">
//             ${
//               inCart
//                 ? `
//               <span>${inCart.qty}</span>
//               <button class="decrement" data-index="${index}">-</button>
//               <button class="increment" data-index="${index}">+</button>
//             `
//                 : "Add to Cart"
//             }
//           </button>
//         </div>
//         <figcaption>${product.category}</figcaption>
//         <div class="text-title">${product.name}</div>
//         <div class="text-price">$${product.price.toFixed(2)}</div>
//       </figure>
//     `;
//   });

//   // Add event listeners for cart buttons
//   productSection.querySelectorAll(".button").forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       const index = +btn.dataset.index;
//       if (!cart.find((item) => item.name === products[index].name)) {
//         addToCart(index);
//       }
//     });
//   });
//   productSection.querySelectorAll(".increment").forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       e.stopPropagation();
//       addToCart(+btn.dataset.index);
//     });
//   });
//   productSection.querySelectorAll(".decrement").forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       e.stopPropagation();
//       removeFromCart(+btn.dataset.index);
//     });
//   });
// }

// // Add product to cart
// function addToCart(index) {
//   const prod = products[index];
//   const found = cart.find((item) => item.name === prod.name);
//   if (found) {
//     found.qty++;
//   } else {
//     cart.push({ ...prod, qty: 1 });
//   }
//   renderProducts();
//   renderCart();
// }

// // Remove product from cart
// function removeFromCart(index) {
//   const prod = products[index];
//   const found = cart.find((item) => item.name === prod.name);
//   if (found) {
//     found.qty--;
//     if (found.qty <= 0) {
//       cart = cart.filter((item) => item.name !== prod.name);
//     }
//   }
//   renderProducts();
//   renderCart();
// }

// // Render cart
// function renderCart() {
//   cartList.innerHTML = "";
//   if (cart.length === 0) {
//     emptySection.style.display = "block";
//     cartList.style.display = "none";
//     orderTotal.textContent = "$0.00";
//     cartCount.textContent = "0";
//     return;
//   }
//   emptySection.style.display = "none";
//   cartList.style.display = "flex";
//   let total = 0;
//   cart.forEach((item) => {
//     const itemTotal = item.price * item.qty;
//     total += itemTotal;
//     cartList.innerHTML += `
//       <section class="item">
//         <h4>${item.name}</h4>
//         <p>
//           <span>${item.qty}x</span>
//           <span>@$${item.price.toFixed(2)}</span>
//           <span>$${itemTotal.toFixed(2)}</span>
//         </p>
//         <button class="remove-item" data-name="${item.name}">
//           <img src="assets/images/icon-remove-item.svg" alt="Remove">
//         </button>
//       </section>
//     `;
//   });
//   orderTotal.textContent = `$${total.toFixed(2)}`;
//   cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

//   // Remove item event
//   cartList.querySelectorAll(".remove-item").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       cart = cart.filter((item) => item.name !== btn.dataset.name);
//       renderProducts();
//       renderCart();
//     });
//   });
// }

// // Confirm order button
// cartSection.querySelector(".confirm-order").addEventListener("click", () => {
//   if (cart.length === 0) return;
//   alert("Order confirmed!");
//   cart = [];
//   renderProducts();
//   renderCart();
// });
