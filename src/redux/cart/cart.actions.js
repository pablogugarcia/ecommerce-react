import { cartActionsTypes } from './cart.types';


export const toggleCartHidden = () => ({
    type: cartActionsTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
    type: cartActionsTypes.ADD_CART_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: cartActionsTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeCartItem = item => ({
    type: cartActionsTypes.REAMOVE_CART_ITEM,
    payload: item
});
