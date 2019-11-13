import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_b3jMoN9Y3BIKC20BtHZ5EerB00D0w7vbmm';

    const onToken = token => {
        console.log(token);
        alert('Pago exitoso');
    };

    return (
        <StripeCheckout
            label='Pagar ahora'
            name='Ecommerce React Test'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Su total a pagar es $${price}`}
            amount={priceForStripe}
            panelLabel='Pagar ahora'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;