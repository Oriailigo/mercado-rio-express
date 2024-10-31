function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productContainers = document.querySelectorAll('.col-xl-3.col-lg-4.col-md-6.col-sm-6.col-12.mb-5');

    productContainers.forEach((container) => {
      const productName = container.querySelector('.tm-text-gray-dark').textContent.toLowerCase();

      if (productName.includes(searchInput)) {
        container.style.display = '';  // Muestra el producto si coincide
      } else {
        container.style.display = 'none';  // Oculta el producto si no coincide
      }
    });
  }