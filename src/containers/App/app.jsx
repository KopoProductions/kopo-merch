import React from 'react';
import './app.styles.scss';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from '../../components/scrollToTop/scrollToTop.component';

import Header from '../../components/header/header.component';
import Subscriber from '../../components/subscriber/subscriber.component';
import Footer from '../../components/footer/footer.component';


import Homepage from '../../pages/homepage/homepage.page';
import Shop from '../../pages/shop/shop.page';
import Collections from '../../pages/collections/collections.page';
import Item from '../../pages/item/item.page';

function App() {
  return (
    <section className="App">
      <Header />
      <Switch >
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/shop/:collection' exact component={Collections} />
        <Route path='/shop/:collection/:item' exact component={Item} />
      </Switch>
      <Subscriber />
      <Footer />
    </section>
  );
}

export default App;
