export const addItemsToCart = (cartItems, newItem) => {
    
    const existingItem = cartItems.find((cartItem) => (
        
        (cartItem.id === newItem.id)
    ));
    
    if (!existingItem)
        return [...cartItems, { ...newItem, quantity: 1 }];
    else {
        const newCartItems = cartItems.map((cartItem) => {
           
            if (cartItem.id === existingItem.id)
                cartItem = {...cartItem, quantity : cartItem.quantity + 1 };
            return cartItem;

        });

        
        return new Array(...newCartItems);
    } 
}

export const clearItem = (cartItems, item) =>  cartItems.filter((cartItem) => cartItem.id !== item.id )
