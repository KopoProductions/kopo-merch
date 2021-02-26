import React from 'react';
import logo from '../../assets/images/logo.png';
import {ReactComponent as Facebook} from '../../assets/images/facebook.svg';
import {ReactComponent as Instagram} from '../../assets/images/instagram.svg';
import {ReactComponent as Pinterest} from '../../assets/images/pinterest.svg';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => {
  return (
    <section className='footer' >
      <section className='footer__social-media' >
        <Link to='/' >
          <img className='footer__social-media__logo'src={logo} />
        </Link>
        <section className='footer__social-media__icons-container'>
          <Facebook className='footer__social-media__icons-container__icon' />
          <Instagram className='footer__social-media__icons-container__icon' />
          <Pinterest className='footer__social-media__icons-container__icon' />
        </section>
      </section>

      <section className='footer__links-column' >
        <h2 className='footer__links-column__title' >Menu</h2>
        <Link to='/' className='footer__links-column__link' >Blog</Link>
        <Link to='/' className='footer__links-column__link' >Contact Us</Link>
        <Link to='/' className='footer__links-column__link' >Help Center</Link>
      </section>

      <section className='footer__links-column' >
        <h2 className='footer__links-column__title' >Company</h2>
        <Link to='/' className='footer__links-column__link' >Shipping & Returns</Link>
        <Link to='/' className='footer__links-column__link' >About Us</Link>
        <Link to='/' className='footer__links-column__link' >Terms & Conditions</Link>
      </section>

      <section className='footer__links-column' >
        <h2 className='footer__links-column__title' >Links</h2>
        <Link to='/' className='footer__links-column__link' >IG Repost</Link>
        <Link to='/' className='footer__links-column__link' >Shop Instagram</Link>
        <Link to='/' className='footer__links-column__link' >Privacy Policy</Link>
      </section>
    </section>
  );
};

export default Footer;