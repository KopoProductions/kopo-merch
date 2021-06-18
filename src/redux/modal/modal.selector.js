import { createSelector } from 'reselect';

const selectCartModal = state => state.modal;

export const selectCartModalIsOpen = createSelector(
  [selectCartModal],
  (modal) => modal.cartModalIsOpen
);

export const selectMenuModalIsOpen = createSelector(
  [selectCartModal],
  (modal) => modal.menuModalIsOpen
);