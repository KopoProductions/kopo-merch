import React from 'react';
import { connect } from 'react-redux';
import './cart-item.styles.scss';

import { addCartItem, decreaseCartItem, removeCartItem } from '../../redux/cart/cart.actions';
import { selectCartContent } from '../../redux/cart/cart.selector';


const CartItem = ({ name, price, id, quantity, color, size, url, increaseItem, decreaseItem, removeItem, cartContent }) => {

  const item = {id, quantity, color, size, url, name, price};

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <section className='cart-item' >
      <section className='cart-item__img' style={{backgroundImage: `url(${url})`}} />
      <section className='cart-item__info-container' >
        <p className='cart-item__info-container__title' >{name}</p>
        <p className='cart-item__info-container__description' >{capitalizeFirstLetter(size)} / {capitalizeFirstLetter(color)}</p>
        <section className='cart-item__info-container__count-and-price' >
          <section className='cart-item__info-container__count-and-price__count' >
            <section className='cart-item__info-container__count-and-price__count__top' >
              <p className='cart-item__info-container__count-and-price__count__top__counter' >{cartContent.find(item => id === item.id).quantity}</p>
              <section className='cart-item__info-container__count-and-price__count__top__arrows' >
                <p className='cart-item__info-container__count-and-price__count__top__arrows__up' onClick={() => increaseItem(item)} >&lt;</p>
                <p className='cart-item__info-container__count-and-price__count__top__arrows__down' onClick={() => decreaseItem(item)} >&gt;</p>
              </section>
            </section>
            <p className='cart-item__info-container__count-and-price__count__remove' onClick={() => removeItem(item)} >Remove</p>
          </section>
          <p className='cart-item__info-container__count-and-price__x' >x</p>
          <p className='cart-item__info-container__count-and-price__price' >{price}</p>
        </section>
      </section>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cartContent: selectCartContent(state)
});

const mapDispatchToProps = (dispatch) => ({
  increaseItem: (item) => dispatch(addCartItem(item)),
  decreaseItem: (item) => dispatch(decreaseCartItem(item)),
  removeItem: (item) => dispatch(removeCartItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);