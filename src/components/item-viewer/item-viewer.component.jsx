import React, { useState } from 'react';
import SwiperCore, { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/controller/controller.scss';
import './item-viewer.styles.scss';

SwiperCore.use([Thumbs]);

const ItemViewer = ({images}) => {

  const [thumbSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className='item-viewer' >

      <Swiper
        className='item-viewer__thumbs'
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        direction='vertical'
      >
        {
          images.map(item => {
            const { id, imgUrl } = item;
            return (<SwiperSlide key={`thumbnail-${id}`} className='item-viewer__thumbs__thumb' style={{backgroundImage: `url(${imgUrl})`}} ></SwiperSlide>)
          })
        }
      </Swiper>

      <Swiper
        className='item-viewer__main'
        loop
        thumbs={{ swiper: thumbSwiper }}
        spaceBetween={16}
        slidesPerView={1}
      >
        {
          images.map(item => {
            const { id, imgUrl } = item;
            return (<SwiperSlide key={id} className='item-viewer__main__slide' style={{backgroundImage: `url(${imgUrl})`}} />)
          })
        }
      </Swiper>
    </section>
  );
};

export default ItemViewer;