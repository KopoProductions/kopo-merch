import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import CTA from '../CTA/CTA.component';
import './item-description.styles.scss';

const ItemDescription = () => {
  return (
    <section className='item-description' >
      <h2 className='item-description__title' >CrewNeck - Mango</h2>
      <p className='item-description__price' >$14.00</p>
      <p className='item-description__size-title' >Size</p>
      <section className='item-description__sizes' >
        <section  className='item-description__sizes__size-selector active' >S</section>
        <section  className='item-description__sizes__size-selector' >M</section>
        <section  className='item-description__sizes__size-selector' >L</section>
      </section>
      <p className='item-description__color-title'>Color - White</p>
      <section className='item-description__colors' >
        <section className='item-description__colors__color-selector active' />
      </section>
      <section className='item-description__CTA-container' >
        <CTA addToCart >Add To Cart</CTA>
      </section>
      <Accordion className='item-description__accordion' allowMultipleExpanded allowZeroExpanded >
        <AccordionItem className='item-description__accordion__item' >
          <AccordionItemHeading aria-level={3} className='item-description__accordion__item__heading' >
            <AccordionItemButton className='item-description__accordion__item__heading__button' >Description</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='item-description__accordion__item__pannel' >
            <p>lkalalalla lasl alsf lasdflasl asl asld asl lasfdl s; ;</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className='item-description__accordion__item' >
          <AccordionItemHeading aria-level={3} className='item-description__accordion__item__heading' >
            <AccordionItemButton className='item-description__accordion__item__heading__button' >Description</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='item-description__accordion__item__pannel' >
            <p>lkalalalla lasl alsf lasdflasl asl asld asl lasfdl s; ;</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className='item-description__accordion__item' >
          <AccordionItemHeading aria-level={3} className='item-description__accordion__item__heading' >
            <AccordionItemButton className='item-description__accordion__item__heading__button' >Description</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='item-description__accordion__item__pannel' >
            <p>lkalalalla lasl alsf lasdflasl asl asld asl lasfdl s; ;</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default ItemDescription;