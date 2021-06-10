import React from 'react';
import './previewcollection.style.scss'
import CollectionItem from './../collection-item/collection-item.component'

const PreviewCollection = ({ title, items}) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='items'>
            {items.filter((idx) => idx < 3).map(({id, ...otherItemProps}) => (
                <CollectionItem key='id' {...otherItemProps}/>
            ))}
        </div>
        

    
    </div>
    

);
export default PreviewCollection;