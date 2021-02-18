import React from 'react';

import Hero from '../../components/hero/hero.component';
import ShopNow from '../../components/shop-now/shop-now.component';
import Instagram from '../../components/instagram/instagram.component';
import './homepage.styles.scss';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <ShopNow />
      <Instagram />
    </div>
  );
};

export default Homepage;