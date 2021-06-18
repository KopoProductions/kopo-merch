import modalTypes from './modal.types';

const { CART_MODAL_OPEN, CART_MODAL_CLOSE, MENU_MODAL_OPEN, MENU_MODAL_CLOSE } = modalTypes;

export const openCartModal = () => ({
  type: CART_MODAL_OPEN
});

export const closeCartModal = () => ({
  type: CART_MODAL_CLOSE
});

export const openMenuModal = () => ({
  type: MENU_MODAL_OPEN
});

export const closeMenuModal = () => ({
  type: MENU_MODAL_CLOSE
});