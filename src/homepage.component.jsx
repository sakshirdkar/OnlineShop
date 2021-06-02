import React from 'react';
import './homepage.style.scss';

//Functional Component 
const HomePage =() => (
<div className = 'homepage'>
  <div className ='directory-menu'>
      <div className = 'menu-item'>
          <div className = 'content'>
              <h1 className ='title'>VEGETABLES</h1>
                  <span className ='subtitle'>
                      ORDER NOW
                  </span>
          </div>
      </div>

      <div className = 'menu-item'>
          <div className = 'content'>
              <h1 className ='title'>FRUITS</h1>
                  <span className ='subtitle'>
                      ORDER NOW
                  </span>
          </div>
      </div>

      <div className = 'menu-item'>
          <div className = 'content'>
              <h1 className ='title'>DAIRY PRODUCTS</h1>
                  <span className ='subtitle'>
                      ORDER NOW
                  </span>
          </div>
      </div>

      <div className = 'menu-item'>
          <div className = 'content'>
              <h1 className ='title'>MEDICINES</h1>
                  <span className ='subtitle'>
                      ORDER NOW
                  </span>
          </div>
      </div>

     
      <div className = 'menu-item'>
          <div className = 'content'>
              <h1 className ='title'>KIRANA ITEMS</h1>
                  <span className ='subtitle'>
                      ORDER NOW
                  </span>
          </div>
      </div>
  </div>
  </div>
);

export default HomePage;

