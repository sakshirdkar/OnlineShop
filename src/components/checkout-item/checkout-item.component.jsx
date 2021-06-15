import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
    const { name, price, imageUrl, quantity } = cartItem;
    return <div className='checkout-item'>
        <img className='img-container' src={imageUrl} alt='item' />
        <div className='name' >{name} </div>
        <div className='quantity' >{quantity} </div>
        <div className='price' >{price} </div>
        <div className='remove-icon' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
};

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart: (item) =>  dispatch(clearItemFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
