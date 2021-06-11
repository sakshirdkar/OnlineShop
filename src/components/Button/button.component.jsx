import React from 'react';

import './button.styles.scss';

const ButtonCustom = ({ children, isGoogleSignIn,inverted, ...spreadProps }) => (
   <span>
        <button className={`${inverted ? 'inverted' : '' }  ${isGoogleSignIn ? 'googleSignIn' : '' } custom-button `} {...spreadProps}>
            { children}
        </button>
        </span>
);

export default ButtonCustom;