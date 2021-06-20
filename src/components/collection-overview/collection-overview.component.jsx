import { connect } from "react-redux"
import { createStructuredSelector } from "reselect";
import { selectCollectionsForOverview } from "../../redux/shop/shop.selector";
import PreviewCollection from "../preview-collection/previewcollection.component";

import './collection.overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...othercollectionItems }) => {
            return <PreviewCollection key={id} {...othercollectionItems} />
        })}
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollectionsForOverview
    }
)

export default connect(mapStateToProps)(CollectionOverview);