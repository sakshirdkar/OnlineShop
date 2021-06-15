import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { ReactComponent as Logo } from './../assets/icons8-scroll.svg'
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { auth} from '../../firebase/firebase.util'

const Header = ({ currentUser, hidden}) => (

    <div className='header' >
        <Link to='/'>
        <Logo className='logo'/>
        </Link>
        <div className='optionbar'>
            <Link to='/shop' className='option' > SHOP </Link>
            <Link to='/contact' className='option'> CONTACT</Link>
            {
                currentUser ?
                <span className='option' onClick={ () => auth.signOut()}>SIGN OUT</span>
                : <Link className='option' to='/signinandsignup'> SIGN IN</Link>
            }

            <div className ='option' > <CartIcon />  </div> 
        </div>
        {
            hidden ? null  :<CartDropdown/> 
        }
       
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        currentUser:  selectCurrentUser,
        hidden: selectHidden
    }
);


export default connect (mapStateToProps)(Header);

