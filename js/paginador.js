const itemsPerPage = 5; // Cambia este valor según cuántos elementos deseas mostrar por página
let currentPage = 1;

// Arreglo de objetos con la información de cada producto
const items = [
    {
        units: "16 unidades",
        price: "$3249",
        title: "Toallas Femeninas Nosotras Nocturna",
        imgSrc: "img/img-03.jpg"
    },
    {
        units: "10 unidades",
        price: "$2499",
        title: "Toallas Femeninas Nosotras Diurna",
        imgSrc: "img/img-04.jpg"
    },
    {
        units: "20 unidades",
        price: "$1999",
        title: "Toallas Femeninas Nosotras Regular",
        imgSrc: "img/img-05.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-06.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-07.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-08.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-09.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-10.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-11.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-12.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-13.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-14.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-15.jpg"
    },
    {
        units: "12 unidades",
        price: "$2799",
        title: "Toallas Femeninas Nosotras Extra",
        imgSrc: "img/img-16.jpg"
    },
    // Agrega más objetos según sea necesario
];

function renderItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsContainer = document.getElementById("itemsContainer");

    itemsContainer.innerHTML = ""; // Limpiar el contenedor

    items.slice(startIndex, endIndex).forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5";
        itemElement.innerHTML = `
            <figure class="effect-ming tm-video-item">
                <img src="${item.imgSrc}" alt="Image" class="img-fluid">
                <figcaption class="d-flex flex-column align-items-center justify-content-center">
                    <h2></h2>
                    <p class="tm-text-gray-light">${item.units}</p>
                    <h1>${item.price}</h1>
                    <a href="photo-detail.html">View more</a>
                </figcaption>
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-dark">${item.title}</span>
            </div>
        `;
        itemsContainer.appendChild(itemElement);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pagingLinks = document.getElementById("pagingLinks");

    pagingLinks.innerHTML = ""; // Limpiar enlaces de paginación
    for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement("a");
        link.href = "javascript:void(0);";
        link.textContent = i;
        link.classList.add("tm-paging-link");
        if (i === currentPage) {
            link.classList.add("active");
        }
        link.addEventListener("click", () => {
            currentPage = i;
            renderItems();
        });
        pagingLinks.appendChild(link);
    }

    document.getElementById("prevBtn").classList.toggle("disabled", currentPage === 1);
    document.getElementById("nextBtn").classList.toggle("disabled", currentPage === totalPages);
}

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderItems();
    }
});

// Renderizar la primera página al cargar
renderItems();