<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Octagon - Home</title>
  <link rel="icon" href="img/icon.png" type="image/x-icon" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>
<body>
  <?php
  function getCategories($jsonFile) {
    $json = file_get_contents($jsonFile);
    $products = json_decode($json, true);
    $categories = [];
    foreach ($products as $product) {
      if (!in_array($product['category'], $categories)) {
        $categories[] = $product['category'];
      }
    }
    return $categories;
  }

  $categories = getCategories('products.json');
  ?>
  
  <?php include 'components/navbar.php'; ?>

  <div class="p-4 mx-auto lg:max-w-screen-xl pt-24">
    <div class="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 class="text-slate-900 text-2xl font-bold">Featured Products</h2>
        <p class="text-slate-600 mt-1 text-sm sm:text-base">Check out the most popular and trending products.</p>
      </div>

      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
        <div class="relative flex-1 sm:flex-none">
          <input
            type="text"
            id="searchInput"
            placeholder="Search products..."
            class="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
          <i class="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>

        <div class="relative flex items-center gap-2 flex-wrap">
          <div class="relative" id="categoryDropdownContainer">
            <button type="button" id="exploreCategoryBtn"
                class="px-4 py-2 rounded-full cursor-pointer text-white text-sm tracking-wider font-medium border border-gray-800 outline-0 bg-gray-900 hover:bg-gray-700 active:bg-gray-800 transition-all duration-300 focus:outline-none flex items-center gap-2">
              Explore Categories
              <i class="bi bi-chevron-down text-xs transition-transform" id="dropdownIcon"></i>
            </button>

            <div id="categoryDropdown" class="hidden absolute top-full right-0 mt-2 w-[600px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
              <div class="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                <h3 class="text-lg font-bold text-slate-900">Browse Categories</h3>
                <button id="closeDropdown" class="text-gray-400 hover:text-gray-600 transition">
                  <i class="bi bi-x-lg text-xl"></i>
                </button>
              </div>
              
              <div class="p-4 max-h-[70vh] overflow-y-auto">
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <a href="#" class="category-item group bg-gray-50 hover:bg-gray-100 p-4 rounded-xl overflow-hidden cursor-pointer relative transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-gray-400" data-category="">
                    <div class="flex items-center gap-3">
                      <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center border-2 border-gray-300 group-hover:scale-110 transition-transform">
                        <i class="bi bi-grid-3x3-gap-fill text-xl text-gray-600"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="text-slate-900 text-sm font-bold truncate group-hover:text-gray-700 transition-colors">All Products</h4>
                        <p class="text-xs text-gray-500">View everything</p>
                      </div>
                    </div>
                  </a>

                  <?php
                  $catImages = [
                    'Phones' => 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200',
                    'Laptops' => 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200',
                    'Tablets' => 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=200',
                    'Monitors' => 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200',
                    'Cameras' => 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200',
                    'Headphones' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200',
                    'Watches' => 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200',
                    'Speakers' => 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200',
                  ];
                  
                  $catIcons = [
                    'Phones' => 'bi-phone',
                    'Laptops' => 'bi-laptop',
                    'Tablets' => 'bi-tablet',
                    'Monitors' => 'bi-display',
                    'Cameras' => 'bi-camera',
                    'Headphones' => 'bi-headphones',
                    'Watches' => 'bi-watch',
                    'Speakers' => 'bi-speaker',
                  ];
                  
                  foreach ($categories as $cat):
                    $imageUrl = isset($catImages[$cat]) ? $catImages[$cat] : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200';
                    $icon = isset($catIcons[$cat]) ? $catIcons[$cat] : 'bi-box';
                  ?>
                    <a href="#" class="category-item group bg-gray-50 hover:bg-gray-100 p-4 rounded-xl overflow-hidden cursor-pointer relative transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-gray-400" data-category="<?php echo htmlspecialchars($cat); ?>">
                      <div class="flex items-center gap-3">
                        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center border-2 border-gray-300 group-hover:scale-110 transition-transform">
                          <i class="bi <?php echo $icon; ?> text-xl text-gray-600"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                          <h4 class="text-slate-900 text-sm font-bold truncate group-hover:text-gray-700 transition-colors"><?php echo htmlspecialchars($cat); ?></h4>
                          <p class="text-xs text-gray-500">View products</p>
                        </div>
                      </div>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>
            </div>
          </div>

          <button
            id="openCartBtn"
            class="px-4 py-2 rounded-full cursor-pointer text-white text-sm tracking-wider font-medium border border-gray-800 outline-0 bg-gray-900 hover:bg-gray-700 active:bg-gray-800 transition-all duration-300 focus:outline-none flex items-center gap-2"
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
      </div>
    </div>

    <!-- Products Grid -->
    <div id="productsGrid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
    </div>

    <div id="noResults" class="hidden text-center py-12">
      <i class="bi bi-search text-6xl text-gray-300 mb-4"></i>
      <h3 class="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
      <p class="text-gray-500">Try adjusting your search or filter criteria</p>
    </div>
  </div>

  <?php include 'components/footer.php'; ?>
 
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
  <script src="./js/form-validation-utils.js"></script>
  <script src="./js/modal-utils.js"></script>
  <script src="./js/login.js"></script>
  <script src="./js/createaccount.js"></script>
  <script src="./js/cartmodal.js"></script>
  <script src="./js/empty-cart-modal.js"></script>
  <script src="./js/checkout-modal.js"></script>
  <script src="./js/product-modal.js"></script>
  <script src="./js/products-filter.js"></script>
  <script src="./js/mobile-menu.js"></script>
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
      
      updateCartBadge();
      
      $(window).on('storage', updateCartBadge);
      
      $('#cartModal').on('hidden', updateCartBadge);
    });
  </script>
</body>
</html>
