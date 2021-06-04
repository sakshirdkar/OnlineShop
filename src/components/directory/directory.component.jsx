import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss'
class Directory extends React.Component{
    
    constructor() {
        super();
        this.state = {
            sections :[{
                title: 'VEGETABLES',
                imageUrl: 'https://hdwallpapers.cat/wallpaper/vegetables-photography-tomatoes-abstract-hd-90V6.jpg',
                id: 1,
                size: "",
                linkRoute:'vegetables'
            
            }, {
                title: 'FRUITS',
                imageUrl: 'https://st3.depositphotos.com/14670260/36011/i/1600/depositphotos_360110138-stock-photo-tropical-fruits-background-many-colorful.jpg',
                id: 2,
                size: '',
                linkRoute:'fruits'
            }, {
                title: 'DAIRY PRODUCTS',
                imageUrl: 'https://www.dairyfoods.com/ext/resources/DF/2020/August/df-100/GettyImages-1194287257.jpg?1597726305',
                id: 3,
                size: '',
                linkRoute:'dairyproducts'
            }, {
                title: 'MEDICINES',
                imageUrl: 'https://news.leavitt.com/wp-content/uploads/2017/12/Prescription-Drugs.jpg',
                id: 4,
                size: '',
                linkRoute:'medicines'
            }, {
                title: 'KIRANA ITEMS',
                imageUrl: 'https://image.cnbcfm.com/api/v1/image/106670017-1597848775766-GettyImages-1218500852.jpg?v=1597848960&w=740&h=416',
                id: 5,
                size: 'large',
                 linkRoute:'kiranaitems'
            }]
        };
    
    }
    
    render() {
        
        return (
            <div className = 'directory-menu'>
                {this.state.sections.map(({ id,...otherSectionComponents }) => {
                    return <MenuItem key={id} {...otherSectionComponents}/>
                })}
            </div>
        );
    }
    
}

export default Directory;