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

  <!-- NAVBAR -->
  <nav>
    <header
      class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg transition-all duration-300">
      <div class="px-4">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0">
            <a href="index.php" class="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" class="h-7 w-7 text-blue-600 animate-pulse">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7.86 2h8.28l5.86 5.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z" />
              </svg>
              <span class="text-lg font-semibold text-gray-900">Octagon</span>
            </a>
          </div>

          <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="index.php">Home</a>
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="products.php">Products</a>
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="about.php">About</a>
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="contact.php">Contact</a>
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="cart.php">🛒 Cart</a>
          </div>

          <div class="flex items-center justify-end gap-3">
            <button id="signupBtn" type="button"
              class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 sm:inline-flex">
              Sign up
            </button>

            <button id="loginBtn" type="button"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  </nav>

  <section class="py-5" style="margin-top: 56px;">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h2 class="mb-0">Shopping Cart</h2>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div class="row g-4" id="cart-products">
      </div>
    </div>
  </section>

  <div class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header text-dark">
          <h5 class="modal-title" id="checkoutModalLabel">
            <i class="bi bi-cart-check me-2"></i>Checkout
          </h5>
          <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column align-items-center p-4">
          <div class="position-relative mb-4 rounded-3 overflow-hidden shadow-sm" style="width: 100%; max-width: 300px;">
            <img id="checkoutModalImg" src="" alt="Product" class="img-fluid w-100" style="aspect-ratio:3/2;object-fit:cover;">
          </div>
          <h4 id="checkoutModalName" class="fw-bold mb-2"></h4>
          <p id="checkoutModalPrice" class="mb-4"></p>
          <div class="d-flex align-items-center mb-4 shadow-sm rounded-pill overflow-hidden border">
            <button type="button" class="btn btn-light px-3" id="checkoutModalMinus">
              <i class="bi bi-dash-lg"></i>
            </button>
            <input type="text" id="checkoutModalQty" class="form-control border-0 text-center shadow-none" value="1" style="width:80px;" readonly>
            <button type="button" class="btn btn-light px-3" id="checkoutModalPlus">
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
          <p id="checkoutModalTotalPrice" class="fw-bold text-primary mb-0">Total: $0.00</p>
        </div>
        <div class="modal-footer border-0 justify-content-center gap-2">
          <button type="button" class="btn btn-success px-4 py-2" id="checkoutModalConfirm">
            <i class="bi bi-check-circle me-2"></i>Confirm Order
          </button>
          <button type="button" class="btn btn-light px-4 py-2" data-bs-dismiss="modal">
            <i class="bi bi-x-circle me-2"></i>Cancel
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content border-0 shadow">
        <div class="modal-body text-center p-4">
          <div class="mb-3">
            <i class="bi bi-check-circle-fill text-success" style="font-size: 3rem;"></i>
          </div>
          <h4 class="mb-3 fw-bold">Order Successful!</h4>
          <p class="text-muted mb-4">Your order has been successfully placed</p>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-success px-4 py-2" data-bs-dismiss="modal">
              <i class="bi bi-check2 me-2"></i>Done
            </button>
            <a href="products.html" class="btn btn-outline-primary px-4 py-2">
              <i class="bi bi-shop me-2"></i>Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">© 2025 E-Shop. Your trusted online shopping destination.</p>
  </footer>

  <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="./js/shop.js"></script>
  <script src="./js/cart.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
  <script src="./js/login.js"></script>
  <script src="./js/createaccount.js"></script>
</body>
</html>