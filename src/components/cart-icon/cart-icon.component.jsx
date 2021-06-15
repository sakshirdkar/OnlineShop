import { React } from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden} from './../../redux/cart/cart.actions'
import { ReactComponent as ShoppingCartIcon } from './../assets/cart.svg';
import './cart-icon.styles.scss';
import { selectItemCount } from './../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    
    <div className = 'cart-option' onClick={ toggleCartHidden}>
        <ShoppingCartIcon className='cart-icon'  />
        <span className = 'item-count'> {itemCount}</span>
    </div> 

);
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({

    //Naive
    //itemCount: cartItems.map(item => item.quantity).reduce((accumulator,currentValue) => accumulator + currentValue,0),

    //Optimised
    itemCount: selectItemCount,
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);