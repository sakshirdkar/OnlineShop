
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component'
import Header from './components/header/header.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth,createOrFetchUserProfile } from './firebase/firebase.util.js';
import React from 'react';
import { connect } from 'react-redux';
import  setCurrentUser from './redux/user/user.actions';


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
          <Route path='/signinandsignup' component={SignInAndSignUp} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </BrowserRouter> ;
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}
);
export default connect(null, mapDispatchToProps)(App);
