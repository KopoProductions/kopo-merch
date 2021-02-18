import React from 'react';
import CTA from '../CTA/CTA.component';
import './instagram.styles.scss'

const Instagram = () => {
  return (
    <section className='instagram' >
      <section className='instagram__container' >
        <a href='' className='instagram__container__handler' >@KopoMerch</a>
        <h2 className='instagram__container__title' >Kopo Clothing On Instagram</h2>
        <h3 className='instagram__container__sub-title' >Get The Look From Instagram</h3>
        <section className='instagram__container__CTA-container' ><CTA instagram >Shop Instagram Looks</CTA></section>
      </section>
    </section>
  );
};

export default Instagram;