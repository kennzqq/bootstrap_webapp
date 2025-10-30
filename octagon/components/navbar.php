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
            href="order.php">📦 Order</a>
        </div>

        <div class="flex items-center justify-end gap-3">
          <button id="signupBtn" type="button"
            class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 sm:inline-flex cursor-pointer">
            Sign up
          </button>

          <button id="loginBtn" type="button"
            class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all cursor-pointer">
            Login
          </button>

          <button id="mobileMenuBtn" type="button"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div id="mobileMenu" class="hidden md:hidden mt-4 pb-2">
        <div class="flex flex-col space-y-2">
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
            href="index.php">Home</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
            href="products.php">Products</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
            href="about.php">About</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
            href="contact.php">Contact</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
            href="order.php">📦 Order</a>
        </div>
      </div>
    </div>
  </header>
</nav>
