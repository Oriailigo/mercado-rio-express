const itemsPerPage = 8; // Cambia este valor según cuántos elementos deseas mostrar por página
let currentPage = 1;

// Arreglo de objetos con la información de cada producto
const items = [
    {
        units: "16 unidades",
        price: "$3065",
        title: "AEROSOL BUBBLEGUM SAPHIRUS",
        imgSrc: "img/productos/1.jpeg"
    },
    {
        units: "10 unidades",
        price: "$3065",
        title: "AEROSOL FLORES BLANCAS SAPHIRUS",
        imgSrc: "img/productos/2.jpeg"
    },
    {
        units: "20 unidades",
        price: "$3065",
        title: "AEROSOL CITRUS SAPHIRUS",
        imgSrc: "img/productos/3.jpeg"
    },
    {
        units: "12 unidades",
        price: "$2759",
        title: "AROMATIZADOR TEXTIL PITANGA SAPHIRUS",
        imgSrc: "img/productos/4.jpeg"
    },
    {
        units: "12 unidades",
        price: "$2759",
        title: "AROMATIZADOR TEXTIL MARACUYÁ SAPHIRUS",
        imgSrc: "img/productos/5.jpeg"
    },
    {
        units: "12 unidades",
        price: "$209",
        title: "POLVO PARA PREPARAR BEBIDA ARCOR LIMONADA 18grs",
        imgSrc: "img/productos/6.jpeg"
    },
    {
        units: "12 unidades",
        price: "$209",
        title: "POLVO PARA PREPARAR BEBIDA ARCOR MULTIFRUTA 18grs",
        imgSrc: "img/productos/7.jpeg"
    },
    {
        units: "12 unidades",
        price: "$209",
        title: "POLVO PARA PREPARAR BEBIDA ARCOR NARANJA 18grs",
        imgSrc: "img/productos/8.jpeg"
    },
    {
        units: "12 unidades",
        price: "$1029",
        title: "GALLETITAS CRACKERS LA PROVIDENCIA 303grs",
        imgSrc: "img/productos/9.jpeg"
    },
    {
        units: "12 unidades",
        price: "$729",
        title: "VINAGRE DE ALCOHOL FAVINCO 500CM3",
        imgSrc: "img/productos/10.jpeg"
    },
    {
        units: "12 unidades",
        price: "$1169",
        title: "PAPEL HIGIÉNICO OKEY TEXTURADO 4X30Mt",
        imgSrc: "img/productos/11.jpeg"
    },
    {
        units: "12 unidades",
        price: "$749",
        title: "BIZCOCHOS DULCES DON SATUR 200grs",
        imgSrc: "img/productos/12.jpeg"
    },
    {
        units: "12 unidades",
        price: "$3869",
        title: "VINO TINTO CORDERO CON PIEL DE LOBO MALBEC 750CM3",
        imgSrc: "img/productos/13.jpeg"
    },
    {
        units: "12 unidades",
        price: "$4259",
        title: "APERITIVO GANCIA AMERICANO 950CM3",
        imgSrc: "img/productos/14.jpeg"
    },
    {
        units: "12 unidades",
        price: "$1869",
        title: "ALIMENTO A BASE DE AZÚCAR HILERET LIGHT 500grs",
        imgSrc: "img/productos/15.jpeg"
    },
    {
        units: "12 unidades",
        price: "$3249",
        title: "TOALLITAS FEMENINAS NOSOTRAS NOCTURNA SUAVE 16uni",
        imgSrc: "img/productos/16.jpeg"
    },
    {
        units: "12 unidades",
        price: "$10.999",
        title: "FER. BRANCA 750 cc",
        imgSrc: "img/productos/17.jpeg"
    },
    {
        units: "12 unidades",
        price: "$780",
        title: "JABON EN POLVO ALA LAVADO A MANO CON BICARBONATO 4",
        imgSrc: "img/productos/18.jpeg"
    },
    {
        units: "12 unidades",
        price: "$1889",
        title: "Yerba mate mañanita 4 flex con palo 500grs",
        imgSrc: "img/productos/19.jpeg"
    },
    {
        units: "12 unidades",
        price: "$715",
        title: "Harina de trigo favorita 000 1kgs",
        imgSrc: "img/productos/20.jpeg"
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