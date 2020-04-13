import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import AuthPage from "./pages/auth-page/auth-page";
import Header from "./components/header.component/header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        })
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<AuthPage />)} />
          </Switch>
        </div>

      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
