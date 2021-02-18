import React from 'react';
import { Link } from 'react-router-dom';
import './shop-now.styles.scss';

const ShopNow = () => {
    return (
        <section className='shop-now' >
            <Link to='/kopo-merch/shop' className='shop-now__title' >SHOP NOW</Link>
            <section className='shop-now__collections-container' >
              <section className='shop-now__collections-container__collection-item' >
                <Link to='/kopo-merch/shop/tops' className='shop-now__collections-container__collection-item__description' >Tops</Link>
              </section>
              <section className='shop-now__collections-container__collection-item' >
                <Link to='/kopo-merch/shop/sweaters' className='shop-now__collections-container__collection-item__description' >Sweaters</Link>
              </section>
              <section className='shop-now__collections-container__collection-item' >
                <Link to='/kopo-merch/shop/bottoms' className='shop-now__collections-container__collection-item__description' >Bottoms</Link>
              </section>
              <section className='shop-now__collections-container__collection-item' >
                <Link to='/kopo-merch/shop/towels' className='shop-now__collections-container__collection-item__description' >Towels</Link>
              </section>
            </section>
        </section>
    );
};

export default ShopNow;