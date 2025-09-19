import { products } from "./script.js";
export const cart = [
  // {
  //   productId: productId,
  //   quantity: 1,
  // },
];

let cartHtml = '';
cart.forEach((cartItem) => {

    const productId = cartItem.productId;

    let matchingproducts;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingproducts = product;
        }
    })


    cartHtml += `
    <section class="item">
    <h4>${matchingproducts.name}</h4>
    <p>
      <span>1x</span> <span>@$5.50</span> <span>$5.50</span>
    </p>
  </section>
  <section>
    <img src="${matchingproducts.name.mobile}" alt="">
  </section>
    `;
});
document.querySelector('.product-selected').innerHTML = cartHtml;
console.log(cartHtml);