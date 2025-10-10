
document.addEventListener('DOMContentLoaded', function() {
        // Modal HTML injection
        const modalHtml = `
        <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cartModalLabel">Add to Cart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex flex-column align-items-center">
                        <img id="cartModalImg" src="" alt="Product" class="img-fluid mb-3" style="max-width:300px;aspect-ratio:3/2;object-fit:cover;">
                        <h5 id="cartModalName"></h5>
                        <p id="cartModalPrice" class="mb-3"></p>
                        <div class="d-flex align-items-center mb-3">
                            <button type="button" class="btn btn-outline-secondary" id="cartModalMinus">-</button>
                            <input type="text" id="cartModalQty" class="form-control mx-2 text-center" value="1" style="width:60px;" readonly>
                            <button type="button" class="btn btn-outline-secondary" id="cartModalPlus">+</button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="cartModalAdd">Add to Cart</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        // Bootstrap modal instance
        let cartModal = new bootstrap.Modal(document.getElementById('cartModal'));

    let products = [];
    let currentCategory = '';

    // Fetch the products data from products.json in the same folder
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(); // Show all products by default
            createCategoryFilters();
        })
        .catch(error => console.error('Error loading products:', error));

    // Get unique categories from products
    function getCategories() {
        return [...new Set(products.map(product => product.category))];
    }

    // Create category filters
    function createCategoryFilters() {
        const categories = getCategories();
        const filterContainer = document.getElementById('category-filters');
        filterContainer.innerHTML = '';

        // Add 'All' button for Bootstrap UX
        const allBtn = document.createElement('button');
        allBtn.type = 'button';
        allBtn.className = 'btn btn-primary';
        allBtn.textContent = 'All';
        allBtn.onclick = () => {
            document.querySelectorAll('#category-filters .btn-primary').forEach(btn => {
                btn.classList.replace('btn-primary', 'btn-outline-primary');
            });
            allBtn.classList.add('btn-primary');
            allBtn.classList.remove('btn-outline-primary');
            displayProducts();
        };
        filterContainer.appendChild(allBtn);

        categories.forEach(category => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn btn-outline-primary';
            button.textContent = category;
            button.onclick = () => {
                document.querySelectorAll('#category-filters .btn-primary').forEach(btn => {
                    btn.classList.replace('btn-primary', 'btn-outline-primary');
                });
                button.classList.replace('btn-outline-primary', 'btn-primary');
                displayProducts(category);
            };
            filterContainer.appendChild(button);
        });
    // Listen for input event on search field to refresh products when cleared
    const searchForm = document.querySelector('form[role="search"]');
    const searchInput = searchForm.querySelector('input[type="search"]');
    searchInput.addEventListener('input', function() {
        if (searchInput.value === '') {
            displayProducts();
        }
    });
    }

    // Filter and display products
    function displayProducts(category) {
        currentCategory = category || '';
        const filteredProducts = category
            ? products.filter(product => product.category === category)
            : products;

        const productsContainer = document.querySelector('.row.g-4');
        productsContainer.innerHTML = '';

        filteredProducts.forEach((product, idx) => {
            productsContainer.innerHTML += `
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm product-card">
                        <div class="position-relative">
                            <img src="https://picsum.photos/300/200?${product.name.replace(/\s+/g, '')}"
                                 class="card-img-top img-fluid"
                                 style="aspect-ratio: 3 / 2; object-fit: cover;"
                                 alt="${product.name}">
                            <div class="position-absolute top-0 end-0 m-3">
                                ${product.price < 50 ? '<span class="badge bg-danger animate__animated animate__fadeIn">Sale!</span>' : ''}
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-1">${product.name}</h5>
                            <p class="text-primary fw-bold mb-3">$${product.price.toFixed(2)}</p>
                            <div class="d-flex gap-2">
                                <button class="btn btn-primary flex-grow-1 add-to-cart-btn d-flex align-items-center justify-content-center gap-2" data-idx="${products.indexOf(product)}">
                                    <i class="bi bi-cart-plus"></i> Add to Cart
                                </button>
                                <button class="btn btn-success checkout-btn d-flex align-items-center justify-content-center" data-idx="${products.indexOf(product)}">
                                    <i class="bi bi-bag-check"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        let currentProduct = null;
        let isCheckout = false;
        const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        const addToCartModal = new bootstrap.Modal(document.getElementById('addToCartModal'));
        const orderSuccessModal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));

        // Add event listeners for Add to Cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.onclick = function() {
                const prod = products[this.getAttribute('data-idx')];
                document.getElementById('checkoutModalImg').src = `https://picsum.photos/300/200?${prod.name.replace(/\s+/g, '')}`;
                document.getElementById('checkoutModalName').textContent = prod.name;
                document.getElementById('checkoutModalPrice').textContent = `$${prod.price.toFixed(2)}`;
                document.getElementById('checkoutModalQty').value = 1;
                document.getElementById('checkoutModalTotalPrice').textContent = `Total: $${prod.price.toFixed(2)}`;
                currentProduct = prod;
                isCheckout = false;
                checkoutModal.show();
            };
        });

        // Add event listeners for Checkout buttons
        document.querySelectorAll('.checkout-btn').forEach(btn => {
            btn.onclick = function() {
                const prod = products[this.getAttribute('data-idx')];
                document.getElementById('checkoutModalImg').src = `https://picsum.photos/300/200?${prod.name.replace(/\s+/g, '')}`;
                document.getElementById('checkoutModalName').textContent = prod.name;
                document.getElementById('checkoutModalPrice').textContent = `$${prod.price.toFixed(2)}`;
                document.getElementById('checkoutModalQty').value = 1;
                document.getElementById('checkoutModalTotalPrice').textContent = `Total: $${prod.price.toFixed(2)}`;
                currentProduct = prod;
                isCheckout = true;
                checkoutModal.show();
            };
        });

        // Quantity controls and price update
        function updateTotalPrice() {
            const qty = parseInt(document.getElementById('checkoutModalQty').value);
            const priceText = document.getElementById('checkoutModalPrice').textContent;
            const unitPrice = parseFloat(priceText.replace('$', ''));
            const totalPrice = (qty * unitPrice).toFixed(2);
            document.getElementById('checkoutModalTotalPrice').textContent = `Total: $${totalPrice}`;
        }

        document.getElementById('checkoutModalMinus').onclick = function() {
            let qty = parseInt(document.getElementById('checkoutModalQty').value);
            if (qty > 1) {
                document.getElementById('checkoutModalQty').value = qty - 1;
                updateTotalPrice();
            }
        };
        document.getElementById('checkoutModalPlus').onclick = function() {
            let qty = parseInt(document.getElementById('checkoutModalQty').value);
            document.getElementById('checkoutModalQty').value = qty + 1;
            updateTotalPrice();
        };

        // Checkout confirmation
        document.getElementById('checkoutModalConfirm').onclick = function() {
            const qty = parseInt(document.getElementById('checkoutModalQty').value);
            if (currentProduct) {
                if (isCheckout) {
                    // If it's a direct checkout, don't add to cart, just show success
                    checkoutModal.hide();
                    orderSuccessModal.show();
                } else {
                    // If it's add to cart, add the item and show cart success
                    shopCart.addToCart(currentProduct, qty);
                    checkoutModal.hide();
                    addToCartModal.show();
                }
            }
        };
    }


    // Handle search functionality
    document.querySelector('form[role="search"]').addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = this.querySelector('input[type="search"]').value.toLowerCase();

        const searchResults = products.filter(product => {
            const matchesCategory = !currentCategory || product.category === currentCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        const productsContainer = document.querySelector('.row.g-4');
        productsContainer.innerHTML = '';

        searchResults.forEach(product => {
            productsContainer.innerHTML += `
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="https://picsum.photos/300/200?${product.name.replace(/\s+/g, '')}"
                             class="card-img-top img-fluid"
                             style="aspect-ratio: 3 / 2; object-fit: cover;"
                             alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price.toFixed(2)}</p>
                            <a href="#" class="btn btn-primary w-100">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
        });
    });
});
