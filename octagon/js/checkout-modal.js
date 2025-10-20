const CheckoutModal = {
  getHTML: function() {
    return `
    <div id="checkoutModal" class="hidden fixed inset-0 z-50 flex items-center justify-center">
      <div class="checkout-backdrop absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0"></div>

      <div class="checkout-card relative bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto m-4 z-10 transform transition-all duration-300">
        <button id="closeCheckoutModal" class="absolute top-6 right-6 text-gray-600 hover:text-gray-800 z-20 bg-white rounded-full p-2 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="sm:px-8 px-4 py-6">
          <div class="max-w-screen-xl max-lg:max-w-xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-y-12 gap-8">
              <div class="max-w-4xl w-full h-max rounded-md">
                <form id="checkoutForm">
                  <div>
                    <h2 class="text-xl text-slate-900 font-semibold mb-6">Delivery Details</h2>
                    <div class="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">First Name <span class="text-red-500">*</span></label>
                        <input type="text" name="firstName" id="checkoutFirstName" placeholder="Enter First Name" required
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">Last Name <span class="text-red-500">*</span></label>
                        <input type="text" name="lastName" id="checkoutLastName" placeholder="Enter Last Name" required
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">Email <span class="text-red-500">*</span></label>
                        <input type="email" name="email" id="checkoutEmail" placeholder="Enter Email" required
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">Phone No. <span class="text-red-500">*</span></label>
                        <input type="tel" name="phone" id="checkoutPhone" placeholder="Enter Phone No." required
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div class="lg:col-span-2">
                        <label class="text-sm text-slate-900 font-medium block mb-2">Address Line <span class="text-red-500">*</span></label>
                        <input type="text" name="address" id="checkoutAddress" placeholder="Enter Address Line" required
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">City <span class="text-red-500">*</span></label>
                        <input type="text" name="city" id="checkoutCity" placeholder="Enter City" required
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">State/Province <span class="text-red-500">*</span></label>
                        <input type="text" name="state" id="checkoutState" placeholder="Enter State" required
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">Zip Code <span class="text-red-500">*</span></label>
                        <input type="text" name="zipCode" id="checkoutZipCode" placeholder="Enter Zip Code" required
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                    </div>
                  </div>

                  <div class="mt-10">
                    <h2 class="text-xl text-slate-900 font-semibold mb-6">Payment</h2>
                    <div class="flex flex-wrap gap-y-6 gap-x-12 mt-4 mb-8">
                      <div class="flex items-center">
                        <input type="radio" name="pay-method" class="w-5 h-5 cursor-pointer" id="card" checked />
                        <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                          <img src="https://readymadeui.com/images/visa.webp" class="w-12" alt="Visa" />
                          <img src="https://readymadeui.com/images/american-express.webp" class="w-12" alt="Amex" />
                          <img src="https://readymadeui.com/images/master.webp" class="w-12" alt="Mastercard" />
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input type="radio" name="pay-method" class="w-5 h-5 cursor-pointer" id="paypal" />
                        <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                          <img src="https://readymadeui.com/images/paypal.webp" class="w-20" alt="PayPal" />
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input type="radio" name="pay-method" class="w-5 h-5 cursor-pointer" id="cod" />
                        <label for="cod" class="ml-4 text-sm font-medium text-slate-900 cursor-pointer">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                    
                    <div id="cardDetailsSection" class="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">Cardholder's Name</label>
                        <input type="text" name="cardholderName" id="cardholderName" placeholder="Enter Cardholder's Name"
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">Card Number</label>
                        <input type="text" name="cardNumber" id="cardNumber" placeholder="Enter Card Number" maxlength="19"
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">Expiry</label>
                        <input type="text" name="cardExpiry" id="cardExpiry" placeholder="MM/YY" maxlength="5"
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                      <div>
                        <label class="text-sm text-slate-900 font-medium block mb-2">CVV</label>
                        <input type="text" name="cardCVV" id="cardCVV" placeholder="Enter CVV" maxlength="4"
                          class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600 focus:border-blue-600" />
                      </div>
                    </div>
                    
                    <div class="flex gap-4 max-lg:flex-col mt-8">
                      <button type="button" id="continueShopping" class="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-200 hover:bg-gray-300 border border-gray-300 text-slate-900 max-lg:order-1 cursor-pointer transition-colors">
                        Continue Shopping
                      </button>
                      <button type="submit" id="completePurchaseBtn" class="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white cursor-pointer transition-colors">
                        Complete Purchase
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="max-lg:-order-1">
                <h2 class="text-xl text-slate-900 font-semibold mb-6">Order Summary</h2>
                <div class="relative bg-white border border-gray-300 rounded-md">
                  <div class="px-6 py-8 max-h-[600px] overflow-y-auto">
                    <div id="checkoutItemsContainer" class="space-y-4"></div>
                    
                    <hr class="border-gray-300 my-6" />
                    
                    <div>
                      <ul class="text-slate-500 font-medium space-y-4">
                        <li class="flex flex-wrap gap-4 text-sm">
                          Subtotal 
                          <span id="checkoutSubtotal" class="ml-auto font-semibold text-slate-900">$0.00</span>
                        </li>
                        <li class="flex flex-wrap gap-4 text-sm">
                          Shipping 
                          <span id="checkoutShipping" class="ml-auto font-semibold text-slate-900">$6.00</span>
                        </li>
                        <li class="flex flex-wrap gap-4 text-sm">
                          Tax 
                          <span id="checkoutTax" class="ml-auto font-semibold text-slate-900">$5.00</span>
                        </li>
                        <li class="flex flex-wrap gap-4 text-sm" id="checkoutDiscountRow" style="display: none;">
                          Discount 
                          <span id="checkoutDiscount" class="ml-auto font-semibold text-green-600">-$0.00</span>
                        </li>
                        <hr class="border-slate-300" />
                        <li class="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">
                          Total 
                          <span id="checkoutTotal" class="ml-auto">$0.00</span>
                        </li>
                      </ul>
                    </div>
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

  getCheckoutItemHTML: function(item) {
    return `
    <div class="flex gap-4 max-sm:flex-col checkout-item" data-item-id="${item.id}">
      <div class="w-24 h-24 shrink-0 bg-purple-50 p-2 rounded-md">
        <img src='${item.image}' class="w-full h-full object-contain" alt="${item.name}" />
      </div>
      <div class="w-full flex justify-between gap-4">
        <div>
          <h3 class="text-sm font-medium text-slate-900">${item.name}</h3>
          ${item.hasSize ? `<p class="text-sm font-medium text-slate-500 mt-2">${item.size || 'XL'}</p>` : ''}
          <p class="text-sm font-medium text-slate-500 mt-2">Qty: ${item.quantity}</p>
          <h6 class="text-[15px] text-slate-900 font-semibold mt-2">$${(item.price * item.quantity).toFixed(2)}</h6>
        </div>
      </div>
    </div>`;
  }
};

function insertCheckoutModal() {
  $('body').append(CheckoutModal.getHTML());
  initCheckoutModal();
}

function initCheckoutModal() {
  $(document).on('click', '#cartCheckoutBtn', function() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    if (cart.length === 0) {
      const $cartModal = $('#cartModal');
      const $cartBackdrop = $('.cart-backdrop');
      const $cartCard = $('.cart-card');
      
      if ($cartBackdrop.length && $cartCard.length) {
        $cartBackdrop.css('opacity', '0');
        $cartCard.css({
          transition: 'all 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05)',
          transform: 'scale(0.8) translateY(-20px)',
          opacity: '0'
        });
        
        setTimeout(() => {
          $cartModal.addClass('hidden');
          if (typeof showEmptyCartModal === 'function') {
            showEmptyCartModal();
          } else {
            alert('Your cart is empty!');
            ModalUtils.unlockScroll();
          }
        }, 300);
      } else {
        $cartModal.addClass('hidden');
        if (typeof showEmptyCartModal === 'function') {
          showEmptyCartModal();
        } else {
          alert('Your cart is empty!');
        }
      }
      return;
    }

    const $cartModal = $('#cartModal');
    const $cartBackdrop = $('.cart-backdrop');
    const $cartCard = $('.cart-card');
    
    if ($cartBackdrop.length && $cartCard.length) {
      $cartBackdrop.css('opacity', '0');
      $cartCard.css({
        transition: 'all 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05)',
        transform: 'scale(0.8) translateY(-20px)',
        opacity: '0'
      });
      
      setTimeout(() => {
        $cartModal.addClass('hidden');
        openCheckoutModal();
      }, 300);
    } else {
      $cartModal.addClass('hidden');
      openCheckoutModal();
    }
    
    function openCheckoutModal() {
      const $modal = $('#checkoutModal');
      const $backdrop = $('.checkout-backdrop');
      const $card = $('.checkout-card');
      
      $card.css({
        transform: 'scale(0.8) translateY(-20px)',
        opacity: '0'
      });
      
      $modal.removeClass('hidden');
      
      requestAnimationFrame(() => {
        $backdrop.css('opacity', '1');
        $card.css({
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: 'scale(1) translateY(0)',
          opacity: '1'
        });
      });
      
      renderCheckoutItems(cart);
      calculateCheckoutTotals();
    }
  });

  $(document).on('click', '#closeCheckoutModal', function() {
    closeCheckoutModal();
  });

  $(document).on('click', '#checkoutModal', function(e) {
    if ($(e.target).is('#checkoutModal') || $(e.target).hasClass('checkout-backdrop')) {
      closeCheckoutModal();
    }
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      const $modal = $('#checkoutModal');
      if ($modal.length && !$modal.hasClass('hidden')) {
        closeCheckoutModal();
      }
    }
  });

  $(document).on('click', '#continueShopping', function() {
    closeCheckoutModal();
  });

  $(document).on('change', 'input[name="pay-method"]', function() {
    if ($('#card').is(':checked')) {
      $('#cardDetailsSection').slideDown(300);
      $('#cardholderName, #cardNumber, #cardExpiry, #cardCVV').prop('required', true);
    } else {
      $('#cardDetailsSection').slideUp(300);
      $('#cardholderName, #cardNumber, #cardExpiry, #cardCVV').prop('required', false);
    }
  });

  $(document).on('input', '#cardNumber', function() {
    let value = $(this).val().replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    $(this).val(formattedValue);
  });

  $(document).on('input', '#cardExpiry', function() {
    let value = $(this).val().replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    $(this).val(value);
  });

  $(document).on('input', '#cardCVV', function() {
    $(this).val($(this).val().replace(/\D/g, ''));
  });

  $(document).on('input', '#checkoutPhone', function() {
    $(this).val($(this).val().replace(/\D/g, ''));
  });

  $(document).on('submit', '#checkoutForm', function(e) {
    e.preventDefault();
    
    const $btn = $('#completePurchaseBtn');
    const originalText = $btn.text();
    
    const formData = {
      firstName: $('#checkoutFirstName').val(),
      lastName: $('#checkoutLastName').val(),
      email: $('#checkoutEmail').val(),
      phone: $('#checkoutPhone').val(),
      address: $('#checkoutAddress').val(),
      city: $('#checkoutCity').val(),
      state: $('#checkoutState').val(),
      zipCode: $('#checkoutZipCode').val(),
      
      paymentMethod: $('input[name="pay-method"]:checked').attr('id'),
      
      cardholderName: $('#cardholderName').val(),
      cardNumber: $('#cardNumber').val(),
      cardExpiry: $('#cardExpiry').val(),
      cardCVV: $('#cardCVV').val(),
      
      cart: JSON.parse(localStorage.getItem('cart') || '[]'),
      subtotal: $('#checkoutSubtotal').text(),
      shipping: $('#checkoutShipping').text(),
      tax: $('#checkoutTax').text(),
      discount: $('#checkoutDiscount').text(),
      total: $('#checkoutTotal').text()
    };

    if ($('#card').is(':checked')) {
      if (!formData.cardholderName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCVV) {
        alert('Please fill in all card details');
        return;
      }
    }

    $btn.text('Processing...').prop('disabled', true);
    
    setTimeout(() => {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      const order = {
        id: 'ORD-' + Date.now(),
        date: new Date().toISOString(),
        ...formData
      };
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
      
      localStorage.removeItem('cart');
      
      showOrderSuccess(order.id);
      
      $('#checkoutForm')[0].reset();
      
      setTimeout(() => {
        $('#checkoutModal').addClass('hidden');
        ModalUtils.unlockScroll();
        $btn.text(originalText).prop('disabled', false);
        
        if (typeof updateCartBadge === 'function') {
          updateCartBadge();
        }
        $(window).trigger('storage');
      }, 3000);
    }, 1500);
  });
}

function closeCheckoutModal() {
  const $modal = $('#checkoutModal');
  const $backdrop = $('.checkout-backdrop');
  const $card = $('.checkout-card');
  
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

function renderCheckoutItems(items) {
  const $container = $('#checkoutItemsContainer');
  if (!$container.length) return;
  
  $container.empty();
  
  if (items.length === 0) {
    $container.html(`
      <div class="text-center py-8">
        <p class="text-gray-500">No items to checkout</p>
      </div>
    `);
  } else {
    items.forEach(item => {
      $container.append(CheckoutModal.getCheckoutItemHTML(item));
    });
  }
}

function calculateCheckoutTotals() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });
  
  const shipping = 6.00;
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  
  const cartDiscount = $('#cartDiscount').text();
  let discount = 0;
  if (cartDiscount && cartDiscount !== '$0.00') {
    discount = parseFloat(cartDiscount.replace('-$', '').replace('$', ''));
    $('#checkoutDiscountRow').show();
    $('#checkoutDiscount').text('-$' + discount.toFixed(2));
  } else {
    $('#checkoutDiscountRow').hide();
  }
  
  const total = subtotal + shipping + tax - discount;
  
  $('#checkoutSubtotal').text('$' + subtotal.toFixed(2));
  $('#checkoutShipping').text('$' + shipping.toFixed(2));
  $('#checkoutTax').text('$' + tax.toFixed(2));
  $('#checkoutTotal').text('$' + total.toFixed(2));
}

function showOrderSuccess(orderId) {
  const successHTML = `
    <div id="orderSuccessOverlay" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-lg p-8 max-w-md mx-4 text-center animate-bounce-in">
        <div class="mb-4">
          <svg class="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mb-2">Order Placed Successfully!</h3>
        <p class="text-slate-600 mb-4">Your order <span class="font-semibold text-blue-600">${orderId}</span> has been confirmed.</p>
        <p class="text-sm text-slate-500">You will receive a confirmation email shortly.</p>
      </div>
    </div>
  `;
  
  $('body').append(successHTML);
  
  setTimeout(() => {
    $('#orderSuccessOverlay').fadeOut(300, function() {
      $(this).remove();
    });
  }, 2500);
}

$(document).ready(function() {
  insertCheckoutModal();
});
