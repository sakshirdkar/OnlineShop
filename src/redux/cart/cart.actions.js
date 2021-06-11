
import {CartActionTypes} from './cart.types';

export const addItem = (item) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload:item
    };
};

export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
     
    };
};