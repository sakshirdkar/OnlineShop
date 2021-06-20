import React from 'react';
import './collection.styles.scss';
import CollectionItem from './../collection-item/collection-item.component';
import selectCollectionObject from './../../redux/shop/shop.selector'
import { connect} from 'react-redux';

const CollectionPage = ({ match, collection }) =>
{
  console.log(match, collection);
  return (<div className ='collection-page'>
    <div className ='title'>{collection.title} </div>
    
    <div className='collection-items'> {
      collection.items.map((item) => (
        <CollectionItem key={item.id} item={item}/>
        ))}
    </div>
   
    </div>);
};

const mapStateToProps  = (state, ownProps) => ({
  collection : selectCollectionObject(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);
