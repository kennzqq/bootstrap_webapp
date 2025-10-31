$(document).ready(function() {
    $.validator.addMethod("fullname", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+\s+[a-zA-Z\s]+$/.test(value);
    }, "Please enter your full name (first and last name)");

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
                    form.reset();
                    
                    openMessageSuccessModal();
                    
                    $submitButton.prop('disabled', false).text(originalText);
                },
                error: function(xhr, status, error) {
                    if (xhr.status === 200 || xhr.status === 302) {
                        form.reset();
                        
                        openMessageSuccessModal();
                        
                        $submitButton.prop('disabled', false).text(originalText);
                    } else {
                        alert('There was an error sending your message. Please try again.');
                        $submitButton.prop('disabled', false).text(originalText);
                    }
                }
            });

            return false; 
        }
    });

    function openMessageSuccessModal() {
        const $modal = $('#messageSuccessModal');
        const $backdrop = $('.message-success-backdrop');
        const $card = $('.message-success-card');
        
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

    function closeMessageSuccessModal() {
        const $modal = $('#messageSuccessModal');
        const $backdrop = $('.message-success-backdrop');
        const $card = $('.message-success-card');
        
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

    $(document).on('click', '.closeMessageSuccess', function() {
        closeMessageSuccessModal();
    });

    $(document).on('click', '#messageSuccessModal', function(e) {
        if ($(e.target).is('#messageSuccessModal') || $(e.target).hasClass('message-success-backdrop')) {
            closeMessageSuccessModal();
        }
    });

    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            const $modal = $('#messageSuccessModal');
            if ($modal.length && !$modal.hasClass('hidden')) {
                closeMessageSuccessModal();
            }
        }
    });
});
