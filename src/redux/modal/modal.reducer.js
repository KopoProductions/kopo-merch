import modalTypes from './modal.types';

const { CART_MODAL_OPEN, CART_MODAL_CLOSE, MENU_MODAL_OPEN, MENU_MODAL_CLOSE } = modalTypes;

const INITIAL_STATE = {
  cartModalIsOpen: false,
  menuModalIsOpen: false
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
    case MENU_MODAL_OPEN:
      return ({
        ...state,
        menuModalIsOpen: true
      });
    case MENU_MODAL_CLOSE:
      return ({
        ...state,
        menuModalIsOpen: false
      });
    default:
      return state;
  }
}

export default modalReducer;