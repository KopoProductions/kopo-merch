import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selector';

import { Swiper, SwiperSlide} from 'swiper/react';
import ItemCard from '../item-card/item-card.component';

import './suggestions.styles.scss';


const Suggestions = ({ suggestions, collectionId }) => {
  const suggestionsValue = Object.values(suggestions.items);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(2)
  const listener = () => setInnerWidth(window.innerWidth)
  window.addEventListener('resize', listener)
  useEffect(() => {
    if (innerWidth < 500) {
      setSlides(2)
    } else if (innerWidth < 1400) {
      setSlides(4)
    } else {
      setSlides(6)
    }
    return function removeEventListener() {
      window.removeEventListener('resize', listener)
    }
  }, [innerWidth])

  return (
    <section className='suggestions' >
      <h2 className='suggestions__title' >YOU MAY ALSO LIKE</h2>
      <Swiper
      slidesPerView={slides}
      spaceBetween={15}
      loop
      freeMode
      className='suggestions__swiper'
      >
        {
          suggestionsValue.map(item => {
            const { id, name, price, url, sizes, colors } = item
            return (
              <SwiperSlide key={id} >
                <Link to={`/shop/${collectionId}/${id}/${sizes[2]}/${colors[0]}`} >
                  <ItemCard id={id} name={name} priceTag={price} imageUrl={url} />
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => ({
  suggestions: selectCollection(ownProps.collectionId)(state)
});

export default connect(mapStateToProps)(Suggestions);