import { createSelector } from "reselect";


const selectShop = (state) => state.shop;

const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections

);

export const selectCollectionsForOverview = createSelector(
    [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])  
);

export const selectCollectionObject =(collectionUrlParam) =>
    createSelector(
        [selectCollections],
        (collections) => collections[collectionUrlParam]
       // (collections) => collections.find((collection) => collectionUrlParam === collection.routeName)
    )

export default selectCollectionObject;