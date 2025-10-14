
  $(document).ready(function () {
    $("#contactForm").validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        subject: {
          required: true,
          minlength: 3
        },
        message: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Your name must be at least 2 characters long"
        },
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email (e.g., name@example.com)"
        },
        subject: {
          required: "Please enter a subject",
          minlength: "Your subject must be at least 3 characters long"
        },
        message: {
          required: "Please enter your message",
          minlength: "Your message must be at least 10 characters long"
        }
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        error.addClass("text-danger mt-1 small");
        error.insertAfter(element);
      },
      highlight: function (element) {
        $(element).addClass("is-invalid");
      },
      unhighlight: function (element) {
        $(element).removeClass("is-invalid");
      },

    submitHandler: function (form) {
    // Success modal
    const modal = new bootstrap.Modal(document.getElementById('messageSuccessModal'));
    modal.show();

    // Reset the form
    form.reset();
    $(form).find(".is-invalid").removeClass("is-invalid");
    }
    });
  });
