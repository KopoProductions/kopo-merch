import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as CartIcon} from '../../assets/images/cart-icon.svg';
import './header.styles.scss';

const Header = () => {
    return (
        <header className='header' >
            <section className='header__menu' />
            <Link to='/' >
              <Logo className='header__logo' />
            </Link>
            <CartIcon className='header__cart' />
        </header>
    );
};

export default Header;