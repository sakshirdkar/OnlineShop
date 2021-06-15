import {CartActionTypes} from './cart.types';
import {addItemsToCart, clearItem} from './cart.utils';
const INITIAL_STATE = {
 
     hidden:true,
     cartItems: []
   
} 

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM: {
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
        }
            
        case CartActionTypes.TOGGLE_CART_HIDDEN: {
            return {
                ...state,
                hidden: !state.hidden
            }
            }
        default: return state;

        case CartActionTypes.CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems : clearItem(state.cartItems, action.payload)
            }
        }
    }
}

export default cartReducer;