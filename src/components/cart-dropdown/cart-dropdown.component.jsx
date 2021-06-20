import React from 'react';
import ButtonCustom from './../Button/button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems} from './../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, match,dispatch}) => (
    
    <div className='cart-dropdown'>
            
            {cartItems.length ?
             <div className='cart-items' >  
             { cartItems.map((item) => (
               <CartItem key={item.id} item={ item} />
             ))}
            </div>
            :  <span className='empty-cart'>Your cart is Empty. Please add items to shop. </span>

            }
       
      
        <ButtonCustom type='button' onClick={() => {
            dispatch(toggleCartHidden());
            return history.push(`${match.url}checkout`); 
        }
            
        }> GO TO CHECKOUT </ButtonCustom>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default  withRouter(connect(mapStateToProps) (CartDropdown));