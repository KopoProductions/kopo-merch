import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import CTA from '../CTA/CTA.component';
import './item-description.styles.scss';

import top1 from '../../assets/images/hoodieBasket.png';
import top2 from '../../assets/images/hoodieGirl.png';
import top3 from '../../assets/images/pinkTopOrange.png';
import top4 from '../../assets/images/topWall.png';
import itemPage from '../../pages/item/item.page';

const collectionsDB = [
  {
    id: 'tops',
    name: 'TOPS',
    collection: [
      {
        id: 'top1',
        name: 'Top 1',
        price: '$100',
        url: top1,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'top2',
        name: 'Top 2',
        price: '$100',
        url: top2,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'top3',
        name: 'Top 3',
        price: '$100',
        url: top3,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'top4',
        name: 'Top 4',
        price: '$100',
        url: top4,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
    ]
  }
]

const ItemDescription = ({ collection, id, color, size }) => {

  const { sizes, colors } = collectionsDB[0].collection[0]
  return (
    <section className='item-description' >
      <h2 className='item-description__title' >CrewNeck - Mango</h2>
      <p className='item-description__price' >$14.00</p>
      <p className='item-description__size-title' >Size</p>
      <section className='item-description__sizes' >
      {
        sizes.map(itemSize => {
          return (<NavLink key={itemSize} activeClassName='size-is-active' to={`/shop/${collection}/${id}/${itemSize}/${color}`} className='item-description__sizes__size-selector active' >{itemSize.toUpperCase()}</NavLink>)
        })
      }
      </section>
      <p className='item-description__color-title'>Color - White</p>
      <section className='item-description__colors' >
      {
        colors.map(itemColor => {
          return (<NavLink key={itemColor} activeClassName='color-is-active' to={`/shop/${collection}/${id}/${size}/${itemColor}`} className='item-description__colors__color-selector' >
            <section className='item-description__colors__color-selector__inner' style={{backgroundColor: `${itemColor}`}} />
          </NavLink>)
        })
      }
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