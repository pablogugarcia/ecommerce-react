import { cartActionsTypes } from './cart.types';


export const toggleCartHidden = () => ({
    type: cartActionsTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
    type: cartActionsTypes.ADD_CART_ITEM,
    payload: item
});
