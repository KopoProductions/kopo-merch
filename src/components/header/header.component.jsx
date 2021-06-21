import React from 'react';
import logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartContentTotalQuantity } from '../../redux/cart/cart.selector';
import { selectCartModalIsOpen, selectMenuModalIsOpen } from '../../redux/modal/modal.selector';

import { Link } from 'react-router-dom';
import {ReactComponent as CartIcon} from '../../assets/images/cart-icon.svg';
import './header.styles.scss';

import CartModal from '../cart-modal/cart-modal.component';
import MenuModal from '../menu-modal/menu-modal.component';

import { openCartModal, openMenuModal } from '../../redux/modal/modal.actions';

const Header = ({ isCartModalOpen, openCartModal, cartTotal, isMenuModalOpen, openMenuModal }) => {
    return (
        <header className='header' >
            <section className='header__menu' onClick={openMenuModal} >
                <section className='header__menu__bar'></section>
                <section className='header__menu__bar--center'></section>
                <section className='header__menu__bar'></section>
            </section>
            <Link to='/' >
              <img className='header__logo' src={logo} alt='Kopo Logo' />
            </Link>
            <section className='header__cart' >
              <CartIcon onClick={openCartModal} />
              <span className='header__cart__count' >{cartTotal}</span>
            </section>
            {
              isMenuModalOpen ? <MenuModal /> : null
            }
            {
              isCartModalOpen ? <CartModal /> : null
            }
        </header>
    );
};

const mapDispatchToProps = (dispatch) => ({
  openCartModal: () => dispatch(openCartModal()),
  openMenuModal: () => dispatch(openMenuModal()),
});

const mapStateToProps = createStructuredSelector({
  isCartModalOpen: selectCartModalIsOpen,
  isMenuModalOpen: selectMenuModalIsOpen,
  cartTotal: selectCartContentTotalQuantity
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);