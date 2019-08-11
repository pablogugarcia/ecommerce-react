import { cartActionsTypes } from './cart.types';
import { addItemsToCart } from './cart.utils';

const initialState = {
    hidden: true,
    cartItems: []
}


const CartDropDownReducer = (state = initialState, action) => {

    switch (action.type) {
        case cartActionsTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionsTypes.ADD_CART_ITEM:
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload]
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default CartDropDownReducer;