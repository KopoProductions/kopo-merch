import React from 'react';

import ItemViewer from '../../components/item-viewer/item-viewer.component';
import ItemDescription from '../../components/item-description/item-description.component';
import Suggestions from '../../components/suggestions/suggestions.component';

import img1 from '../../assets/images/hoodieBasket.png';
import img2 from '../../assets/images/hoodieGirl.png';
import img3 from '../../assets/images/pinkTopOrange.png';
import img4 from '../../assets/images//yogaPantsOrange.png';

import './item.styles.scss';

const imgDB = [
  {
    id: 'top1',
    imgUrl: img1
  },
  {
    id: 'top2',
    imgUrl: img2
  },
  {
    id: 'top3',
    imgUrl: img3
  },
  {
    id: 'top4',
    imgUrl: img4
  },
];

const Item = () => {
  return (
    <section className='item-page' >
      <section className='item-page__item-info' >
        <ItemViewer images={imgDB} />
        <ItemDescription />
        <Suggestions />
      </section>
      
    </section>
  );
};

export default Item;