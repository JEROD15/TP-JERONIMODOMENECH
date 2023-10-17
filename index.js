let listadoProducto = document.querySelector("#listaProductos");

let id;
let arrayproductos = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((datos) => {
    arrayproductos = datos.slice(0, 9);
    console.log(arrayproductos);

    dibujartarjetas(arrayproductos);
  });

function dibujartarjetas(arrayproductos) {
  arrayproductos.forEach((producto) => {
    listadoProducto.innerHTML += `
                    <div class="shop-item" id="${producto.id}">  
                    <span class="shop-item-title">${producto.title}</span>
                    
                    <img class="shop-item-image" src="${producto.image}">
                    
                    <div class="shop-item-details">
                        <span class="shop-item-price">$ ${producto.price}</span>
                        <button class="btn btn-primary view-more-btn" type="button">Ver más</button>
                    </div>
                    </div>`;
  });

  let botones = document.querySelectorAll(".view-more-btn");
  botones = [...botones];

  botones.forEach((boton) => {
    boton.addEventListener("click", function (event) {
      if (event.target.classList.contains("view-more-btn")) {
        id = parseInt(event.target.parentNode.parentNode.id);
      }
      console.log(id);
      window.location.href = "product.html?id=" + id;
    });
  });
}
