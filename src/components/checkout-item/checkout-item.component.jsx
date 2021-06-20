import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem,addItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem, clearItemFromCart,addItem,removeItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;
    return <div className='checkout-item'>
        <img className='img-container' src={imageUrl} alt='item' />
        <div className='name' >{name} </div>
        <div className='quantity' >
            <div className='arrow' onClick={ () => removeItem(cartItem) }>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={ () => addItem(cartItem) }>&#10095;</div>
        </div>
        <div className='price' >{price} </div>
        <div className='remove-icon' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
};

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) =>  dispatch(addItem(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
