import React from 'react';

import { Link } from 'react-router-dom';
import ItemCard from '../item-card/item-card.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ collectionId, path, collectionName, items }) => {
  return (
    <section id={collectionId} className='collection-preview' >
      <Link to={path} className='collection-preview__title' >{collectionName}</Link>
      <section className='collection-preview__items' >
        {
          items.map(item => {
            const {id, name, price, url, sizes, colors} = item;
            return (
              <Link key={id} to={`${path}/${id}/${sizes[0]}/${colors[0]}`} >
                <ItemCard id={id} name={name} priceTag={price} imageUrl={url} />
              </Link>
            )
          })
        }
      </section>
    </section>
  );
};

export default CollectionPreview;