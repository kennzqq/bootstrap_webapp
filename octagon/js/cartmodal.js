const CartModal = {
  getHTML: function() {
    return `
    <div id="cartModal" class="hidden fixed inset-0 z-50 flex items-center justify-center">
      <div class="cart-backdrop absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0"></div>

      <div class="cart-card relative bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto m-4 z-10 transform transition-all duration-300">
        <button id="closeCartModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="lg:max-w-5xl mx-auto bg-white p-4 sm:p-6">
                    <div class="grid lg:grid-cols-3 gap-6">
                        <div class="lg:col-span-2 bg-gray-100 p-6 rounded-md">
                            <h3 class="text-lg font-semibold text-slate-900">Your Cart</h3>
                            <hr class="border-gray-300 mt-4 mb-8" />
                            <div id="cartItemsContainer" class="sm:space-y-6 space-y-8"></div>
                        </div>

                        <div class="bg-gray-100 rounded-md p-6 md:sticky top-0 h-max">
                            <h3 class="text-lg font-semibold text-slate-900">Order details</h3>
                            <hr class="border-gray-300 mt-4 mb-8" />
                            <ul class="text-slate-500 font-medium mt-8 space-y-4">
                                <li class="flex flex-wrap gap-4 text-sm">Discount <span id="cartDiscount" class="ml-auto text-slate-900 font-semibold">$0.00</span></li>
                                <li class="flex flex-wrap gap-4 text-sm">Shipping <span id="cartShipping" class="ml-auto text-slate-900 font-semibold">$2.00</span></li>
                                <li class="flex flex-wrap gap-4 text-sm">Tax <span id="cartTax" class="ml-auto text-slate-900 font-semibold">$4.00</span></li>
                                <li class="flex flex-wrap gap-4 text-sm text-slate-900">Total <span id="cartTotal" class="ml-auto font-semibold">$0.00</span></li>
                            </ul>
                            <div class="mt-8 space-y-3">
                                <button type="button" id="cartCheckoutBtn" class="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer transition-colors">Checkout</button>
                                <button type="button" id="cartContinueShopping" class="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-transparent text-slate-900 border border-gray-300 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">Continue Shopping</button>
                            </div>
                            <div class="mt-6">
                                <p class="text-slate-900 text-sm font-medium mb-2">Do you have a promo code?</p>
                                <div class="flex border border-blue-600 overflow-hidden rounded-md">
                                    <input type="text" id="promoCodeInput" placeholder="Promo code"
                                        class="w-full outline-0 bg-white text-slate-600 text-sm px-4 py-2.5" />
                                    <button type='button' id="applyPromoBtn" class="flex items-center justify-center font-medium tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white cursor-pointer transition-colors">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  },

  getCartItemHTML: function(item) {
    return `
    <div class="cart-item border-b border-gray-200 pb-4 mb-4 last:border-0" data-item-id="${item.id}">
        <div class="flex items-start gap-4">
            <div class="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white p-2 rounded-md">
                <img src='${item.image}' class="w-full h-full object-contain" alt="${item.name}" />
            </div>
            
            <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-2">
                    <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900 line-clamp-2">${item.name}</h4>
                    <button class="text-red-500 hover:text-red-700 cursor-pointer transition-colors p-1 -mt-1 remove-item shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div class="flex items-center justify-between mt-3">
                    <div class="flex items-center gap-3">
                        ${item.hasSize ? `
                        <div class="relative group">
                            <button type="button"
                                class="flex items-center px-2.5 py-1.5 border border-gray-300 text-slate-900 text-xs font-medium cursor-pointer outline-0 bg-transparent rounded-md">
                                ${item.size || 'XL'}
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-gray-500 inline ml-2.5" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            <ul class="group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]">
                                <li class="py-2 px-4 hover:bg-gray-100 text-slate-900 text-xs font-medium cursor-pointer size-option" data-size="SM">SM</li>
                                <li class="py-2 px-4 hover:bg-gray-100 text-slate-900 text-xs font-medium cursor-pointer size-option" data-size="MD">MD</li>
                                <li class="py-2 px-4 hover:bg-gray-100 text-slate-900 text-xs font-medium cursor-pointer size-option" data-size="XL">XL</li>
                                <li class="py-2 px-4 hover:bg-gray-100 text-slate-900 text-xs font-medium cursor-pointer size-option" data-size="XXL">XXL</li>
                            </ul>
                        </div>
                        ` : ''}
                        <div class="flex items-center px-2.5 py-1.5 border border-gray-300 text-slate-900 text-xs rounded-md">
                            <span class="cursor-pointer decrement-qty hover:text-blue-600 transition-colors">−</span>
                            <span class="mx-3 item-quantity">${item.quantity}</span>
                            <span class="cursor-pointer increment-qty hover:text-blue-600 transition-colors">+</span>
                        </div>
                    </div>
                    <h4 class="text-sm sm:text-[15px] font-semibold text-slate-900 item-price" data-price="${item.price}">$${item.price.toFixed(2)}</h4>
                </div>
            </div>
        </div>
    </div>`;
  }
};

function insertCartModal() {
  $('body').append(CartModal.getHTML());
  initCartModal();
  console.log('CartModal inserted and initialized');
  console.log('openCartBtn exists:', $('#openCartBtn').length);
}

function initCartModal() {
  $('#openCartBtn').on('click', function() {
    console.log('Cart button clicked!'); // Debug
    
    // Open modal immediately with loading state
    const $modal = $('#cartModal');
    const $backdrop = $('.cart-backdrop');
    const $card = $('.cart-card');
    
    // Show loading indicator
    $('#cartItemsContainer').html(`
      <div class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p class="text-gray-500 mt-4">Loading cart...</p>
      </div>
    `);
    
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
    
    // Load cart items from database using AJAX
    if (typeof CartAjax !== 'undefined' && typeof CartAjax.getCartItems === 'function') {
      console.log('Loading cart items...'); // Debug
      CartAjax.getCartItems()
        .then(items => {
          console.log('Cart items loaded:', items); // Debug
          if (items && items.length > 0) {
            // Convert database format to cart modal format
            const formattedItems = items.map(item => ({
              id: item.cart_id,
              cart_id: item.cart_id,
              product_id: item.product_id,
              name: item.name,
              price: item.price,
              category: item.category,
              quantity: item.quantity,
              image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200',
              hasSize: false
            }));
            renderCartItems(formattedItems);
            updateCartTotal();
          } else {
            $('#cartItemsContainer').html(`
              <div class="text-center py-8">
                <p class="text-gray-500 text-lg">Your cart is empty</p>
                <p class="text-gray-400 text-sm mt-2">Add some products to get started!</p>
              </div>
            `);
          }
        })
        .catch(error => {
          console.error('Failed to load cart:', error);
          $('#cartItemsContainer').html(`
            <div class="text-center py-8">
              <p class="text-red-500 text-lg">Failed to load cart</p>
              <p class="text-gray-400 text-sm mt-2">Please refresh the page</p>
            </div>
          `);
        });
    } else {
      console.error('CartAjax not available');
      $('#cartItemsContainer').html(`
        <div class="text-center py-8">
          <p class="text-red-500 text-lg">Cart system unavailable</p>
          <p class="text-gray-400 text-sm mt-2">Please refresh the page</p>
        </div>
      `);
    }
  });

  $('#closeCartModal').on('click', function() {
    closeCartModal();
  });

  $('#cartModal').on('click', function(e) {
    if ($(e.target).is('#cartModal') || $(e.target).hasClass('cart-backdrop')) {
      closeCartModal();
    }
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      const $modal = $('#cartModal');
      if ($modal.length && !$modal.hasClass('hidden')) {
        closeCartModal();
      }
    }
  });

  $('#cartContinueShopping').on('click', function() {
    closeCartModal();
  });

  // Event delegation for cart item interactions
  $('#cartItemsContainer').on('click', '.increment-qty, .decrement-qty, .remove-item, .size-option', function(e) {
    const $target = $(this);

    if ($target.hasClass('increment-qty')) {
      const $item = $target.closest('.cart-item');
      const cartId = $item.data('item-id');
      const $qtySpan = $item.find('.item-quantity');
      let qty = parseInt($qtySpan.text());
      qty++;
      
      // Update database
      if (typeof CartAjax !== 'undefined') {
        CartAjax.updateCartQuantity(cartId, qty)
          .then(() => {
            $qtySpan.text(qty);
            updateItemPrice($item);
            updateCartTotal();
          })
          .catch(error => {
            console.error('Failed to update quantity:', error);
          });
      }
    }

    if ($target.hasClass('decrement-qty')) {
      const $item = $target.closest('.cart-item');
      const cartId = $item.data('item-id');
      const $qtySpan = $item.find('.item-quantity');
      let qty = parseInt($qtySpan.text());
      if (qty > 1) {
        qty--;
        
        // Update database
        if (typeof CartAjax !== 'undefined') {
          CartAjax.updateCartQuantity(cartId, qty)
            .then(() => {
              $qtySpan.text(qty);
              updateItemPrice($item);
              updateCartTotal();
            })
            .catch(error => {
              console.error('Failed to update quantity:', error);
            });
        }
      }
    }

    if ($target.hasClass('remove-item')) {
      const $item = $target.closest('.cart-item');
      const cartId = $item.data('item-id');
      
      // Remove from database
      if (typeof CartAjax !== 'undefined') {
        CartAjax.removeFromCart(cartId)
          .then(() => {
            $item.css({opacity: '0', transition: 'opacity 0.3s'});
            setTimeout(() => {
              $item.remove();
              updateCartTotal();
              checkEmptyCart();
            }, 300);
          })
          .catch(error => {
            console.error('Failed to remove item:', error);
          });
      }
    }

    if ($target.hasClass('size-option')) {
      const size = $target.data('size');
      const $button = $target.closest('.relative').find('button');
      const $svg = $button.find('svg');
      $button.html(size + ' ' + $svg.prop('outerHTML'));
    }
  });

  $('#applyPromoBtn').on('click', function() {
    const $input = $('#promoCodeInput');
    const code = $input.val().trim();
    
    if (code) {
      $(this).text('Applied!');
      $(this).addClass('bg-green-600').removeClass('bg-blue-600 hover:bg-blue-700');
      $input.val('');
      $input.attr('placeholder', 'Code: ' + code + ' applied!');
      
      const totalText = $('#cartTotal').text();
      const total = parseFloat(totalText.replace('$', ''));
      const discount = total * 0.1;
      $('#cartDiscount').text('-$' + discount.toFixed(2));
      updateCartTotal();
      
      setTimeout(() => {
        $(this).text('Apply');
        $(this).removeClass('bg-green-600').addClass('bg-blue-600 hover:bg-blue-700');
        $input.attr('placeholder', 'Promo code');
      }, 3000);
    } else {
      $input.addClass('border-red-500');
      $input.attr('placeholder', 'Please enter a code');
      setTimeout(() => {
        $input.removeClass('border-red-500');
        $input.attr('placeholder', 'Promo code');
      }, 2000);
    }
  });
}

function closeCartModal() {
  const $modal = $('#cartModal');
  const $backdrop = $('.cart-backdrop');
  const $card = $('.cart-card');
  
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
}

function renderCartItems(items) {
  const $container = $('#cartItemsContainer');
  if (!$container.length) return;
  
  $container.empty();
  
  if (items.length === 0) {
    $container.html(`
      <div class="text-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <p class="text-gray-500 text-lg">Your cart is empty</p>
        <button id="emptyCartContinue" class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Start Shopping
        </button>
      </div>
    `);
    
    $('#emptyCartContinue').on('click', function() {
      closeCartModal();
    });
    return;
  } else {
    items.forEach(item => {
      $container.append(CartModal.getCartItemHTML(item));
    });
  }
}

function updateItemPrice($item) {
  const price = parseFloat($item.find('.item-price').data('price'));
  const qty = parseInt($item.find('.item-quantity').text());
  const total = price * qty;
  $item.find('.item-price').text('$' + total.toFixed(2));
}

function updateCartTotal() {
  let subtotal = 0;
  $('.cart-item').each(function() {
    const price = parseFloat($(this).find('.item-price').data('price'));
    const qty = parseInt($(this).find('.item-quantity').text());
    subtotal += price * qty;
  });
  
  const shipping = parseFloat($('#cartShipping').text().replace('$', '') || 0);
  const tax = parseFloat($('#cartTax').text().replace('$', '') || 0);
  const discountText = $('#cartDiscount').text() || '$0.00';
  const discount = parseFloat(discountText.replace('-$', '').replace('$', ''));
  
  const total = subtotal + shipping + tax - discount;
  
  const $totalElement = $('#cartTotal');
  if ($totalElement.length) {
    $totalElement.text('$' + total.toFixed(2));
  }
}

function checkEmptyCart() {
  if ($('.cart-item').length === 0) {
    $('#cartItemsContainer').html(`
      <div class="text-center py-8">
        <p class="text-gray-500 text-lg">Your cart is empty</p>
        <p class="text-gray-400 text-sm mt-2">Add some products to get started!</p>
      </div>
    `);
  }
}

// Export for debugging
window.CartModalDebug = {
  testLoadCart: function() {
    console.log('=== Testing Cart Load ===');
    if (typeof CartAjax !== 'undefined' && typeof CartAjax.getCartItems === 'function') {
      CartAjax.getCartItems()
        .then(items => {
          console.log('Cart items loaded:', items);
        })
        .catch(error => {
          console.error('Failed to load cart:', error);
        });
    } else {
      console.error('CartAjax not available');
    }
  },
  openCart: function() {
    $('#openCartBtn').click();
  }
};
