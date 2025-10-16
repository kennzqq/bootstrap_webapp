/**
 * Login Modal
 * Handles user authentication and account creation
 */

$(document).ready(function () {
  if (!$('#loginModal').length) {
    $('body').append(`
      <div class="hidden fixed inset-0 z-50" id="loginModal">
        <div class="flex items-center justify-center min-h-screen bg-black/50 backdrop-blur-sm p-4">
          <div class="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h5 class="font-bold text-blue-600 flex items-center text-lg">
                <i class="bi bi-person-circle mr-2 text-blue-500 text-xl"></i>Login
              </h5>
              <button type="button" class="closeLoginModal text-gray-400 hover:text-gray-600 transition">
                <i class="bi bi-x-lg text-lg"></i>
              </button>
            </div>
            <div class="px-6 py-5">
              <form id="loginForm" novalidate class="space-y-4">
                <div>
                  <label for="loginEmail" class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input type="email" id="loginEmail" name="email" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Enter your email">
                </div>
                <div>
                  <label for="loginPassword" class="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                  <input type="password" id="loginPassword" name="password" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Enter your password">
                </div>
                <div class="text-right">
                  <a href="#" class="text-sm text-blue-600 hover:underline hover:text-blue-500 transition">Forgot password?</a>
                </div>
                <div class="flex justify-center">
                  <button type="submit" class="w-1/2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-200 active:scale-95"><i class="bi bi-box-arrow-in-right mr-2"></i>Login</button>
                </div>
              </form>
              <div class="text-center mt-5">
                <span class="text-gray-500 text-sm">Don't have an account?</span>
                <a href="#" class="text-blue-600 font-semibold hover:underline ml-1 transition" id="openCreateAccount">Create Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden fixed inset-0 z-50" id="loginSuccessModal">
        <div class="flex items-center justify-center min-h-screen bg-black/50 backdrop-blur-sm p-4">
          <div class="w-full max-w-sm bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div class="text-center p-8">
              <div class="mb-4"><i class="bi bi-check-circle-fill text-green-500 text-5xl"></i></div>
              <h4 class="mb-2 font-bold text-green-600 text-lg">Login Successful!</h4>
              <p class="text-gray-500 mb-6">Welcome back! You've successfully logged in.</p>
              <div class="grid gap-2">
                <button type="button" class="closeSuccessModal bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 active:scale-95"><i class="bi bi-check2 mr-2"></i>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  }
  
  window.openLoginModal = function() {
    $('#loginModal').removeClass('hidden');
    ModalUtils.lockScroll();
    initLoginValidation();
  };
  
  function closeLoginModal() {
    $('#loginModal').addClass('hidden');
    ModalUtils.unlockScroll();
    resetLoginForm();
  }
  
  function openSuccessModal() {
    $('#loginSuccessModal').removeClass('hidden');
    ModalUtils.lockScroll();
  }
  
  function closeSuccessModal() {
    $('#loginSuccessModal').addClass('hidden');
    ModalUtils.unlockScroll();
  }
  
  function resetLoginForm() {
    const form = $('#loginForm');
    form[0].reset();
    if (form.data('validator')) form.validate().resetForm();
    form.find('.border-red-500').removeClass('border-red-500');
  }

  $('#loginBtn').on('click', openLoginModal);
  $('#signUpBtn, #signupBtn').on('click', function (e) {
    e.preventDefault();
    openCreateAccountModal();
  });
  
  $(document).on('click', '.closeLoginModal', closeLoginModal);
  $(document).on('click', '.closeSuccessModal', closeSuccessModal);
  
  $(document).on('click', '#loginModal, #loginSuccessModal', function(e) {
    if (e.target.id === 'loginModal') closeLoginModal();
    if (e.target.id === 'loginSuccessModal') closeSuccessModal();
  });
  
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      if (!$('#loginModal').hasClass('hidden')) closeLoginModal();
      if (!$('#loginSuccessModal').hasClass('hidden')) closeSuccessModal();
    }
  });
  
  $(document).on('click', '#openCreateAccount', function (e) {
    e.preventDefault();
    closeLoginModal();
    setTimeout(() => {
      $(document).trigger('openCreateAccountModal');
    }, 300);
  });

  function initLoginValidation() {
    if (!$.fn.validate) return;
    if ($('#loginForm').data('validator')) return;
    
    $('#loginForm').validate({
      rules: {
        email: { required: true, email: true },
        password: { required: true, minlength: 8 }
      },
      messages: {
        email: { required: 'Please enter your email', email: 'Enter a valid email' },
        password: { required: 'Please enter your password', minlength: 'At least 8 characters' }
      },
      errorElement: 'div',
      errorPlacement: (error, el) => error.addClass('text-red-500 text-sm mt-1').insertAfter(el),
      highlight: el => $(el).addClass('border-red-500'),
      unhighlight: el => $(el).removeClass('border-red-500'),
      submitHandler: function (form) {
        closeLoginModal();
        setTimeout(() => {
          openSuccessModal();
        }, 300);
        form.reset();
      }
    });
  }
});
