import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { auth,createOrFetchUserProfile } from './firebase/firebase.util.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';


import  setCurrentUser from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector.js';


//import VegetablePage from './pages/vegetablespage/vegetable.component'

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createOrFetchUserProfile(userAuth);
        
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
          
        });
      }
      setCurrentUser(userAuth);
       }
    );
    
    
  }
  componentWillUnmount() {
    console.log('component will unmount');
    this.unsubscribeFromAuth();
  }

  render() {
    
    return <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/signinandsignup' render={() => this.props.currentUser ? (<Redirect to= '/'/> ): (<SignInAndSignUp />)} />
        <Route  path='/shop' component={ShopPage} />
        
        <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </BrowserRouter> ;
  }
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
