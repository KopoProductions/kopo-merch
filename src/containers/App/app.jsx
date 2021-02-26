import React, { useEffect } from 'react';
import './app.styles.scss';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from '../../components/scrollToTop/scrollToTop.component';

import Header from '../../components/header/header.component';
import Subscriber from '../../components/subscriber/subscriber.component';
import Footer from '../../components/footer/footer.component';


import Homepage from '../../pages/homepage/homepage.page';
import Shop from '../../pages/shop/shop.page';
import Item from '../../pages/item/item.page';

function App() {
  // useEffect(() => addCollectionAndDocuments('collections', SHOP_DATA), []);
  return (
    <section className="App">
      <Header />
      <Switch >
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
      <Subscriber />
      <Footer />
    </section>
  );
}

export default App;
