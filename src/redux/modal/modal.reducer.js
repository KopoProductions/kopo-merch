import modalTypes from './modal.types';

const { CART_MODAL_OPEN, CART_MODAL_CLOSE } = modalTypes;

const INITIAL_STATE = {
  cartModalIsOpen: false
}

const modalReducer = ( state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CART_MODAL_OPEN:
      return ({
        ...state,
        cartModalIsOpen: true
      });
    case CART_MODAL_CLOSE:
      return ({
        ...state,
        cartModalIsOpen: false
      });
    default:
      return state;
  }
}

export default modalReducer;