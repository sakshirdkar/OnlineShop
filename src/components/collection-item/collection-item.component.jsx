import React from 'react';

import './collection-item.style.scss';
import ButtonCustom from './../Button/button.component';
import { connect } from 'react-redux';
import {addItem}  from './../../redux/cart/cart.actions';


const CollectionItem = ({item, addItem}) => {
    const {name, price ,imageUrl} = item;

    return (<div className='collection-item'>
        <div className='image' style={
            { backgroundImage: `url(${imageUrl})` }
        } />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}Rs/kg</span>
        </div>
        <ButtonCustom inverted onClick={ () => addItem(item)}> ADD TO CarT</ButtonCustom>
    </div>

);
}
    
const mapDispatchToProps = (dispatch) => (
    {
    addItem: (item) => dispatch(addItem(item))
    }
);
export default connect(null,mapDispatchToProps) (CollectionItem);