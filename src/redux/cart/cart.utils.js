export const addItemsToCart = (cartItems, newItem) => {
    let existingItem = null;
    cartItems.forEach(cartItem => {
        if (cartItem.id === newItem.id) {
            cartItem.quantity = cartItem.quantity + 1;
            existingItem = newItem;
        }
    });
    if (!existingItem) {
        newItem.quantity = 1;
        cartItems.push(newItem);
    }
    return cartItems;
}