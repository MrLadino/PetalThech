// Añadir las imágenes de camisas dinámicamente

const camisasContainer = document.createElement('div');
camisasContainer.classList.add('products');

const camisasImages = [
    'assets/images/1f8574012b49c47d6fc0c7dd92483c59-product.jpg',
    'assets/images/16934781441ad7924a55549038466b2ed7a39d8bf1_thumbnail_720x.jpg',
    'assets/images/S4efb87737021463d98f110198c1686d6L.jpg_640x640Q90.jpg',
    'assets/images/61mL0h0aMxL._AC_UY1000_.jpg',
    'assets/images/512zk27drPL.jpg',
    'assets/images/616oYinREVL._AC_SX522_.jpg',
    'assets/images/61et92aUBYL._AC_UF894,1000_QL80_.jpg',
    // Agregar aquí la ruta de la segunda imagen de camisas
    'assets/images/segunda_imagen_camisas.jpg'
];

camisasImages.forEach(imageSrc => {
    const camisaDiv = document.createElement('div');
    camisaDiv.classList.add('camisas');

    const img = document.createElement('img');
    img.src = imageSrc;

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. COP: $100.000';

    const button = document.createElement('button');
    button.textContent = 'Añadir';
    button.addEventListener('click', () => {
        // Lógica para agregar al carrito
        console.log('Producto añadido al carrito');
    });

    camisaDiv.appendChild(img);
    camisaDiv.appendChild(p);
    camisaDiv.appendChild(button);

    camisasContainer.appendChild(camisaDiv);
});

// Agregar el contenedor de camisas al DOM
document.body.appendChild(camisasContainer);

// Dropdown categorías
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});
