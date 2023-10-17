let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

//Pido los Productos al Servidor
fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((producto) => {
    getResult(producto);
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
                <button class="btn btn-primary addCart-btn" type="button">Agregar al Carrito</button>
                <button class="btn btn-primary cancel-btn" type="button" >Cancelar</button>
              </div>
          </div>`;

  //Escuchar los botones para ver que hacer
  // Agregar al carrito o Volver al index
}
