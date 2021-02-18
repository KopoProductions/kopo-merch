import React from 'react';
import { withRouter } from 'react-router-dom';

import ItemViewer from '../../components/item-viewer/item-viewer.component';
import ItemDescription from '../../components/item-description/item-description.component';
import Suggestions from '../../components/suggestions/suggestions.component';

import top1 from '../../assets/images/hoodieBasket.png';
import top2 from '../../assets/images/hoodieGirl.png';
import top3 from '../../assets/images/pinkTopOrange.png';
import top4 from '../../assets/images//yogaPantsOrange.png';

import './item.styles.scss';

const imgDB = [
  {
    id: 'top1',
    imgUrl: top1
  },
  {
    id: 'top2',
    imgUrl: top2
  },
  {
    id: 'top3',
    imgUrl: top3
  },
  {
    id: 'top4',
    imgUrl: top4
  },
];

const Item = ({ match }) => {
  console.log(match);
  const { color, size, item, collection } = match.params;
  return (
    <section className='item-page' >
      <section className='item-page__item-info' >
        <ItemViewer images={imgDB} />
        <ItemDescription color={color} size={size} id={item} collection={collection} />
      </section>
      <Suggestions />
    </section>
  );
};

export default withRouter(Item);