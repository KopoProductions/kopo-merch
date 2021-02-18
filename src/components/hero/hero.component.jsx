import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import heroSlider1 from '../../assets/images/hero-slider-1.png';
import heroSlider2 from '../../assets/images/hero-slider-2.png';
import heroSlider3 from '../../assets/images/hero-slider-3.png';
import heroSlider4 from '../../assets/images/hero-slider-4.png';

import './hero.styles.scss'
import 'swiper/swiper.scss';

SwiperCore.use([Autoplay])
const autoplayConfig = {
  delay: 3000
}

const images = [heroSlider1, heroSlider2, heroSlider3, heroSlider4]

let slides = [];
let i;
for (i=0; i < 4; i++) {
  slides.push((<SwiperSlide key={i} >
    <section className='hero' style={{backgroundImage: `url(${images[i]})`}} >
      <section className='hero__container' >
        <h2 className='hero__container__title' >Spring Collection {i + 1}</h2>
        <p className='hero__container__sub-title' >Now Avaible</p>
      </section>
    </section>
  </SwiperSlide>))
}
const Hero = () => {
    return (
        <Swiper
          grabCursor={true}
          loop
          autoplay={autoplayConfig}
        >
          {
            slides
          }
        </Swiper>
    );
};

export default Hero;