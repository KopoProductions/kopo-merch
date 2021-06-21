import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import logo from '../../assets/images/logo.png';

import { closeMenuModal } from '../../redux/modal/modal.actions';

import './menu-modal.styles.scss';

const MenuModal = ({ closeMenuModal }) => {
  return (
    <section className='menu-modal' onClick={closeMenuModal} >
      <section className='menu-modal__container' onClick={(e) => e.stopPropagation()} >
        <section className='menu-modal__container__top' >
          <Link onClick={closeMenuModal} to='/' >
            <img className='menu-modal__container__top__title' src={logo} alt='Kopo Logo' />
          </Link>
          <p onClick={closeMenuModal} className='cart-modal__container__top__X' >&#9747;</p>
        </section>
        <section className='menu-modal__container__center' >
          <Accordion className='menu-modal__container__center__accordion' allowMultipleExpanded allowZeroExpanded >
            <AccordionItem className='menu-modal__container__center__accordion__item' >
              <AccordionItemHeading aria-level={3} className='menu-modal__container__center__accordion__item__heading' >
                <AccordionItemButton className='menu-modal__container__center__accordion__item__heading__button' >Kopo Apparel</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='menu-modal__container__center__accordion__item__pannel' >
                <Link to='/shop/tops' >
                  <p>Tops</p>
                </Link>
                <Link to='/shop/tops' >
                  <p>Sweaters</p>
                </Link>
                <Link to='/shop/tops' >
                  <p>Bottoms</p>
                </Link>
                <Link to='/shop/tops' >
                  <p>Towels</p>
                </Link>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='menu-modal__container__center__accordion__item' >
              <AccordionItemHeading aria-level={3} className='menu-modal__container__center__accordion__item__heading' >
                <AccordionItemButton className='menu-modal__container__center__accordion__item__heading__button' >Kopo Accesories</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='menu-modal__container__center__accordion__item__pannel' >
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='menu-modal__container__center__accordion__item' >
              <AccordionItemHeading aria-level={3} className='menu-modal__container__center__accordion__item__heading' >
                <AccordionItemButton className='menu-modal__container__center__accordion__item__heading__button' >Exchange & Refund</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='menu-modal__container__center__accordion__item__pannel' >
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='menu-modal__container__center__accordion__item' >
              <AccordionItemHeading aria-level={3} className='menu-modal__container__center__accordion__item__heading' >
                <AccordionItemButton className='menu-modal__container__center__accordion__item__heading__button' >Ambassadors</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='menu-modal__container__center__accordion__item__pannel' >
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </section>
      </section>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeMenuModal: () => dispatch(closeMenuModal())
});

export default connect(null, mapDispatchToProps)(MenuModal);