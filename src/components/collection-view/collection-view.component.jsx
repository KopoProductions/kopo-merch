import React from 'react';
import { connect } from 'react-redux';

import { selectCollection} from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionView = ({ collection, match }) => {
  return (
    <CollectionPreview collection={collection} path={match.url} />
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionView);