import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CTA from '../CTA/CTA.component';
import './cart-modal.styles.scss';
import CartItem from '../cart-item/cart-item.component';

import { openCartModal, closeCartModal } from '../../redux/modal/modal.actions';
import { selectCartContent, selectCartContentCount } from '../../redux/cart/cart.selector';

const CartModal = ({ closeCartModal, cartContent, totalPrice, history }) => {
  return (
    <section className='cart-modal' onClick={closeCartModal} >
      <section className='cart-modal__container' onClick={(e) => e.stopPropagation()} >
        <section className='cart-modal__container__top' >
          <h2 className='cart-modal__container__top__title' >Cart</h2>
          <p onClick={closeCartModal} className='cart-modal__container__top__X' >&#9747;</p>
        </section>
        <section className='cart-modal__container__items' >
          {
            cartContent.length ? cartContent.map(item => {
              const { id, quantity, color, size, url, name, price } = item;
              return (<CartItem name={name} price={price} key={id} id={id} quantity={quantity} color={color} size={size} url={url} />) 
            }) :
              <span className='cart-modal__container__items__empty' >Your cart is empty</span>
          }
        </section>
        <section className='cart-modal__container__bottom' >
          <section className='cart-modal__container__bottom__info' >
            <section className='cart-modal__container__bottom__info__title' >SUBTOTAL</section>
            <section className='cart-modal__container__bottom__info__total' >US${(totalPrice / 100).toFixed(2)}</section>
          </section>
          <section className='cart-modal__container__bottom__button' >
            <CTA onClick={() => {
              history.push('/chekout')
              closeCartModal()
            }} >Check Out</CTA>
          </section>
        </section>
      </section>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openCartModal: () => dispatch(openCartModal()),
  closeCartModal: () => dispatch(closeCartModal())
});

const mapStateToProps = (state) => ({
  cartContent: selectCartContent(state),
  totalPrice: selectCartContentCount(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartModal));