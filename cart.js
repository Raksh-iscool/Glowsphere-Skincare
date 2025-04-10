// Show/hide empty cart message
function updateEmptyCartMessage() {
    const emptyCartMessage = document.getElementById('empty-cart-message');
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';
    }
}

// Override the loadCart function to also update the empty cart message
const originalLoadCart = loadCart;
loadCart = function() {
    originalLoadCart();
    updateEmptyCartMessage();
};

// Call it once on page load
if (document.getElementById('cart-items')) {
    updateEmptyCartMessage();
}