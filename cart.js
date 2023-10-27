let carrito = {};
const productosCarrito = document.getElementById("productosCarrito");
const logoShop = document.getElementById("logoShop");

document.addEventListener("DOMContentLoaded", () => {
  revisarCarrito();
  dibujarCarrito();
});

function revisarCarrito() {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }
}

function dibujarCarrito() {
  Object.values(carrito).forEach((fila) => {
    productosCarrito.innerHTML += `
    <div class="cart-row">
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${fila.imagen}" width="100" height="100">
        <span class="cart-item-title">${fila.titulo}</span>
    </div>
    <span class="cart-price cart-column">${fila.precio}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" min="1" type="number" value="${fila.cantidad}">

        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
</div>



`;
  });
}

logoShop.addEventListener("click", () => {
  window.location.href = "index.html";
});
