$(document).ready(function () {
  // Hide any modal accidentally left open
  if ($('.modal.show').length) {
    $('.modal.show').each(function () {
      $(this).removeClass('show').css('display', 'none').attr('aria-hidden', 'true');
    });
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }

// Append modals if not in DOM
if (!$('#createAccountModal').length) {
  $('body').append(`
    <!-- Create Account Modal -->
    <div class="modal fixed inset-0 z-50 hidden" id="createAccountModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog flex items-center justify-center min-h-screen bg-black/50 transition-all duration-300">
        <div class="modal-content w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100">
          <div class="modal-header flex justify-between items-center px-6 py-4 border-b border-gray-100">
            <h5 class="modal-title font-bold text-blue-600 flex items-center text-lg">
              <i class="bi bi-person-plus-fill mr-2 text-blue-500 text-xl"></i>
              Create Account
            </h5>
            <button type="button" class="btn-close text-gray-400 hover:text-gray-600 transition" data-bs-dismiss="modal">
              <i class="bi bi-x-lg text-lg"></i>
            </button>
          </div>
          <div class="modal-body px-6 py-5">
            <form id="createAccountForm" novalidate class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" name="firstName"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter your first name">
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" name="lastName"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter your last name">
                </div>
                <div>
                  <label for="createAccountEmail" class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input type="email" id="createAccountEmail" name="email"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter your email">
                </div>
                <div>
                  <label for="contactNumber" class="block text-sm font-semibold text-gray-700 mb-1">Contact Number</label>
                  <div class="flex">
                    <span class="inline-flex items-center px-3 rounded-l-lg border border-gray-300 bg-gray-50 text-gray-500 text-sm">+63</span>
                    <input type="text" id="contactNumber" name="contactNumber"
                      class="flex-1 rounded-r-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="9123456789" maxlength="10">
                  </div>
                </div>
                <div class="md:col-span-2">
                  <label for="address" class="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                  <input type="text" id="address" name="address"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter your address">
                </div>
                <div>
                  <label for="createAccountPassword" class="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                  <input type="password" id="createAccountPassword" name="password"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Create a password">
                </div>
                <div>
                  <label for="confirmPassword" class="block text-sm font-semibold text-gray-700 mb-1">Re-enter Password</label>
                  <input type="password" id="confirmPassword" name="confirmPassword"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Re-enter your password">
                </div>
              </div>
              <div class="flex justify-center pt-4">
                <button type="submit"
                  class="w-1/2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-200 active:scale-95">
                  <i class="bi bi-person-check-fill mr-2"></i>Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Account Creation Success Modal -->
    <div class="modal fixed inset-0 z-50 hidden" id="accountSuccessModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog flex items-center justify-center min-h-screen bg-black/50 transition-all duration-300">
        <div class="modal-content w-full max-w-sm bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100">
          <div class="modal-body text-center p-8">
            <div class="mb-4">
              <i class="bi bi-check-circle-fill text-green-500 text-5xl"></i>
            </div>
            <h4 class="mb-2 font-bold text-green-600 text-lg">Account Created!</h4>
            <p class="text-gray-500 mb-6">Your account has been successfully created.</p>
            <div class="grid gap-2">
              <button type="button"
                class="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 active:scale-95"
                id="goToLogin">
                <i class="bi bi-box-arrow-in-right mr-2"></i>Go to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
}


  // Show Create Account when button clicked
  $('#signupBtn').on('click', function () {
    console.log('Sign Up button clicked');
    const modal = new bootstrap.Modal(document.getElementById('createAccountModal'));
    modal.show();
  });

  // Also open Create Account modal when triggered by login.js
  $(document).on('openCreateAccountModal', function () {
    const modal = new bootstrap.Modal(document.getElementById('createAccountModal'));
    modal.show();
  });

  // Validation setup
  $(document).on('shown.bs.modal', '#createAccountModal', function () {
    if (!$.fn.validate) return;

    if (!$.validator.methods.lettersonly) {
      $.validator.addMethod("lettersonly", function (value, el) {
        return this.optional(el) || /^[a-zA-Z\s]+$/.test(value);
      });
    }
    if (!$.validator.methods.pwcheck) {
      $.validator.addMethod("pwcheck", function (value) {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
      });
    }

    $("#createAccountForm").validate({
      rules: {
        firstName: { required: true, lettersonly: true },
        lastName: { required: true, lettersonly: true },
        email: { required: true, email: true },
        address: { required: true },
        contactNumber: { required: true, digits: true, minlength: 10, maxlength: 10 },
        password: { required: true, minlength: 8, pwcheck: true },
        confirmPassword: { required: true, equalTo: "#createAccountPassword" }
      },
      messages: {
        firstName: { required: "Enter your first name", lettersonly: "Letters only" },
        lastName: { required: "Enter your last name", lettersonly: "Letters only" },
        email: { required: "Enter your email", email: "Enter a valid email" },
        address: { required: "Enter your address" },
        contactNumber: {
          required: "Enter your contact number",
          digits: "Numbers only",
          minlength: "Must be 10 digits",
          maxlength: "Must be 10 digits"
        },
        password: {
          required: "Create a password",
          minlength: "At least 8 characters",
          pwcheck: "Must contain letters and numbers"
        },
        confirmPassword: {
          required: "Re-enter your password",
          equalTo: "Passwords do not match"
        }
      },
      errorElement: "div",
      errorPlacement: (error, element) =>
        error.addClass("text-red-500 text-sm mt-1").insertAfter(element.closest('.input-group').length ? element.closest('.input-group') : element),
      highlight: el => $(el).addClass("border-red-500"),
      unhighlight: el => $(el).removeClass("border-red-500"),
      submitHandler: function (form) {
        const createModal = bootstrap.Modal.getInstance(document.getElementById('createAccountModal'));
        createModal.hide();

        setTimeout(() => {
          const successModal = new bootstrap.Modal(document.getElementById('accountSuccessModal'));
          successModal.show();
        }, 400);

        form.reset();
      }
    });
  });

  // Reset form and validation
  $(document).on('hidden.bs.modal', '#createAccountModal', function () {
    const form = $('#createAccountForm');
    form[0].reset();
    if (form.data('validator')) form.validate().resetForm();
    form.find('.border-red-500').removeClass('border-red-500');
  });

  // Go to login from success modal
  $(document).on('click', '#goToLogin', function () {
    const successModal = bootstrap.Modal.getInstance(document.getElementById('accountSuccessModal'));
    successModal.hide();

    setTimeout(() => {
      const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
    }, 400);
  });
});
