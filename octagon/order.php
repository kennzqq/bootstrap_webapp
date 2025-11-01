<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Octagon - Orders</title>
  <link rel="icon" href="img/icon.png" type="image/x-icon" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <style>
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .animate-slideInLeft {
      animation: slideInLeft 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    
    #ordersContainer .main-box {
      will-change: transform, opacity;
    }
  </style>
</head>

<body class="overflow-x-hidden">

  <?php include 'components/navbar.php'; ?>

  <!-- ORDERS SECTION -->
  <section class="pt-24 pb-12">
    <div class="p-4 mx-auto lg:max-w-screen-xl">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 animate-fadeInUp">
        <div class="animate-slideInLeft">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p class="text-gray-600">View and track your order history</p>
        </div>
        <button
          id="openCartBtn"
          class="px-6 py-2.5 rounded-full cursor-pointer text-white text-sm tracking-wider font-medium border border-gray-800 outline-0 bg-gray-900 hover:bg-gray-700 active:bg-gray-800 transition-all duration-300 focus:outline-none flex items-center gap-2 w-fit animate-fadeInUp delay-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="relative">
            My Cart
            <span class="absolute -top-3 -right-5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white transition-transform duration-300" id="cartBadge">0</span>
          </span>
        </button>
      </div>

      <div id="ordersContainer" class="animate-fadeInUp delay-200">
        <div class="text-center py-16">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p class="text-gray-500 mt-4">Loading orders...</p>
        </div>
      </div>
    </div>
  </section>

  <?php include 'components/footer.php'; ?>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
    <script src="./js/formvalidation.js"></script>
    <script src="./js/modalutils.js"></script>
    <script src="./js/login.js"></script>
    <script src="./js/createaccount.js"></script>
    <script src="js/cartModal.js"></script>
    <script src="js/emptycartmodal.js"></script>
    <script src="js/checkoutmodal.js"></script>
    <script src="./js/mobilemenu.js"></script>
    <script src="js/orderdisplay.js"></script>
    <script>
      $(document).ready(function() {
        insertCartModal();
        
        // Update cart badge count
        function updateCartBadge() {
          const cart = JSON.parse(localStorage.getItem('cart') || '[]');
          const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
          $('#cartBadge').text(totalItems);
          
          if (totalItems === 0) {
            $('#cartBadge').addClass('scale-0');
          } else {
            $('#cartBadge').removeClass('scale-0').addClass('animate-bounce');
            setTimeout(() => $('#cartBadge').removeClass('animate-bounce'), 1000);
          }
        }
        
        // Initial update
        updateCartBadge();
        
        $(window).on('storage', updateCartBadge);
        
        $('#cartModal').on('hidden', updateCartBadge);
      });
    </script>
</body>
</html>