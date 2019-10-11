import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';

import { clearItemFromCart, addCartItem, removeCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeCartitem, addCartItem, removeCartItem }) => {

    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'></img>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeCartItem(cartItem)}> &#10094; </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addCartItem(cartItem)}> &#10095; </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeCartitem(cartItem)}> &#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeCartitem: (item) => dispatch(clearItemFromCart(item)),
    addCartItem: item => dispatch(addCartItem(item)),
    removeCartItem: item => dispatch(removeCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
