import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import selectSections from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss'


const Directory = ({ sections }) => (
        
    <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionComponents }) => {
            return <MenuItem key={id} {...otherSectionComponents} />
        })}
    </div>
);


const mapStateToProps = createStructuredSelector(
    {
    sections : selectSections
    }
)

export default connect(mapStateToProps)(Directory);