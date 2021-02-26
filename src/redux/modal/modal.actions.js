import modalTypes from './modal.types';

const { CART_MODAL_OPEN, CART_MODAL_CLOSE } = modalTypes;

export const openCartModal = () => ({
  type: CART_MODAL_OPEN
})

export const closeCartModal = () => ({
  type: CART_MODAL_CLOSE
})