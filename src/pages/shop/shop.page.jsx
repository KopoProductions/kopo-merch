import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../components/collection-page/collection-page.component';
import Item from '../../pages/item/item.page';

import './shop.styles.scss';

const Shop = ({ match }) => {
  const {path} = match;
  return (
    <section >
      <Route exact path={`${path}`} component={CollectionsOverview} />
      <Route path={`${path}/:collectionId`} component={CollectionPage} />
    </section>
    
  );
};

export default Shop