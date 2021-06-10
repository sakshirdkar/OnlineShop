
import {CartActionTypes} from './cart.types';

export const setItemCount = () => {
    return {
        type: CartActionTypes.SET_ITEM_COUNT,
        
    };
};

export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
     
    };
};