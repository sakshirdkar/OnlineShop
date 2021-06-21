import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './checkout.styles.scss'
import { selectCartItems, selectTotalPrice } from './../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component'


const CheckoutPage = ({ cartItems, totalPrice}) => (
<div className='checkout-page'>
        <div className='header-columns'>
        
            <span className= 'title'>Product
            </span>
            <span className= 'title'>Description
            </span>
            <span className= 'title'>Quantity(in kgs.)
            </span>
            <span className= 'title'>Price
            </span>
            <span className= 'title'>Remove
            </span>
        </div>
        { cartItems.length ? 
            <div className='cart-item-row'>
            {cartItems.map(
                cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )} 
            </div>
            :
            <div className='empty-cart' > Your cart is empty. 
                <span><Link to= '/shop' > Shop items here.</Link></span>
            </div>
        }
        
        
        <div className='total-price'>TOTAL - Rs. {totalPrice}</div>

        <div className='test-warning' >
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 - Exp: 09/21 - CVV: 123
        </div>
        <StripeButton />
    
</div>
);

const mapStateToProps = createStructuredSelector({

    totalPrice: selectTotalPrice,
    cartItems:selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);
