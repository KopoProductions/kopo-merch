import React from 'react';
import { connect } from 'react-redux';

import ItemViewer from '../../components/item-viewer/item-viewer.component';
import ItemDescription from '../../components/item-description/item-description.component';
import Suggestions from '../../components/suggestions/suggestions.component';

import { selectItem } from '../../redux/shop/shop.selector';

import './item.styles.scss';

const Item = ({ item, match }) => {
  const { size, color, collectionId } = match.params;
  const { colors, description, id, name, price, secondaryImages, sizes, url } = item;
  return (
    <section className='item-page' >
      <section className='item-page__item-info' >
        <ItemViewer images={secondaryImages} />
        <ItemDescription name={name} price={price} collection={collectionId} description={description} colors={colors} color={color} sizes={sizes} size={size} id={id} imgUrl={url} />
      </section>
      <Suggestions collectionId={collectionId} />
    </section>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params.collectionId, ownProps.match.params.id)(state)
})

export default connect(mapStateToProps)(Item);