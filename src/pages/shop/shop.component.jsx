import React from 'react';
import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/previewcollection.component'

class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  
            collections: SHOP_DATA,  
        }
    }
    render() {
        
        return <div> SHOP PAGE
             {this.state.collections.map(({ id, ...othercollectionItems }) => {
                 return <PreviewCollection key={id} {...othercollectionItems} />
             })}
                     
         
        </div>
            
    }
}
export default ShopPage;