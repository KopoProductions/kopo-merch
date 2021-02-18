import React from 'react';

import { withRouter } from 'react-router-dom';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collections.styles.scss';
import top1 from '../../assets/images/hoodieBasket.png';
import top2 from '../../assets/images/hoodieGirl.png';
import top3 from '../../assets/images/pinkTopOrange.png';
import top4 from '../../assets/images/topWall.png';

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
  },
  {
    id: 'sweaters',
    name: 'SWEATERS',
    collection: [
      {
        id: 'sweater1',
        name: 'Sweater 1',
        price: '$100',
        url: top1,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'sweater2',
        name: 'Sweater 2',
        price: '$100',
        url: top2,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'sweater3',
        name: 'Sweater 3',
        price: '$100',
        url: top3,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'sweater4',
        name: 'Sweater 4',
        price: '$100',
        url: top4,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
    ]
  },
  {
    id: 'bottoms',
    name: 'BOTTOMS',
    collection: [
      {
        id: 'bottoms1',
        name: 'Bottom 1',
        price: '$100',
        url: top1,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'bottoms2',
        name: 'Bottom 2',
        price: '$100',
        url: top2,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'bottoms3',
        name: 'Bottom 3',
        price: '$100',
        url: top3,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'bottoms4',
        name: 'Bottom 4',
        price: '$100',
        url: top4,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      }
    ]
  },
  {
    id: 'towels',
    name: 'TOWELS',
    collection: [
      {
        id: 'towel1',
        name: 'Towel 1',
        price: '$100',
        url: top1,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'towel2',
        name: 'Towel 2',
        price: '$100',
        url: top2,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'towel3',
        name: 'Towel 3',
        price: '$100',
        url: top3,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      },
      {
        id: 'towel4',
        name: 'Towel 4',
        price: '$100',
        url: top4,
        sizes: ['s', 'm', 'l'],
        colors: ['white', 'blue', 'black']
      }
    ]
  }
]

const Collections = ({ match }) => {
  const { params, url } = match;
  return (
    collectionsDB.map(collectionObject => {
      if (collectionObject.id === params.collection) {
        const {id, name, collection} = collectionObject;
        return (
          <CollectionPreview key={id} collectionId={id} path={url} collectionName={name} items={collection} />
        );
      } else {
        return null
      }
    })
  );
};

export default withRouter(Collections);