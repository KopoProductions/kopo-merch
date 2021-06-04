import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartContent = createSelector(
  [selectCart],
  (cart) => cart.cartContent
);

export const selectCartContentTotalQuantity = createSelector(
  [selectCartContent],
  cartContent =>
    cartContent.reduce(
      (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity, 0
    )
);

export const selectCartContentTotalPrice = createSelector(
  [selectCartContent],
  cartContent =>
    cartContent.reduce(
      (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price, 0
    )
);