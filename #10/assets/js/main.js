const brand = document.querySelectorAll('#brand .item');
const product = document.querySelectorAll('#product .product-item');

// Initially hide all products
Array.from(product).forEach(productItem => {
    productItem.style.display = 'none';
});

// Function to handle filtering based on selected brand
function filterProductsByBrand(selectedBrand) {
    // Filter and show/hide product items
    Array.from(product).forEach(productItem => {
        let productBrand = productItem.getAttribute('data-product');

        if (productBrand === selectedBrand) {
            productItem.style.display = 'block'; // Show matching products
        } else {
            productItem.style.display = 'none'; // Hide non-matching products
        }
    });
}

// Add event listeners to all brand items
Array.from(brand).forEach(item => {
    item.addEventListener('click', () => {
        // Check if the clicked item already has the 'active' class
        if (item.classList.contains('active')) {
            return; // Do nothing if already active
        }

        // Remove the 'active' class from all brand items
        Array.from(brand).forEach(b => b.classList.remove('active'));

        // Add the 'active' class to the clicked item
        item.classList.add('active');

        // Get the selected brand
        let selectedBrand = item.getAttribute('data-brand');
        console.log(selectedBrand);

        // Filter products based on the selected brand
        filterProductsByBrand(selectedBrand);
    });
});

// Ensure the first brand is selected by default
if (brand.length > 0) {
    brand[0].classList.add('active'); // Set the first brand item as active
    let defaultBrand = brand[0].getAttribute('data-brand'); // Get the data-brand of the first item
    filterProductsByBrand(defaultBrand); // Filter products by the default brand
}
