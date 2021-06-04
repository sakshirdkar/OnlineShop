import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo} from './../assets/icons8-scroll.svg'
const Header = ({ history}) => (

    <div className='header' >
        <Link to='/'>
        <Logo className='logo'/>
        </Link>
        <div className='optionbar'>
            <span className='option' onClick={() => history.push(`/shop`)}> SHOP</span>
            <span className='option'> CONTACT</span>
        </div>
        
    </div>
);


export default withRouter(Header);

