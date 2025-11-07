// Cart AJAX handler using session-based PHP backend

// Function to update cart badge
function updateCartBadge() {
    $.ajax({
        url: 'ajax/cartcount.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                const count = response.cart_count || 0;
                $('#cartBadge').text(count);
                
                if (count === 0) {
                    $('#cartBadge').addClass('scale-0');
                } else {
                    $('#cartBadge').removeClass('scale-0');
                }
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching cart count:', error);
        }
    });
}

// Function to add item to cart via AJAX
function addToCart(product, quantity = 1) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'ajax/addcart.php',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: product.name,
                price: product.price,
                category: product.category,
                quantity: quantity
            }),
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    // Update badge
                    $('#cartBadge').text(response.cart_count || 0);
                    $('#cartBadge').removeClass('scale-0').addClass('animate-bounce');
                    setTimeout(() => $('#cartBadge').removeClass('animate-bounce'), 1000);
                    
                    // Show success notification (you can customize this)
                    showNotification('success', response.message || 'Product added to cart!');
                    
                    resolve(response);
                } else {
                    // Check if login is required
                    if (response.require_login) {
                        showNotification('error', response.message || 'Please login first');
                        // Open login modal
                        setTimeout(() => {
                            if (typeof openLoginModal === 'function') {
                                openLoginModal();
                            }
                        }, 1000);
                    } else {
                        showNotification('error', response.message || 'Failed to add to cart');
                    }
                    reject(response);
                }
            },
            error: function(xhr, status, error) {
                console.error('Error adding to cart:', error);
                showNotification('error', 'Error adding to cart. Please try again.');
                reject(error);
            }
        });
    });
}

// Function to get all cart items
function getCartItems() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'ajax/cartitems.php',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    resolve(response.items || []);
                } else {
                    console.error('Error fetching cart items:', response.message);
                    resolve([]);
                }
            },
            error: function(xhr, status, error) {
                console.error('Error fetching cart items:', error);
                reject(error);
            }
        });
    });
}

// Function to remove item from cart
function removeFromCart(cartId) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'ajax/removecart.php',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                cart_id: cartId
            }),
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    // Update badge
                    $('#cartBadge').text(response.cart_count || 0);
                    if (response.cart_count === 0) {
                        $('#cartBadge').addClass('scale-0');
                    }
                    
                    showNotification('success', response.message || 'Item removed from cart');
                    resolve(response);
                } else {
                    showNotification('error', response.message || 'Failed to remove item');
                    reject(response);
                }
            },
            error: function(xhr, status, error) {
                console.error('Error removing from cart:', error);
                showNotification('error', 'Error removing item. Please try again.');
                reject(error);
            }
        });
    });
}

// Function to update cart item quantity
function updateCartQuantity(cartId, quantity) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'ajax/updatecart.php',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                cart_id: cartId,
                quantity: quantity
            }),
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    // Update badge
                    $('#cartBadge').text(response.cart_count || 0);
                    resolve(response);
                } else {
                    showNotification('error', response.message || 'Failed to update quantity');
                    reject(response);
                }
            },
            error: function(xhr, status, error) {
                console.error('Error updating quantity:', error);
                showNotification('error', 'Error updating quantity. Please try again.');
                reject(error);
            }
        });
    });
}

// Simple notification function (you can enhance this with better UI)
function showNotification(type, message) {
    // Check if a notification container exists, if not create one
    if (!$('#notificationContainer').length) {
        $('body').append('<div id="notificationContainer" class="fixed top-20 right-4 z-[9999] space-y-2"></div>');
    }
    
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const icon = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill';
    
    const notification = $(`
        <div class="notification-item ${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 transform translate-x-full transition-transform duration-300">
            <i class="bi ${icon} text-xl"></i>
            <span class="text-sm font-medium">${message}</span>
        </div>
    `);
    
    $('#notificationContainer').append(notification);
    
    // Animate in
    setTimeout(() => {
        notification.removeClass('translate-x-full');
    }, 100);
    
    // Animate out and remove after 3 seconds
    setTimeout(() => {
        notification.addClass('translate-x-full opacity-0');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize cart on page load
$(document).ready(function() {
    // Remove any legacy localStorage cart to avoid conflicts with DB-backed cart
    try { localStorage.removeItem('cart'); } catch (e) {}
    updateCartBadge();
});

// Export functions for use in other scripts
window.CartAjax = {
    addToCart,
    getCartItems,
    removeFromCart,
    updateCartQuantity,
    updateCartBadge
};
