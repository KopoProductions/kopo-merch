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
            let key = 0;
            return (<SwiperSlide key={`thumbnail-${key}`} className='item-viewer__thumbs__thumb' style={{backgroundImage: `url(${item})`}} ></SwiperSlide>)
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
            let key = 0
            return (<SwiperSlide key={key} className='item-viewer__main__slide' style={{backgroundImage: `url(${item})`}} />)
          })
        }
      </Swiper>
    </section>
  );
};

export default ItemViewer;