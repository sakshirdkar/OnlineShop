
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
//import VegetablePage from './pages/vegetablespage/vegetable.component'
import ShopPage from './pages/shop/shop.component';
function App() {
  return (
    <div className= 'body'>
    <BrowserRouter>
      <Switch>
       
        <Route path='/shop' component={ ShopPage}/>
        <Route exact path='/' component={HomePage} />
      </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
