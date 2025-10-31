const ProductModal = {
  getModalHTML: function() {
    return `
    <div id="productModal" class="hidden fixed inset-0 z-50 overflow-y-auto">
      <div class="product-modal-backdrop fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0"></div>
      
      <div class="flex items-center justify-center min-h-screen p-4">
        <div class="product-modal-card relative bg-gray-100 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300">
          <!-- Close Button -->
          <button id="closeProductModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold z-10">&times;</button>

          <div class="container mx-auto p-6">
            <div class="flex flex-wrap -mx-4">
              
              <!-- Product Images -->
              <div class="w-full md:w-1/2 px-4 mb-8">
                <img id="modalMainImage"
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                  alt="Product"
                  class="w-full h-auto rounded-lg shadow-md mb-4">
                <div class="flex gap-4 py-4 justify-center overflow-x-auto">
                  <img src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85"
                    class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onclick="ProductModal.changeImage(this.src)">
                  <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944"
                    class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onclick="ProductModal.changeImage(this.src)">
                  <img src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c"
                    class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onclick="ProductModal.changeImage(this.src)">
                  <img src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6"
                    class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onclick="ProductModal.changeImage(this.src)">
                </div>
              </div>

              <!-- Product Details -->
              <div class="w-full md:w-1/2 px-4">
                <h2 id="modalProductName" class="text-3xl font-bold mb-2">Premium Wireless Headphones</h2>
                <p id="modalProductCategory" class="text-gray-600 mb-4">Electronics</p>
                <div class="mb-4">
                  <span id="modalProductPrice" class="text-2xl font-bold mr-2">$349.99</span>
                </div>

                <!-- Rating -->
                <div class="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="size-6 text-yellow-500"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="size-6 text-yellow-500"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="size-6 text-yellow-500"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="size-6 text-yellow-500"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="size-6 text-yellow-500"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                  <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
                </div>

                <p class="text-gray-700 mb-6">Electronic Product</p>

                <!-- Size Options -->
                <div class="mb-6">
                  <h3 class="text-lg font-semibold mb-2">Size:</h3>
                  <div class="flex space-x-2">
                    <button class="size-option px-4 py-2 border-2 border-gray-300 rounded-md hover:border-indigo-600 hover:text-indigo-600 transition-all focus:ring-2 focus:ring-indigo-500" data-size="Small">
                      Small
                    </button>
                    <button class="size-option px-4 py-2 border-2 border-gray-300 rounded-md hover:border-indigo-600 hover:text-indigo-600 transition-all focus:ring-2 focus:ring-indigo-500" data-size="Medium">
                      Medium
                    </button>
                    <button class="size-option px-4 py-2 border-2 border-gray-300 rounded-md hover:border-indigo-600 hover:text-indigo-600 transition-all focus:ring-2 focus:ring-indigo-500" data-size="Large">
                      Large
                    </button>
                  </div>
                </div>

                <!-- Quantity -->
                <div class="mb-6">
                  <label for="modalQuantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                  <input type="number" id="modalQuantity" min="1" value="1"
                    class="w-20 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>

                <!-- Buttons -->
                <div class="flex space-x-4 mb-6">
                  <button id="addToCartBtn" class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all">
                    🛒 Add to Cart
                  </button>
                  <button class="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all">
                    ❤️ Wishlist
                  </button>
                </div>

                <!-- Features -->
                <div>
                  <h3 class="text-lg font-semibold mb-2">Key Features:</h3>
                  <ul class="list-disc list-inside text-gray-700">
                    <li>High-quality electronic product</li>
                    <li>Premium build quality</li>
                    <li>Latest technology</li>
                    <li>Warranty included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  },

  getSuccessModalHTML: function() {
    return `
    <!-- Success Message Modal -->
    <div id="addToCartSuccess" class="hidden fixed inset-0 z-[60] flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div class="success-backdrop absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 opacity-0"></div>
        
        <!-- Success Card -->
        <div class="success-card relative bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300">
          <div class="p-6 sm:p-8">
            <!-- Success Icon -->
            <div class="flex justify-center mb-4">
              <div class="rounded-full bg-green-100 p-3">
                <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            
            <!-- Success Text -->
            <div class="text-center">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Added to Cart!</h3>
              <p id="successMessage" class="text-gray-600 text-base leading-relaxed">Your item has been added to the cart.</p>
            </div>
            
            <!-- Action Buttons -->
            <div class="mt-6 flex gap-3">
              <button id="continueShoppingBtn" class="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Continue Shopping
              </button>
              <button id="viewCartBtn" class="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30">
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  },

  // Inject modal into page
  inject: function() {
    if (!$('#productModal').length) {
      $('body').append(this.getModalHTML());
      this.initEventListeners();
    }
    if (!$('#addToCartSuccess').length) {
      $('body').append(this.getSuccessModalHTML());
      this.initSuccessModalListeners();
    }
  },
  
  initSuccessModalListeners: function() {
  },

  initEventListeners: function() {
    const $modal = $('#productModal');
    const $closeBtn = $('#closeProductModal');
    
    $closeBtn.on('click', () => this.close());
    
    $modal.on('click', (e) => {
      if ($(e.target).is('#productModal') || $(e.target).hasClass('product-modal-backdrop')) {
        this.close();
      }
    });
    
    $(document).on('keydown', (e) => {
      if (e.key === 'Escape' && !$modal.hasClass('hidden')) {
        this.close();
      }
    });

    // Size selection
    $('.size-option').on('click', function() {
      $('.size-option').removeClass('border-indigo-600 text-indigo-600 bg-indigo-50');
      $(this).addClass('border-indigo-600 text-indigo-600 bg-indigo-50');
    });

    // Add to cart functionality
    $('#addToCartBtn').on('click', () => {
      const productName = $('#modalProductName').text();
      const priceText = $('#modalProductPrice').text();
      const price = parseFloat(priceText.replace('$', ''));
      const quantity = parseInt($('#modalQuantity').val());
      const selectedSize = $('.size-option.border-indigo-600').data('size') || 'Medium';
      
      const cartItem = {
        id: Date.now(), 
        name: productName,
        price: price,
        quantity: quantity,
        size: selectedSize,
        hasSize: true,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200'
      };
      
      // Get existing cart from localStorage
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      
      // Check if item already exists
      const existingItemIndex = cart.findIndex(item => 
        item.name === cartItem.name && item.size === cartItem.size
      );
      
      if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
      } else {
        cart.push(cartItem);
      }
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      
      console.log('Cart updated:', cart);
      
      this.close();
      
      setTimeout(() => {
        this.showSuccessMessage(productName, quantity, selectedSize);
      }, 300);
    });
  },

  showSuccessMessage: function(productName, quantity, size) {
    const $successDiv = $('#addToCartSuccess');
    
    if (!$successDiv.length) {
      console.error('Success modal not found. Re-injecting...');
      $('body').append(this.getSuccessModalHTML());
    }
    
    const $messageP = $('#successMessage');
    const $card = $('.success-card');
    const $backdrop = $('.success-backdrop');
    
    if (!$card.length || !$backdrop.length || !$messageP.length) {
      console.error('Success modal elements not found');
      return;
    }
    
    $messageP.text(`${quantity}x ${productName} (Size: ${size}) has been successfully added to your cart.`);
    
    $card.css({
      transform: 'scale(0.8) translateY(-20px)',
      opacity: '0'
    });
    
    $('#addToCartSuccess').removeClass('hidden');
    
    requestAnimationFrame(() => {
      $backdrop.css('opacity', '1');
      $card.css({
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: 'scale(1) translateY(0)',
        opacity: '1'
      });
    });
    
    // Auto-close after 4 seconds if user doesn't click
    const autoCloseTimeout = setTimeout(() => {
      this.hideSuccessMessage();
    }, 4000);
    
    $('#continueShoppingBtn').off('click').on('click', () => {
      clearTimeout(autoCloseTimeout);
      this.hideSuccessMessage();
    });
    
    // View cart
    $('#viewCartBtn').off('click').on('click', () => {
      clearTimeout(autoCloseTimeout);
      this.hideSuccessMessage();
      
      if ($('#openCartBtn').length) {
        $('#openCartBtn').click();
      } else {
        window.location.href = 'order.php';
      }
    });
  },
  
  // Hide success message
  hideSuccessMessage: function() {
    const $successDiv = $('#addToCartSuccess');
    if (!$successDiv.length) return;
    
    const $card = $('.success-card');
    const $backdrop = $('.success-backdrop');
    
    if (!$card.length || !$backdrop.length) return;
    
    $backdrop.css('opacity', '0');
    $card.css({
      transition: 'all 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05)',
      transform: 'scale(0.8) translateY(-20px)',
      opacity: '0'
    });
    
    setTimeout(() => {
      $successDiv.addClass('hidden');
    }, 300);
  },

  open: function(product) {
    const $modal = $('#productModal');
    const $backdrop = $('.product-modal-backdrop');
    const $card = $('.product-modal-card');
    
    $('#modalProductName').text(product.name);
    $('#modalProductCategory').text(product.category);
    $('#modalProductPrice').text(`$${product.price.toFixed(2)}`);
    $('#modalMainImage').attr('src', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600');
    $('#modalQuantity').val(1);
    
    $('.size-option').removeClass('border-indigo-600 text-indigo-600 bg-indigo-50');
    
    $card.css({
      transform: 'scale(0.8) translateY(-20px)',
      opacity: '0'
    });
    
    $modal.removeClass('hidden');
    ModalUtils.lockScroll();
    
    requestAnimationFrame(() => {
      $backdrop.css('opacity', '1');
      $card.css({
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: 'scale(1) translateY(0)',
        opacity: '1'
      });
    });
  },

  close: function() {
    const $modal = $('#productModal');
    const $backdrop = $('.product-modal-backdrop');
    const $card = $('.product-modal-card');
    
    $backdrop.css('opacity', '0');
    $card.css({
      transition: 'all 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05)',
      transform: 'scale(0.8) translateY(-20px)',
      opacity: '0'
    });
    
    setTimeout(() => {
      $modal.addClass('hidden');
      ModalUtils.unlockScroll();
    }, 300);
  },

  changeImage: function(src) {
    $('#modalMainImage').attr('src', src);
  }
};

// Auto-inject when DOM is ready
$(document).ready(function() {
  ProductModal.inject();
});
