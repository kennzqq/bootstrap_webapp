/**
 * Order Display
 * Loads and displays order history from localStorage
 */

$(document).ready(function() {
  loadOrders();
});

function loadOrders() {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const $container = $('#ordersContainer');
  
  if (!$container.length) return;
  
  $container.empty();
  
  if (orders.length === 0) {
    $container.html(`
      <div class="text-center py-16">
        <div class="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-700 mb-3">No Orders Yet</h3>
        <p class="text-gray-500 mb-6">You haven't placed any orders. Start shopping to see your orders here!</p>
        <a href="products.php" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          Browse Products
        </a>
      </div>
    `);
    return;
  }
  
  orders.reverse().forEach((order, index) => {
    const orderDate = new Date(order.date);
    const formattedDate = orderDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const orderHTML = `
      <div class="main-box border border-gray-200 rounded-xl pt-6 mb-6 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
          <div class="data">
            <p class="font-semibold text-base leading-7 text-black">
              Order ID: <span class="text-indigo-600 font-medium">${order.id}</span>
            </p>
            <p class="font-semibold text-base leading-7 text-black mt-2">
              Order Date: <span class="text-gray-600 font-medium">${formattedDate}</span>
            </p>
            <p class="font-medium text-sm leading-7 text-gray-600 mt-2">
              Payment: <span class="text-gray-800">${getPaymentMethodLabel(order.paymentMethod)}</span>
            </p>
          </div>
          <div class="mt-4 lg:mt-0 text-right">
            <p class="font-semibold text-lg text-black">
              Total: <span class="text-indigo-600">${order.total}</span>
            </p>
          </div>
        </div>

        <div class="w-full px-3 min-[400px]:px-6" id="orderItems_${index}">
          ${renderOrderItems(order.cart)}
        </div>

        <div class="w-full border-t border-gray-200 px-6 py-4 bg-gray-50">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex flex-col sm:flex-row items-center gap-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-700">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Order Confirmed
              </span>
              <p class="text-sm text-gray-600">
                Delivery to: <span class="font-medium text-gray-800">${order.city}, ${order.state}</span>
              </p>
            </div>
            <button onclick="viewOrderDetails('${order.id}')" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-sm rounded-lg transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    `;
    
    $container.append(orderHTML);
  });
}

function renderOrderItems(cartItems) {
  if (!cartItems || cartItems.length === 0) {
    return '<p class="text-gray-500 text-center py-4">No items in this order</p>';
  }
  
  return cartItems.map(item => `
    <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full last:border-b-0">
      <div class="img-box max-lg:w-full">
        <img
          src="${item.image || 'https://via.placeholder.com/150'}"
          alt="${item.name}"
          class="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
        />
      </div>

      <div class="flex flex-row items-center w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          <div class="flex items-center">
            <div>
              <h2 class="font-semibold text-lg leading-7 text-black mb-2">${item.name}</h2>
              ${item.hasSize ? `
                <p class="font-medium text-base leading-7 text-gray-600 mb-2">
                  Size: <span class="text-gray-500">${item.size || 'N/A'}</span>
                </p>
              ` : ''}
              <p class="font-medium text-base leading-7 text-black">
                Quantity: <span class="text-gray-500">${item.quantity}</span>
              </p>
            </div>
          </div>

          <div class="flex items-center lg:justify-end">
            <div class="text-left lg:text-right">
              <p class="font-medium text-sm leading-7 text-gray-600">Unit Price</p>
              <p class="font-semibold text-lg leading-7 text-indigo-600">$${item.price.toFixed(2)}</p>
              ${item.quantity > 1 ? `
                <p class="font-medium text-sm leading-7 text-gray-600 mt-2">
                  Subtotal: <span class="text-gray-800">$${(item.price * item.quantity).toFixed(2)}</span>
                </p>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function getPaymentMethodLabel(method) {
  const labels = {
    'card': 'Credit/Debit Card',
    'paypal': 'PayPal',
    'cod': 'Cash on Delivery'
  };
  return labels[method] || 'Unknown';
}

function viewOrderDetails(orderId) {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const order = orders.find(o => o.id === orderId);
  
  if (!order) {
    alert('Order not found!');
    return;
  }
  
  // Create detailed modal
  const modalHTML = `
    <div id="orderDetailsModal" class="fixed inset-0 z-[70] flex items-center justify-center">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div class="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 z-10 max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h3 class="text-xl font-bold text-gray-900">Order Details</h3>
          <button onclick="closeOrderDetails()" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="p-6 space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-gray-600 mb-1">Order ID</p>
              <p class="font-semibold text-gray-900">${order.id}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-1">Order Date</p>
              <p class="font-semibold text-gray-900">${new Date(order.date).toLocaleString()}</p>
            </div>
          </div>
          
          <div class="border-t border-gray-200 pt-4">
            <h4 class="font-semibold text-gray-900 mb-3">Delivery Information</h4>
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div><span class="text-gray-600">Name:</span> <span class="font-medium">${order.firstName} ${order.lastName}</span></div>
              <div><span class="text-gray-600">Email:</span> <span class="font-medium">${order.email}</span></div>
              <div><span class="text-gray-600">Phone:</span> <span class="font-medium">${order.phone}</span></div>
              <div class="col-span-2"><span class="text-gray-600">Address:</span> <span class="font-medium">${order.address}, ${order.city}, ${order.state} ${order.zipCode}</span></div>
            </div>
          </div>
          
          <div class="border-t border-gray-200 pt-4">
            <h4 class="font-semibold text-gray-900 mb-3">Payment Summary</h4>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span class="text-gray-600">Subtotal:</span> <span>${order.subtotal}</span></div>
              <div class="flex justify-between"><span class="text-gray-600">Shipping:</span> <span>${order.shipping}</span></div>
              <div class="flex justify-between"><span class="text-gray-600">Tax:</span> <span>${order.tax}</span></div>
              ${order.discount && order.discount !== '$0.00' ? `<div class="flex justify-between text-green-600"><span>Discount:</span> <span>${order.discount}</span></div>` : ''}
              <div class="flex justify-between font-semibold text-base border-t border-gray-200 pt-2"><span>Total:</span> <span class="text-indigo-600">${order.total}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  $('body').append(modalHTML);
  ModalUtils.lockScroll();
}

function closeOrderDetails() {
  $('#orderDetailsModal').remove();
  ModalUtils.unlockScroll();
}

$(document).on('keydown', function(e) {
  if (e.key === 'Escape' && $('#orderDetailsModal').length) {
    closeOrderDetails();
  }
});
