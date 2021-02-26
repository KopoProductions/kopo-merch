import React from 'react';
import { Route } from 'react-router-dom';

import CollectionView from '../collection-view/collection-view.component';
import Item from '../../pages/item/item.page';


const CollectionPage = ({ match }) => {
  return (
    <section >
      <Route exact path={match.path} component={CollectionView} />
      <Route path={`${match.path}/:id/:size/:color`} component={Item} />
    </section>
  );
};

export default (CollectionPage);