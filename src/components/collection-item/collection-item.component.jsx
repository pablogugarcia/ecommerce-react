import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';

import { addCartItem } from '../../redux/cart/cart.actions';

import './collection-item.style.scss';

const CollectionItem = ({ item, addCartItem }) => {


    const  {name, price, imageUrl} = item;

    return (
        <div className='collection-items'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'> {name}</span>
                <span className='price'> {price}</span>
            </div>
            <CustomButton inverted onClick={() => addCartItem(item)}> Agregar al carrito </CustomButton>
        </div>

    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);