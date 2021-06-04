import React from 'react';
import { Link } from 'react-router-dom';
import './shop-now.styles.scss';

const ShopNow = () => {
    return (
        <section className='shop-now' >
            <Link to='/shop' className='shop-now__title' >SHOP NOW</Link>
            <section className='shop-now__collections-container' >
              <Link to='/shop/tops'  className='shop-now__collections-container__collection-item' >
                <p className='shop-now__collections-container__collection-item__description' >Tops</p>
              </Link>
              <Link to='/shop/sweaters' className='shop-now__collections-container__collection-item' >
                <p className='shop-now__collections-container__collection-item__description' >Sweaters</p>
              </Link>
              <Link to='/shop/bottoms' className='shop-now__collections-container__collection-item' >
                <p className='shop-now__collections-container__collection-item__description' >Bottoms</p>
              </Link>
              <Link to='/shop/towels' className='shop-now__collections-container__collection-item' >
                <p className='shop-now__collections-container__collection-item__description' >Towels</p>
              </Link>
            </section>
        </section>
    );
};

export default ShopNow;