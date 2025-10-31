const EmptyCartModal = {
  getHTML: function() {
    return `
    <div id="emptyCartModal" class="hidden fixed inset-0 z-[60] flex items-center justify-center">
      <div class="empty-cart-backdrop absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0"></div>

      <div class="empty-cart-card relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 z-10 overflow-hidden transform transition-all duration-300">
        <button id="closeEmptyCartModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="p-8 text-center">
          <div class="mb-6">
            <div class="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-3">Your Cart is Empty</h3>
          <p class="text-gray-600 mb-6">Add some products to your cart before checking out!</p>

          <div class="flex flex-col gap-3">
            <button id="startShoppingBtn" class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/30">
              Start Shopping
            </button>
            <button id="dismissEmptyCartModal" class="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
  }
};

function insertEmptyCartModal() {
  if (!$('#emptyCartModal').length) {
    $('body').append(EmptyCartModal.getHTML());
    initEmptyCartModal();
  }
}

function initEmptyCartModal() {
  $(document).on('click', '#closeEmptyCartModal, #dismissEmptyCartModal', function() {
    closeEmptyCartModal();
  });

  $(document).on('click', '#startShoppingBtn', function() {
    closeEmptyCartModal();
    setTimeout(() => {
      window.location.href = 'products.php';
    }, 300);
  });

  $(document).on('click', '#emptyCartModal', function(e) {
    if ($(e.target).is('#emptyCartModal') || $(e.target).hasClass('empty-cart-backdrop')) {
      closeEmptyCartModal();
    }
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      const $modal = $('#emptyCartModal');
      if ($modal.length && !$modal.hasClass('hidden')) {
        closeEmptyCartModal();
      }
    }
  });
}

function showEmptyCartModal() {
  const $modal = $('#emptyCartModal');
  const $backdrop = $('.empty-cart-backdrop');
  const $card = $('.empty-cart-card');
  
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
}

function closeEmptyCartModal() {
  const $modal = $('#emptyCartModal');
  const $backdrop = $('.empty-cart-backdrop');
  const $card = $('.empty-cart-card');
  
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

$(document).ready(function() {
  insertEmptyCartModal();
});
