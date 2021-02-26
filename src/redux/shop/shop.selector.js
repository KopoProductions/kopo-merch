import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam => 
createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
)

export const selectItem = (collectionUrlParam, collectionItem) => 
  createSelector(
    selectCollection(collectionUrlParam),
    collection => collection.items[collectionItem]
  )