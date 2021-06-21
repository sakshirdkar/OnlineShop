
import { Route } from 'react-router-dom';

//import selectCollections from './../../redux/shop/shop.selector';
import CollectionOverview from './../../components/collection-overview/collection-overview.component';
import CollectionPage from './../../components/collection/collection.component';
// <Route exact path={`${match.path}`} component={CollectionOverview} />
const ShopPage = ({ match}) => {
    const { path } = match;
    return  <div>
                
            <Route exact path={`${path}`} component={CollectionOverview} />
            <Route exact path={ `${path}/:collectionId`} component={ CollectionPage} />
        
            </div>
        
}


export default (ShopPage);