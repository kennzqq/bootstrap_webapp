class ShopCart {
    constructor() {
        this.cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    }

    addToCart(product, quantity) {
        const cartItem = {
            ...product,
            quantity: quantity
        };
        this.cartProducts.unshift(cartItem);
        this.saveCart();
    }

    removeFromCart(index) {
        this.cartProducts.splice(index, 1);
        this.saveCart();
    }

    saveCart() {
        localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    }

    getCart() {
        return this.cartProducts;
    }

    clearCart() {
        this.cartProducts = [];
        this.saveCart();
    }
}

const shopCart = new ShopCart();