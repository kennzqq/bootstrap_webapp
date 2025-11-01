<?php
// Check if user is logged in
$isLoggedIn = isset($_SESSION['user_id']);
$userName = $isLoggedIn ? $_SESSION['first_name'] : '';
?>

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
          <?php if ($isLoggedIn): ?>
            <!-- Logged In User Profile -->
            <div class="relative">
              <button type="button" id="userMenuBtn"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 cursor-pointer">
                <img src="img/user.png" alt="User" class="w-5 h-5 rounded-full object-cover">
                <span class="hidden sm:inline"><?php echo htmlspecialchars($userName); ?></span>
                <svg class="w-4 h-4 transition-transform duration-200" id="dropdownArrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <div id="userDropdown" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 py-1 z-50">
                <a href="profile.php" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all">
                  My Profile
                </a>
                <a href="orders.php" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all">
                  My Orders
                </a>
                <hr class="my-1 border-gray-200">
                <button id="logoutBtn" class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-all">
                  Logout
                </button>
              </div>
            </div>
          <?php else: ?>
            <!-- Not Logged In -->
            <button id="signupBtn" type="button"
              class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 sm:inline-flex cursor-pointer">
              Sign up
            </button>

            <button id="loginBtn" type="button"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all cursor-pointer">
              Login
            </button>
          <?php endif; ?>

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
          
          <?php if ($isLoggedIn): ?>
            <hr class="my-2 border-gray-200">
            <a class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="profile.php">👤 My Profile</a>
            <a class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="orders.php">📦 My Orders</a>
            <button id="mobileLogoutBtn" class="w-full text-left rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200">
              🚪 Logout
            </button>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </header>
</nav>

<script>
// User dropdown toggle
const userMenuBtn = document.getElementById('userMenuBtn');
const userDropdown = document.getElementById('userDropdown');
const dropdownArrow = document.getElementById('dropdownArrow');

if (userMenuBtn) {
  userMenuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    userDropdown.classList.toggle('hidden');
    if (dropdownArrow) dropdownArrow.classList.toggle('rotate-180');
  });

  document.addEventListener('click', function(e) {
    if (userDropdown && !userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
      userDropdown.classList.add('hidden');
      if (dropdownArrow) dropdownArrow.classList.remove('rotate-180');
    }
  });
}

// Logout functionality
async function handleLogout() {
  if (confirm('Are you sure you want to logout?')) {
    try {
      const response = await fetch('ajax/logout.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        window.location.href = 'index.php';
      } else {
        alert('Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback: just redirect
      window.location.href = 'index.php';
    }
  }
}

const logoutBtn = document.getElementById('logoutBtn');
const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');

if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
if (mobileLogoutBtn) mobileLogoutBtn.addEventListener('click', handleLogout);
</script>