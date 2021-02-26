import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartContent = createSelector(
  [selectCart],
  (cart) => cart.cartContent
);

export const selectCartContentCount = createSelector(
  [selectCartContent],
  cartContent =>
    cartContent.reduce(
      (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price, 0
    )
);