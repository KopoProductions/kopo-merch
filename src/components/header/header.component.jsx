import React from 'react';
import logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {ReactComponent as CartIcon} from '../../assets/images/cart-icon.svg';
import './header.styles.scss';

import CartModal from '../../components/cart-modal/cart-modal.component';

import { openCartModal, closeCartModal } from '../../redux/modal/modal.actions';

const Header = ({ isCartModalOpen, openCartModal, closeCartModal }) => {
    return (
        <header className='header' >
            <section className='header__menu' />
            <Link to='/' >
              <img className='header__logo' src={logo} />
            </Link>
            <CartIcon onClick={openCartModal} className='header__cart' />
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

const mapStateToProps = ({ cartModal: { cartModalIsOpen } }) => ({
  isCartModalOpen: cartModalIsOpen
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);