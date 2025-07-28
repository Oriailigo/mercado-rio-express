// js/buscador.js
function filterProducts() {
  const input = document.getElementById("searchInput");
  const search = input.value.toLowerCase();

  const filtered = allProducts.filter(product =>
    product.nombre.toLowerCase().includes(search)
  );

  renderProducts(filtered);
}
