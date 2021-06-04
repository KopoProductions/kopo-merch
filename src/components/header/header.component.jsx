import React from 'react';
import logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartContentTotalQuantity } from '../../redux/cart/cart.selector';
import { selectCartModalIsOpen } from '../../redux/modal/modal.selector';

import { Link } from 'react-router-dom';
import {ReactComponent as CartIcon} from '../../assets/images/cart-icon.svg';
import './header.styles.scss';

import CartModal from '../../components/cart-modal/cart-modal.component';

import { openCartModal, closeCartModal } from '../../redux/modal/modal.actions';

const Header = ({ isCartModalOpen, openCartModal, cartTotal, closeCartModal }) => {
    return (
        <header className='header' >
            <section className='header__menu' />
            <Link to='/' >
              <img className='header__logo' src={logo} alt='Kopo Logo' />
            </Link>
            <section className='header__cart' >
              <CartIcon onClick={openCartModal} />
              <span className='header__cart__count' >{cartTotal}</span>
            </section>
            
            {
              isCartModalOpen ? <CartModal /> : null
            }
        </header>
    );
};

const mapDispatchToProps = (dispatch) => ({
  openCartModal: () => dispatch(openCartModal()),
  closeCartModal: () => dispatch(closeCartModal())
})

const mapStateToProps = createStructuredSelector({
  isCartModalOpen: selectCartModalIsOpen,
  cartTotal: selectCartContentTotalQuantity
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);