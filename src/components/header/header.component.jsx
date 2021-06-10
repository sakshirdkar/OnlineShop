import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from './../assets/icons8-scroll.svg'
import { auth} from '../../firebase/firebase.util'
const Header = ({ currentUser}) => (

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
        </div>
        
    </div>
);

const mapStateToProps = (state) => (
    {
        currentUser: state.user.currentUser
    }
);


export default connect (mapStateToProps)(Header);

