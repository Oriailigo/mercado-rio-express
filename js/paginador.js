// js/paginador.js
let allProducts = [];

fetch('static/productos.json')
  .then(response => response.json())
  .then(data => {
    allProducts = data;
    renderProducts(allProducts);
  })
  .catch(error => console.error('Error cargando productos:', error));

function renderProducts(products) {
  const container = document.getElementById("itemsContainer");
  container.innerHTML = "";

  products.forEach(p => {
    const item = document.createElement("div");
    item.className = "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5";
    item.innerHTML = `
      <figure class="effect-ming tm-video-item">
          <img src="static/uploads/${p.imagen}" alt="Imagen" class="img-fluid">
          <figcaption class="d-flex flex-column align-items-center justify-content-center">
              <p class="tm-text-gray-light">${p.unidades} unidades</p>
              <h1>$${p.precio}</h1>
              <a href="#">Ver más</a>
          </figcaption>
      </figure>
      <div class="d-flex justify-content-between tm-text-gray">
          <span class="tm-text-gray-dark">${p.nombre}</span>
      </div>
    `;
    container.appendChild(item);
  });
}
