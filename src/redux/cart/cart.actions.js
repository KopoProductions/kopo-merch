import cartTypes from './cart.types';

const { ADD_CART_ITEM, DECREASE_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART } = cartTypes

export const addCartItem = (payload) => ({
  type: ADD_CART_ITEM,
  payload
})

export const decreaseCartItem = (payload) => ({
  type: DECREASE_CART_ITEM,
  payload
})

export const removeCartItem = (payload) => ({
  type: REMOVE_CART_ITEM,
  payload
})

export const clearCart = () => ({
  type: CLEAR_CART
})