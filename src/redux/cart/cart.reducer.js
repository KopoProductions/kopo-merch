import cartTypes from './cart.types';
import { addItemToCart, decreaseItemFromCart } from './cart.utils';

const { ADD_CART_ITEM, DECREASE_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART } = cartTypes;

const INITIAL_STATE = {
  cartContent: []
};

const cartReducer = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return ({
        ...state,
        cartContent: addItemToCart(state.cartContent, action.payload)
      });
      case REMOVE_CART_ITEM:
        return({
          ...state,
          cartContent: state.cartContent.filter(
            cartItem => cartItem.id !== action.payload.id
          )
        });
      case DECREASE_CART_ITEM:
        return ({
          ...state,
          cartContent: decreaseItemFromCart(state.cartContent, action.payload)
        })
    default:
      return state;
  }
}

export default cartReducer;