let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
let carrito = {};
const logoCarrito = document.getElementById("logoCarrito");

//Pido los Productos al Servidor
fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((producto) => {
    getResult(producto);
    revisarCarrito();
    escucharbotones(producto);
  })
  .catch((error) => {
    console.error("Error al obtener datos de la API:", error);
  });

//Recibe el json de la consulta y genera las cards guardo el ID
let productContainer = document.querySelector(".product-item");

function getResult(producto) {
  productContainer.innerHTML = `
        <div class="shop-detail" id="${producto.id}">  
              <span class="product-title">${producto.title}</span>
              <img class="shop-item-image" src="${producto.image}">
              <span class="shop-item-description">${producto.description}</span>
              <div class="shop-item-details">
                <span class="shop-item-price">$ ${producto.price}</span>
                <button class="btn btn-primary addCart-btn" type="button" id="btnAgregarCarrito">Agregar al Carrito</button>
                <button class="btn btn-primary cancel-btn" type="button"id="btnCancelar"  >Cancelar</button>
              </div>
          </div>`;

  //Escuchar los botones para ver que hacer
  // Agregar al carrito o Volver al index
}

function escucharbotones(producto) {
  let btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

  btnAgregarCarrito.addEventListener("click", () => {
    const productoCarrito = {
      id: producto.id,
      titulo: producto.title,
      imagen: producto.image,
      descripcion: producto.description,
      precio: producto.price,
      cantidad: 1,
    };
    if (carrito.hasOwnProperty(productoCarrito.id)) {
      productoCarrito.cantidad += carrito[productoCarrito.id].cantidad;
    }

    carrito[productoCarrito.id] = { ...productoCarrito };

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto Agregado al Carrito");

    window.location.href = "index.html";
  });

  let btnCancelar = document.getElementById("btnCancelar");

  btnCancelar.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

function revisarCarrito() {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));

    cantidadCarrito = Object.keys(carrito).length;
    if (cantidadCarrito > 0) {
      logoCarrito.className = "bi bi-cart-fill";
    } else {
      logoCarrito.className = "bi bi-cart";
    }

    console.log(carrito);
  }
}

logoCarrito.addEventListener("click", () => {
  window.location.href = "cart.html";
});
