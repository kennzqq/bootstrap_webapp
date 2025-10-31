$(document).ready(function () {
  if (!$('#createAccountModal').length) {
    $('body').append(`
      <div class="hidden fixed inset-0 z-50" id="createAccountModal">
        <div class="create-backdrop absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0"></div>
        <div class="flex items-center justify-center min-h-screen p-4">
          <div class="create-card w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300">
            <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h5 class="font-bold text-blue-600 flex items-center text-lg">
                <i class="bi bi-person-plus-fill mr-2 text-blue-500 text-xl"></i>Create Account
              </h5>
              <button type="button" class="closeCreateAccountModal text-gray-400 hover:text-gray-600 transition">
                <i class="bi bi-x-lg text-lg"></i>
              </button>
            </div>
            <div class="px-6 py-5">
              <form id="createAccountForm" novalidate class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Enter your first name">
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Enter your last name">
                  </div>
                  <div>
                    <label for="createAccountEmail" class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input type="email" id="createAccountEmail" name="email" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Enter your email">
                  </div>
                  <div>
                    <label for="contactNumber" class="block text-sm font-semibold text-gray-700 mb-1">Contact Number</label>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 rounded-l-lg border border-gray-300 bg-gray-50 text-gray-500 text-sm">+63</span>
                      <input type="text" id="contactNumber" name="contactNumber" class="flex-1 rounded-r-lg border border-gray-300 px-3 py-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="9123456789" maxlength="10">
                    </div>
                  </div>
                  <div class="md:col-span-2">
                    <label for="address" class="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                    <input type="text" id="address" name="address" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Enter your address">
                  </div>
                  <div>
                    <label for="createAccountPassword" class="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                    <input type="password" id="createAccountPassword" name="password" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Create a password">
                  </div>
                  <div>
                    <label for="confirmPassword" class="block text-sm font-semibold text-gray-700 mb-1">Re-enter Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Re-enter your password">
                  </div>
                </div>
                <div class="flex justify-center pt-4">
                  <button type="submit" class="w-1/2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-200 active:scale-95"><i class="bi bi-person-check-fill mr-2"></i>Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden fixed inset-0 z-50" id="accountSuccessModal">
        <div class="account-success-backdrop absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0"></div>
        <div class="flex items-center justify-center min-h-screen p-4">
          <div class="account-success-card w-full max-w-sm bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300">
            <div class="text-center p-8">
              <div class="mb-4"><i class="bi bi-check-circle-fill text-green-500 text-5xl"></i></div>
              <h4 class="mb-2 font-bold text-green-600 text-lg">Account Created!</h4>
              <p class="text-gray-500 mb-6">Your account has been successfully created.</p>
              <div class="grid gap-2">
                <button type="button" id="goToLogin" class="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 active:scale-95"><i class="bi bi-box-arrow-in-right mr-2"></i>Go to Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  }
  
  window.openCreateAccountModal = function() {
    const $modal = $('#createAccountModal');
    const $backdrop = $('.create-backdrop');
    const $card = $('.create-card');
    
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
    
    initCreateAccountValidation();
  };
  
  window.closeCreateAccountModal = function() {
    const $modal = $('#createAccountModal');
    const $backdrop = $('.create-backdrop');
    const $card = $('.create-card');
    
    $backdrop.css('opacity', '0');
    $card.css({
      transition: 'all 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05)',
      transform: 'scale(0.8) translateY(-20px)',
      opacity: '0'
    });
    
    setTimeout(() => {
      $modal.addClass('hidden');
      ModalUtils.unlockScroll();
      resetCreateAccountForm();
    }, 300);
  };
  
  function openAccountSuccessModal() {
    const $modal = $('#accountSuccessModal');
    const $backdrop = $('.account-success-backdrop');
    const $card = $('.account-success-card');
    
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
  
  function closeAccountSuccessModal() {
    const $modal = $('#accountSuccessModal');
    const $backdrop = $('.account-success-backdrop');
    const $card = $('.account-success-card');
    
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
  
  function resetCreateAccountForm() {
    const form = $('#createAccountForm');
    form[0].reset();
    if (form.data('validator')) form.validate().resetForm();
    form.find('.border-red-500').removeClass('border-red-500');
  }

  $(document).on('openCreateAccountModal', openCreateAccountModal);
  $(document).on('click', '.closeCreateAccountModal', closeCreateAccountModal);
  $(document).on('click', '#goToLogin', function() {
    closeAccountSuccessModal();
    setTimeout(() => {
      if (typeof openLoginModal === 'function') openLoginModal();
    }, 300);
  });
  
  $(document).on('click', '#createAccountModal', function(e) {
    if ($(e.target).is('#createAccountModal') || $(e.target).hasClass('create-backdrop')) {
      closeCreateAccountModal();
    }
  });
  
  $(document).on('click', '#accountSuccessModal', function(e) {
    if ($(e.target).is('#accountSuccessModal') || $(e.target).hasClass('account-success-backdrop')) {
      closeAccountSuccessModal();
    }
  });
  
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      if (!$('#createAccountModal').hasClass('hidden')) closeCreateAccountModal();
      if (!$('#accountSuccessModal').hasClass('hidden')) closeAccountSuccessModal();
    }
  });

  function initCreateAccountValidation() {
    if (!$.fn.validate) return;
    if ($('#createAccountForm').data('validator')) return;
    
    $('#createAccountForm').validate({
      rules: {
        firstName: { required: true, minlength: 2 },
        lastName: { required: true, minlength: 2 },
        email: { required: true, email: true },
        contactNumber: { required: true, digits: true, minlength: 10, maxlength: 10 },
        address: { required: true, minlength: 5 },
        password: { required: true, minlength: 6 },
        confirmPassword: { required: true, equalTo: '#createAccountPassword' }
      },
      messages: {
        firstName: { required: 'Please enter first name', minlength: 'At least 2 characters' },
        lastName: { required: 'Please enter last name', minlength: 'At least 2 characters' },
        email: { required: 'Please enter email', email: 'Enter valid email' },
        contactNumber: { required: 'Please enter contact number', digits: 'Only digits', minlength: 'Must be 10 digits', maxlength: 'Must be 10 digits' },
        address: { required: 'Please enter address', minlength: 'At least 5 characters' },
        password: { required: 'Please create password', minlength: 'At least 6 characters' },
        confirmPassword: { required: 'Please confirm password', equalTo: 'Passwords do not match' }
      },
      errorElement: 'div',
      errorPlacement: (error, el) => {
        error.addClass('text-red-500 text-sm mt-1');
        // Special handling for contact number (inside flex container)
        if (el.attr('name') === 'contactNumber') {
          error.insertAfter(el.parent());
        } else {
          error.insertAfter(el);
        }
      },
      highlight: el => $(el).addClass('border-red-500'),
      unhighlight: el => $(el).removeClass('border-red-500'),
      submitHandler: function (form) {
        // Get form data
        const formData = {
          firstName: $('#firstName').val(),
          lastName: $('#lastName').val(),
          email: $('#createAccountEmail').val(),
          contactNumber: $('#contactNumber').val(),
          address: $('#address').val(),
          password: $('#createAccountPassword').val()
        };
        
        // Disable submit button
        const $submitBtn = $('#createAccountForm button[type="submit"]');
        const originalBtnText = $submitBtn.html();
        $submitBtn.prop('disabled', true).html('<i class="bi bi-hourglass-split animate-spin mr-2"></i>Creating Account...');
        
        // Send AJAX request to register user
        $.ajax({
          url: 'ajax/register.php',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(formData),
          dataType: 'json',
          success: function(response) {
            if (response.success) {
              closeCreateAccountModal();
              setTimeout(() => {
                openAccountSuccessModal();
              }, 300);
              form.reset();
            } else {
              // Show error message
              alert(response.message || 'Failed to create account. Please try again.');
              $submitBtn.prop('disabled', false).html(originalBtnText);
            }
          },
          error: function(xhr, status, error) {
            console.error('Error creating account:', error);
            alert('Error creating account. Please try again.');
            $submitBtn.prop('disabled', false).html(originalBtnText);
          }
        });
      }
    });
  }
});
