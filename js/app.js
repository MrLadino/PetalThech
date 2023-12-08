<<<<<<< HEAD
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};
=======
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
>>>>>>> 25307201a88cc4c3d5d6dc7ec612339c4dd3b9b1
