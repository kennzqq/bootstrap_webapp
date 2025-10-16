$(document).ready(function() {
    // Custom validation method for full name (at least 2 words)
    $.validator.addMethod("fullname", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+\s+[a-zA-Z\s]+$/.test(value);
    }, "Please enter your full name (first and last name)");

    // Initialize form validation
    $("#contactForm").validate({
        rules: {
            fullname: {
                required: true,
                fullname: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            fullname: {
                required: "Please enter your full name",
                fullname: "Please enter your first and last name",
                minlength: "Your name must be at least 3 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            message: {
                required: "Please enter your message",
                minlength: "Your message must be at least 10 characters long"
            }
        },
        errorElement: "label",
        errorClass: "error text-red-500 text-sm mt-1",
        errorPlacement: function(error, element) {
            error.insertAfter(element);
            error.removeClass('hidden');
        },
        highlight: function(element) {
            $(element).addClass('border-2 border-red-500');
        },
        unhighlight: function(element) {
            $(element).removeClass('border-2 border-red-500');
        },
        submitHandler: function(form) {
            // Show loading state
            const $submitButton = $(form).find('button[type="submit"]');
            const originalText = $submitButton.text();
            $submitButton.prop('disabled', true).text('Sending...');

            // Prepare form data
            const formData = {
                fullname: $('#fullname').val().trim(),
                email: $('#email').val().trim(),
                message: $('#message').val().trim()
            };

            // Submit to fabform.io using AJAX
            $.ajax({
                url: $(form).attr('action'),
                method: 'POST',
                data: formData,
                dataType: 'json',
                success: function(response) {
                    // Reset form
                    form.reset();
                    
                    // Show success modal
                    $('#messageSuccessModal').removeClass('hidden');
                    
                    // Reset button
                    $submitButton.prop('disabled', false).text(originalText);
                },
                error: function(xhr, status, error) {
                    // If fabform returns success even on error (some services do)
                    if (xhr.status === 200 || xhr.status === 302) {
                        // Reset form
                        form.reset();
                        
                        // Show success modal
                        $('#messageSuccessModal').removeClass('hidden');
                        
                        // Reset button
                        $submitButton.prop('disabled', false).text(originalText);
                    } else {
                        // Show error message
                        alert('There was an error sending your message. Please try again.');
                        $submitButton.prop('disabled', false).text(originalText);
                    }
                }
            });

            return false; // Prevent default form submission
        }
    });

    // Close modal when clicking outside or on close button
    $(document).on('click', function(e) {
        if ($(e.target).is('#messageSuccessModal') || $(e.target).closest('.bg-gray-500').length) {
            $('#messageSuccessModal').addClass('hidden');
        }
    });

    // Prevent modal content clicks from closing the modal
    $('#messageSuccessModal .bg-white').on('click', function(e) {
        e.stopPropagation();
    });
});
