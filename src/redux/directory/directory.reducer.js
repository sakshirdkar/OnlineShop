 const INITIAL_STATE = {
    sections :[{
                title: 'VEGETABLES',
                imageUrl: 'https://hdwallpapers.cat/wallpaper/vegetables-photography-tomatoes-abstract-hd-90V6.jpg',
                id: 1,
                size: "",
                linkRoute:'/shop/vegetables'
            
            }, {
                title: 'FRUITS',
                imageUrl: 'https://st3.depositphotos.com/14670260/36011/i/1600/depositphotos_360110138-stock-photo-tropical-fruits-background-many-colorful.jpg',
                id: 2,
                size: '',
                linkRoute:'/shop/fruits'
            }, {
                title: 'DAIRY PRODUCTS',
                imageUrl: 'https://www.dairyfoods.com/ext/resources/DF/2020/August/df-100/GettyImages-1194287257.jpg?1597726305',
                id: 3,
                size: '',
                linkRoute:'/shop/dairyproducts'
            }, {
                title: 'MEDICINES',
                imageUrl: 'https://news.leavitt.com/wp-content/uploads/2017/12/Prescription-Drugs.jpg',
                id: 4,
                size: '',
                linkRoute:'/shop/medicines'
            }, {
                title: 'KIRANA ITEMS',
                imageUrl: 'https://image.cnbcfm.com/api/v1/image/106670017-1597848775766-GettyImages-1218500852.jpg?v=1597848960&w=740&h=416',
                id: 5,
                size: 'large',
                 linkRoute:'/shop/kiranaitems'
            }]
};
        
const directoryReducer = (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        default: return state;  
    };
};
    
export default directoryReducer;