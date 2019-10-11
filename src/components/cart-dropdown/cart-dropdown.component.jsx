import React from 'react';
import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = ({ cartItems, history, dispatch }) => {


    const renderCartitems = () => {
        return cartItems.length ?
            cartItems.map(item => (<CartItem key={item.id} item={item} />))
            :
            (<span className='empty-menssage'> Tu carrito esta vacio </span>);
    }

    const goCheckoutButton = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    renderCartitems()
                }
            </div>
            <CustomButton inverted onClick={goCheckoutButton} > Ir al checkout</CustomButton>
        </div>
    );
}


/* const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
})     cambiamos este codigo para utilizar el reselect que creamos en cart Selectors  */


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));