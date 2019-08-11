import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => (

    <div className='cart-dropdown'>
        <div className='cart-item'></div>
        <CustomButton inverted > Ir al checkout</CustomButton>
    </div>
)


export default CartDropdown;