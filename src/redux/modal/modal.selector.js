import { createSelector } from 'reselect';

const selectCartModal = state => state.cartModal;

export const selectCartModalIsOpen = createSelector(
  [selectCartModal],
  (cartModal) => cartModal.cartModalIsOpen
);