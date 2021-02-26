import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ItemCard from '../item-card/item-card.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ collection, path, history, match }) => {
  const { id, items, name } = collection;
  const itemsValue = Object.values(items);
  return (
    <section id={id} className='collection-preview' >
      <Link to={path} className='collection-preview__title' >{name}</Link>
      <section className='collection-preview__items' >
        {
          itemsValue.map(item => {
            const {id, name, price, url, sizes, colors, description} = item;
            return (
              <section key={id} onClick={() => history.push(`${path}/${id}/${sizes[2]}/${colors[0]}`)} >
                <ItemCard id={id} name={name} priceTag={price} imageUrl={url} description={description} />
              </section>
            )
          })
        }
      </section>
    </section>
  );
};

export default withRouter(CollectionPreview);