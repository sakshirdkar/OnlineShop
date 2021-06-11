import React from 'react';
import './cart-item.styles.scss';
const CartItem = ({ item: { imageUrl, name, quantity, price } }) => (
    

    <div className='cart-item'>
            <img src={imageUrl}  alt='itemimage' className= 'image-style'/>
        <div className = 'item-details' >
        <div className='item-name '>{name}</div>
        <div className ='quantity'>
                {quantity} x Rs.{ price}
            </div>
        </div>

        </div>
);

export default CartItem;
