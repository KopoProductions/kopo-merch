import React from 'react';
import CTA from '../CTA/CTA.component';
import './subscriber.styles.scss';

const Subscriber = () => {
  return (
    <section className='subscriber' >
      <section className='subscriber__container' >
        <h2 className='subscriber__container__title' >Be The First To Get Sales</h2>
        <h3 className='subscriber__container__sub-title' >Subscribe to get 10% off from your first purchase</h3>
        <section className='subscriber__container__email-subscriber' >
          <input className='subscriber__container__email-subscriber__input' placeholder='Enter your E-mail' />
          <section className='subscriber__container__email-subscriber__CTA-container' ><CTA small ><p>&#8594;</p></CTA></section>
        </section>
      </section>
    </section>
  );
};

export default Subscriber;