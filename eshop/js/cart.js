// cart.js - Handles cart page logic and modals
document.addEventListener('DOMContentLoaded', function() {
  // Track the index of the product being checked out
  let currentCheckoutIdx = null;

  // Render cart products
  function renderCartProducts(products = shopCart.getCart()) {
    const container = document.getElementById('cart-products');
    container.innerHTML = '';
    
    if (products.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center animate__animated animate__fadeIn">
          <h3>Your cart is empty</h3>
          <p>Go to <a href="products.html">Products</a> to add items to your cart.</p>
        </div>
      `;
      return;
    }

    let totalAmount = 0;
    products.forEach((prod, idx) => {
      totalAmount += prod.price * prod.quantity;
      container.innerHTML += `
        <div class="col-md-4 animate__animated animate__fadeIn" style="animation-delay: ${idx * .2}s">
          <div class="card h-100 border-0 shadow-sm">
            <img src="https://picsum.photos/300/200?${prod.name.replace(/\s+/g, '')}" 
                 class="card-img-top img-fluid" 
                 style="aspect-ratio:3/2;object-fit:cover;" 
                 alt="${prod.name}">
            <div class="card-body">
              <h5 class="card-title animate__animated animate__fadeIn" style="animation-delay: ${(idx * 0.1) + 0.2}s">${prod.name}</h5>
              <p class="card-text mb-1">Price: $${prod.price.toFixed(2)}</p>
              <p class="card-text mb-1">Quantity: ${prod.quantity}</p>
              <p class="card-text mb-3 fw-bold">Total: $${(prod.price * prod.quantity).toFixed(2)}</p>
              <button class="btn btn-primary w-100 checkout-btn d-flex align-items-center justify-content-center gap-2" data-idx="${idx}">
                <i class="bi bi-bag-check"></i> Checkout
              </button>
            </div>
          </div>
        </div>
      `;
    });

    // Add event listeners for Checkout buttons
    // Add total section
    container.innerHTML += `
      <div class="col-12 mt-4 animate__animated animate__fadeIn animate__delay-.5s">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="mb-0">Total Amount:</h4>
              <h4 class="mb-0">$${totalAmount.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll('.checkout-btn').forEach(btn => {
      btn.onclick = function() {
        const idx = parseInt(this.getAttribute('data-idx'));
        const prod = shopCart.getCart()[idx];
        currentCheckoutIdx = idx;
        document.getElementById('checkoutModalImg').src = `https://picsum.photos/300/200?${prod.name.replace(/\s+/g, '')}`;
        document.getElementById('checkoutModalName').textContent = prod.name;
        document.getElementById('checkoutModalPrice').textContent = `$${prod.price.toFixed(2)}`;
        document.getElementById('checkoutModalQty').value = prod.quantity;
        document.getElementById('checkoutModalTotalPrice').textContent = `Total: $${(prod.price * prod.quantity).toFixed(2)}`;
        new bootstrap.Modal(document.getElementById('checkoutModal')).show();
      };
    });
  }

  renderCartProducts();

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

  // Confirm checkout button logic
  document.getElementById('checkoutModalConfirm').onclick = function() {
    if (currentCheckoutIdx !== null) {
      // Remove the item from cart
      shopCart.removeFromCart(currentCheckoutIdx);
      renderCartProducts();
      currentCheckoutIdx = null;
      
      // Hide checkout modal and show success
      bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
      setTimeout(() => {
        new bootstrap.Modal(document.getElementById('successModal')).show();
      }, 400);
    }
  };

  // Search functionality for cart
  document.querySelector('form[role="search"]').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = this.querySelector('input[type="search"]').value.toLowerCase();
    
    const searchResults = shopCart.getCart().filter(product => 
      product.name.toLowerCase().includes(searchTerm)
    );

    renderCartProducts(searchResults);
  });

  // Reset search when input is cleared
  document.querySelector('input[type="search"]').addEventListener('input', function(e) {
    if (this.value === '') {
      renderCartProducts();
    }
  });
});
