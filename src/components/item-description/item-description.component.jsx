import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { addCartItem } from '../../redux/cart/cart.actions';

import CTA from '../CTA/CTA.component';
import './item-description.styles.scss';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ItemDescription = ({ name, price, collection, id, description, colors, color, sizes, size, imgUrl, addItemToCart }) => {

  let itemToBeAdded = {
    id: `${id}-${size}-${color}`,
    color: color,
    size: size,
    url: imgUrl,
    name,
    price
  };

  return (
    <section className='item-description' >
      <h2 className='item-description__title' >{ name }</h2>
      <p className='item-description__price' >${(price / 100).toFixed(2)}</p>
      <p className='item-description__size-title' >Size - {capitalizeFirstLetter(size)}</p>
      <section className='item-description__sizes' >
      {
        sizes.map(itemSize => {
          return (<NavLink key={itemSize} activeClassName='size-is-active' to={`/shop/${collection}/${id}/${itemSize}/${color}`} className='item-description__sizes__size-selector active' >{itemSize.toUpperCase()}</NavLink>)
        })
      }
      </section>
      <p className='item-description__color-title'>Color - {capitalizeFirstLetter(color)}</p>
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
        <CTA onClick={() => addItemToCart(itemToBeAdded)} addToCart >Add To Cart</CTA>
      </section>
      <Accordion className='item-description__accordion' allowMultipleExpanded allowZeroExpanded >
        <AccordionItem className='item-description__accordion__item' >
          <AccordionItemHeading aria-level={3} className='item-description__accordion__item__heading' >
            <AccordionItemButton className='item-description__accordion__item__heading__button' >Description</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='item-description__accordion__item__pannel' >
            <p>{description}</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className='item-description__accordion__item' >
          <AccordionItemHeading aria-level={3} className='item-description__accordion__item__heading' >
            <AccordionItemButton className='item-description__accordion__item__heading__button' >Size Chart</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='item-description__accordion__item__pannel' >
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className='item-description__accordion__item' >
          <AccordionItemHeading aria-level={3} className='item-description__accordion__item__heading' >
            <AccordionItemButton className='item-description__accordion__item__heading__button' >Shipping & Return</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='item-description__accordion__item__pannel' >
            <p>You pay, we deliver. Don't like it? Return it.</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(ItemDescription);