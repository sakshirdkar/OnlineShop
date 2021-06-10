import {CartActionTypes} from './cart.types';

const INITIAL_STATE = {
 
     hidden:true,
     itemCount: 0
   
} 

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.SET_ITEM_COUNT: {
            return {
                ...state,
                itemCount: state.itemCount+1
            }
        }
            
        case CartActionTypes.TOGGLE_CART_HIDDEN: {
            return {
                ...state,
                hidden: !state.hidden
            }
            }
        default: return state;
    }
}

export default cartReducer;