import { cartActionsTypes } from './cart.types';
import { addItemsToCart, removeItemToCart } from './cart.utils';

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
            };
        case cartActionsTypes.REAMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload)
            }
        case cartActionsTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default CartDropDownReducer;