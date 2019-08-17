import React from 'react';
import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { connect } from 'react-redux';
import { selectCartItems, selectTotalCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Producto</span>
            </div>
            <div className='header-block'>
                <span>Descripcion</span>
            </div>
            <div className='header-block'>
                <span>Cantidad</span>
            </div>
            <div className='header-block'>
                <span>Precio</span>
            </div>
            <div className='header-block'>
                <span>Remover</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
        }
        <div className='total'>
            <span>Total: {cartTotal}</span>
        </div>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectTotalCartItems
});

export default connect(mapStateToProps)(CheckoutPage);
