import React from 'react';
import ButtonCustom from './../Button/button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = ({ cartItems}) => (
    
    <div className='cart-dropdown'>
        <div className='cart-items' >
        {cartItems.map((item) => (
            <CartItem id={item.id} item={ item} />
        ))}
        </div>
        <ButtonCustom  type= 'button'> GO TO CHECKOUT </ButtonCustom>
    </div>
);

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems
});

export default  connect(mapStateToProps) (CartDropdown);