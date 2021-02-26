import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections, match }) => {
  const collectionsValues = Object.values(collections);
  return (
    <section className='collections-overview' >
      {
        collectionsValues.map((collection) => {
          return (
            <CollectionPreview path={`${match.url}/${collection.routeName}`} key={collection.id} collection={collection} />
          );
        })
      }
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);