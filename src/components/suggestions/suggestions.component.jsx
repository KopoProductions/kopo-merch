import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import ItemCard from '../item-card/item-card.component';

import top1 from '../../assets/images/hoodieBasket.png';
import top2 from '../../assets/images/hoodieGirl.png';
import top3 from '../../assets/images/pinkTopOrange.png';
import top4 from '../../assets/images/topWall.png';

import './suggestions.styles.scss';

const collectionsDB = [
  {
    id: 'top1',
    name: 'Top 1',
    price: '$100',
    url: top1
  },
  {
    id: 'top2',
    name: 'Top 2',
    price: '$100',
    url: top2
  },
  {
    id: 'top3',
    name: 'Top 3',
    price: '$100',
    url: top3
  },
  {
    id: 'top4',
    name: 'Top 4',
    price: '$100',
    url: top4
  },
]

const Suggestions = () => {
  return (
    <section className='suggestions' >
      <h2 className='suggestions__title' >YOU MAY ALSO LIKE</h2>
      <Swiper
      slidesPerView={4}
      spaceBetween={15}
      loop
      freeMode
      className='suggestions__swiper'
      >
        {
          collectionsDB.map(item => {
            const { id, name, price, url } = item
            return (
              <SwiperSlide key={id} >
                <ItemCard id={id} name={name} priceTag={price} imageUrl={url} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Suggestions;