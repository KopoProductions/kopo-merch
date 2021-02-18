import React from 'react';
import { Link } from 'react-router-dom';
import './shop-now.styles.scss';

const ShopNow = () => {
    return (
        <section className='shop-now' >
            <Link to='/shop' className='shop-now__title' >SHOP NOW</Link>
            <section className='shop-now__collections-container' >
              <section className='shop-now__collections-container__collection-item' >
                <Link to='/shop/tops' className='shop-now__collections-container__collection-item__description' >Tops</Link>
              </section>
              <section className='shop-now__collections-container__collection-item' >
                <p className='shop-now__collections-container__collection-item__description' >Sweaters</p>
              </section>
              <section className='shop-now__collections-container__collection-item' >
                <p className='shop-now__collections-container__collection-item__description' >Bottoms</p>
              </section>
              <section className='shop-now__collections-container__collection-item' >
                <p className='shop-now__collections-container__collection-item__description' >Towels</p>
              </section>
            </section>
        </section>
    );
};

export default ShopNow;