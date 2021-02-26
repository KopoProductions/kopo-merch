import React from 'react';
import './item-card.styles.scss';

const ItemCard = ({ id, name, priceTag, imageUrl }) => {
  return (
    <section id={id} className='item-card' >
      <img className='item-card__img' src={imageUrl} alt={name} />
      <section className='item-card__info' >
        <p className='item-card__info__name' >{name}</p>
        <p className='item-card__info__price' >{`USD${(priceTag / 100).toFixed(2)}`}</p>
      </section>
    </section>
  );
};

export default ItemCard;