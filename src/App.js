import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import AuthPage from "./pages/auth-page/auth-page";
import Header from "./components/header.component/header";


function App() {
  return (
    <React.Fragment>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={AuthPage} />
        </Switch>
      </div>

    </React.Fragment>
  );
}

export default App;
