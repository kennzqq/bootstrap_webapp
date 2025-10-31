const FormValidationUtils = {
  nameFieldValidation: function(input) {
    $(input).off('keypress.name keydown.name').on('keypress.name keydown.name', function(e) {
      const value = $(this).val();
      
      // Block space if nothing is typed yet
      if (e.which === 32 && value.length === 0) {
        e.preventDefault();
        return false;
      }
      
      // Block consecutive spaces (only allow 1 space at a time)
      if (e.which === 32 && value.charAt(value.length - 1) === ' ') {
        e.preventDefault();
        return false;
      }
      
      if (e.type === 'keypress') {
        const char = String.fromCharCode(e.which);
        
        // First character must be a letter
        if (value.length === 0) {
          if (!/[a-zA-Z]/.test(char)) {
            e.preventDefault();
            return false;
          }
        } else {
          // After first char, only letters and spaces allowed
          if (!/[a-zA-Z\s]/.test(char)) {
            e.preventDefault();
            return false;
          }
        }
      }
    });

    $(input).off('paste.name').on('paste.name', function(e) {
      setTimeout(() => {
        let value = $(this).val();
        value = value.replace(/[^a-zA-Z\s]/g, '');
        value = value.replace(/^\s+/, '');
        // Replace multiple consecutive spaces with single space
        value = value.replace(/\s{2,}/g, ' ');
        $(this).val(value);
      }, 0);
    });
  },

  emailFieldValidation: function(input) {
    $(input).off('keypress.email keydown.email').on('keypress.email keydown.email', function(e) {
      if (e.which === 32) {
        e.preventDefault();
        return false;
      }
      
      if (e.type === 'keypress') {
        const char = String.fromCharCode(e.which);
        const allowedChars = /[a-zA-Z0-9@._\-]/;
        if (!allowedChars.test(char)) {
          e.preventDefault();
          return false;
        }
      }
    });

    $(input).off('blur.email').on('blur.email', function() {
      const value = $(this).val();
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const $input = $(this);
      const inputId = $input.attr('id') || $input.attr('name');
      
      $(`#${inputId}-email-error`).remove();
      $input.removeClass('border-red-500');
      
      if (value && !emailRegex.test(value)) {
        $input.addClass('border-red-500');
        
        const errorMsg = `<div id="${inputId}-email-error" class="text-red-500 text-sm mt-1">Please enter a valid email address (e.g., user@example.com)</div>`;
        $input.after(errorMsg);
      }
    });

    $(input).off('focus.email').on('focus.email', function() {
      const $input = $(this);
      const inputId = $input.attr('id') || $input.attr('name');
      $(`#${inputId}-email-error`).remove();
      $input.removeClass('border-red-500');
    });

    $(input).off('paste.email').on('paste.email', function(e) {
      setTimeout(() => {
        let value = $(this).val();
        value = value.replace(/\s+/g, '');
        value = value.replace(/[^a-zA-Z0-9@._\-]/g, '');
        $(this).val(value);
      }, 0);
    });
  },

  phoneFieldValidation: function(input) {
    // Block space and non-numbers, limit to 10 digits
    $(input).off('keypress.phone keydown.phone').on('keypress.phone keydown.phone', function(e) {
      if (e.which === 32) {
        e.preventDefault();
        return false;
      }
      
      if (e.type === 'keypress') {
        const char = String.fromCharCode(e.which);
        if (!/[0-9]/.test(char)) {
          e.preventDefault();
          return false;
        }
      }
    });

    $(input).off('input.phone').on('input.phone', function() {
      let value = $(this).val();
      value = value.replace(/\D/g, '');
      if (value.length > 10) {
        value = value.substring(0, 10);
      }
      $(this).val(value);
    });

    $(input).off('paste.phone').on('paste.phone', function(e) {
      setTimeout(() => {
        let value = $(this).val();
        value = value.replace(/\D/g, '');
        if (value.length > 10) {
          value = value.substring(0, 10);
        }
        $(this).val(value);
      }, 0);
    });
  },

  addressFieldValidation: function(input) {
    $(input).off('keypress.address keydown.address').on('keypress.address keydown.address', function(e) {
      const value = $(this).val();
      
      // Block space as first character
      if (e.which === 32 && value.length === 0) {
        e.preventDefault();
        return false;
      }
      
      if (e.type === 'keypress') {
        const char = String.fromCharCode(e.which);
        
        // First character must be letter or number
        if (value.length === 0 && !/[a-zA-Z0-9]/.test(char)) {
          e.preventDefault();
          return false;
        }
      }
    });

    $(input).off('paste.address').on('paste.address', function(e) {
      setTimeout(() => {
        let value = $(this).val();
        value = value.replace(/^\s+/, '');
        $(this).val(value);
      }, 0);
    });
  },

  cityStateFieldValidation: function(input) {
    $(input).off('keypress.citystate keydown.citystate').on('keypress.citystate keydown.citystate', function(e) {
      const value = $(this).val();
      
      // Block space if nothing typed yet
      if (e.which === 32 && value.length === 0) {
        e.preventDefault();
        return false;
      }
      
      // Block consecutive spaces (only allow 1 space at a time)
      if (e.which === 32 && value.charAt(value.length - 1) === ' ') {
        e.preventDefault();
        return false;
      }
      
      if (e.type === 'keypress') {
        const char = String.fromCharCode(e.which);
        
        // First char must be letter
        if (value.length === 0) {
          if (!/[a-zA-Z]/.test(char)) {
            e.preventDefault();
            return false;
          }
        } else {
          // After first, only letters and spaces
          if (!/[a-zA-Z\s]/.test(char)) {
            e.preventDefault();
            return false;
          }
        }
      }
    });

    $(input).off('paste.citystate').on('paste.citystate', function(e) {
      setTimeout(() => {
        let value = $(this).val();
        value = value.replace(/[^a-zA-Z\s]/g, '');
        value = value.replace(/^\s+/, '');
        // Replace multiple consecutive spaces with single space
        value = value.replace(/\s{2,}/g, ' ');
        $(this).val(value);
      }, 0);
    });
  },

  zipCodeFieldValidation: function(input) {
    // Numbers only, no spaces
    $(input).off('keypress.zip keydown.zip').on('keypress.zip keydown.zip', function(e) {
      if (e.which === 32) {
        e.preventDefault();
        return false;
      }
      
      if (e.type === 'keypress') {
        const char = String.fromCharCode(e.which);
        if (!/[0-9]/.test(char)) {
          e.preventDefault();
          return false;
        }
      }
    });

    $(input).off('input.zip').on('input.zip', function() {
      let value = $(this).val();
      value = value.replace(/\D/g, '');
      $(this).val(value);
    });

    $(input).off('paste.zip').on('paste.zip', function(e) {
      setTimeout(() => {
        let value = $(this).val();
        value = value.replace(/\D/g, '');
        $(this).val(value);
      }, 0);
    });
  },

  passwordFieldValidation: function(input) {
    // Block all spaces in password
    $(input).off('keydown.password keypress.password').on('keydown.password keypress.password', function(e) {
      if (e.which === 32) {
        e.preventDefault();
        return false;
      }
    });

    $(input).off('paste.password').on('paste.password', function(e) {
      setTimeout(() => {
        let value = $(this).val();
        value = value.replace(/\s+/g, '');
        $(this).val(value);
      }, 0);
    });
  },

  applyToElement: function(element) {
    const $element = $(element);
    const name = $element.attr('name');
    const type = $element.attr('type');
    const id = $element.attr('id');

    // Avoid re-applying if already applied
    if ($element.data('validation-applied')) {
      return;
    }

    if (name === 'firstName' || name === 'lastName' || name === 'fullname' || id === 'fullname' || id === 'firstName' || id === 'lastName') {
      FormValidationUtils.nameFieldValidation(element);
      $element.data('validation-applied', true);
    } else if (type === 'email' || name === 'email' || id === 'email' || id === 'createAccountEmail' || id === 'loginEmail' || name === 'userEmail' || id === 'userEmail') {
      FormValidationUtils.emailFieldValidation(element);
      $element.data('validation-applied', true);
    } else if (name === 'phone' || name === 'contactNumber' || type === 'tel' || id === 'contactNumber' || id === 'phone' || id === 'checkoutPhone') {
      FormValidationUtils.phoneFieldValidation(element);
      $element.data('validation-applied', true);
    } else if (name === 'address' || id === 'address') {
      FormValidationUtils.addressFieldValidation(element);
      $element.data('validation-applied', true);
    } else if (name === 'city' || name === 'state' || id === 'city' || id === 'state') {
      FormValidationUtils.cityStateFieldValidation(element);
      $element.data('validation-applied', true);
    } else if (name === 'zipCode' || id === 'zipCode') {
      FormValidationUtils.zipCodeFieldValidation(element);
      $element.data('validation-applied', true);
    } else if (type === 'password' || name === 'password' || name === 'confirmPassword' || id === 'createAccountPassword' || id === 'confirmPassword' || id === 'loginPassword') {
      FormValidationUtils.passwordFieldValidation(element);
      $element.data('validation-applied', true);
    }
  },

  initAllValidations: function(context) {
    const $context = context ? $(context) : $(document);
    
    // Name fields
    $context.find('input[name="firstName"], input[name="lastName"], input[name="fullname"], input#fullname, input#firstName, input#lastName').each(function() {
      if (!$(this).data('validation-applied')) {
        FormValidationUtils.nameFieldValidation(this);
        $(this).data('validation-applied', true);
      }
    });

    // Email fields
    $context.find('input[type="email"], input[name="email"], input#email, input#createAccountEmail, input#loginEmail, input[name="userEmail"], input#userEmail').each(function() {
      if (!$(this).data('validation-applied')) {
        FormValidationUtils.emailFieldValidation(this);
        $(this).data('validation-applied', true);
      }
    });

    // Phone fields
    $context.find('input[name="phone"], input[name="contactNumber"], input[type="tel"], input#contactNumber, input#phone, input#checkoutPhone').each(function() {
      if (!$(this).data('validation-applied')) {
        FormValidationUtils.phoneFieldValidation(this);
        $(this).data('validation-applied', true);
      }
    });

    // Address fields
    $context.find('input[name="address"], input#address').each(function() {
      if (!$(this).data('validation-applied')) {
        FormValidationUtils.addressFieldValidation(this);
        $(this).data('validation-applied', true);
      }
    });

    // City/State fields
    $context.find('input[name="city"], input[name="state"], input#city, input#state').each(function() {
      if (!$(this).data('validation-applied')) {
        FormValidationUtils.cityStateFieldValidation(this);
        $(this).data('validation-applied', true);
      }
    });

    // Zip code fields
    $context.find('input[name="zipCode"], input#zipCode').each(function() {
      if (!$(this).data('validation-applied')) {
        FormValidationUtils.zipCodeFieldValidation(this);
        $(this).data('validation-applied', true);
      }
    });

    // Password fields
    $context.find('input[type="password"], input[name="password"], input[name="confirmPassword"], input#createAccountPassword, input#confirmPassword, input#loginPassword').each(function() {
      if (!$(this).data('validation-applied')) {
        FormValidationUtils.passwordFieldValidation(this);
        $(this).data('validation-applied', true);
      }
    });
  }
};

// Initialize on page load
$(document).ready(function() {
  FormValidationUtils.initAllValidations();
  
  // Watch for new elements being added to the DOM (for modals)
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            // Apply to new inputs
            $(node).find('input').each(function() {
              FormValidationUtils.applyToElement(this);
            });
            if ($(node).is('input')) {
              FormValidationUtils.applyToElement(node);
            }
          }
        });
      }
    });
  });
  
  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

// Make it globally available for manual initialization
window.FormValidationUtils = FormValidationUtils;
