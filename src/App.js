/**
 * author: Denis Kravchenko
 */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appbar from "./components/Appbar/Appbar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
// import Item from "./components/Shop/Item/Item";
import BottomBar from "./components/Appbar/BottomBar";

import ItemInfo from "./components/ItemInfo/ItemInfo";

import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/item/:id" exact component={ItemInfo} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
        </Switch>
      </Router>

      {/* <BottomBar /> */}
    </div>
  );
}

export default App;
