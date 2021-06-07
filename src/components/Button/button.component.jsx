import React from 'react';

import './button.styles.scss';

const ButtonCustom = ({ children, isGoogleSignIn, ...spreadProps }) => (
   <span>
        <button className={`${isGoogleSignIn ? 'googleSignIn' : '' } custom-button `} {...spreadProps}>
            { children}
        </button>
        </span>
);

export default ButtonCustom;