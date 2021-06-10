import React from 'react';
import ButtonCustom from './../Button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <ButtonCustom  type= 'button'> GO TO CHECKOUT </ButtonCustom>
    </div>
);

export default CartDropdown;