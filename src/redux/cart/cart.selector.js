
import { createSelector } from 'reselect';

const selectCart = (state) => {
    return state.cart
};

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator , cartItem) => accumulator + cartItem.quantity * cartItem.price, 0 )
);

export const selectItemCount = createSelector(
    [selectCartItems],
    cartItems => {
        //console.log('Calculated..');
        return cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
    }

);

