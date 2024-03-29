import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

///777
 //import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
 //import { addCollectionAndDocuments } from './firebase/firebase.utils';
//1 вариант <button onClick={ () => addCollectionAndDocuments('collections', collectionsArray)}>Probaa</button> 
//2 вариант<button onClick={ () => addCollectionAndDocuments('collections', colArr = collectionsArray.map(({title, items}) => ({title, items})))}>Probaa</button> 
///777

const App = ({ checkUserSession, currentUser, collectionsArray }) => {    //77
  useEffect(() => {
    checkUserSession();   
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  ///collectionsArray: selectCollectionsForPreview   ///
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
