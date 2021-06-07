
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'
import Header from './components/header/header.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.util.js';
import React from 'react';


//import VegetablePage from './pages/vegetablespage/vegetable.component'

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) this.setState({currentUser:user});
    }
      );
  }
  componentWillUnmount() {
    console.log('component will unmount')
    this.unsubscribeFromAuth();
  }

  render() {
    
    return <BrowserRouter>
        <Header currentUser={ this.state.currentUser} />
        <Switch>
          <Route path='/signinandsignup' component={SignInAndSignUp} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </BrowserRouter> ;
  }
}

export default App;
