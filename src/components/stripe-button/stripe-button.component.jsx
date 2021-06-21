import React from 'react';
import { createStructuredSelector } from 'reselect';
import './stripe-button.styles.scss';
import { selectTotalPrice } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

 const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
};
const StripeButton = ({ price }) => {

    const price_cents = price * 100;
    const publishableKey = 'pk_test_51J4hRPSFYIzaBkKufGrxswepl4J5aiWLg4YR4rG91uA1BoGOwZg4AjoydmzTIZBH18EiAhJMqpJGOyqkG7PxjfqQ00p9NdL9nn';

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Essential Shop'
            image='https://currencylive.com/news/wp-content/uploads/2019/10/indian-rupee-money.jpg'
            description={`Your total amount is: ${price}`}
            amount={price_cents}
            billingAddress
            shippingAdress
            panelLabel='Pay Now'
            currency='INR'
            token={onToken}
            stripeKey={publishableKey}
        />
      
    );
};

const mapStateToProps = createStructuredSelector({
    price: selectTotalPrice
});


export default connect(mapStateToProps)(StripeButton);
