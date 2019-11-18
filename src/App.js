import React from 'react';
// Estilos
import './App.css';

// Route React 
import { Route, Switch, Redirect } from 'react-router-dom';

// Redirect nos permite hacer que no se pueda acceder a la pagina sin logearse

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

// Componentes
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

// action de redux
import { setCurrentUser } from './redux/user/user.actions';
// firebase
import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.utils';
import { selectCollectionForPreview } from './redux/shop/shop.selector';

class App extends React.Component {

  /* Ya no se necesita mas el contructor porque seteamos user desde redux
    constructor() {
      super();
      this.state = {
        currentUser: null
      };
    } */

  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser  } = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUp />)
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);