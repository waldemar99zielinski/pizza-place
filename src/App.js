import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PizzaOverView from "./components/pizzaPanel/PizzaOverView";
import Cart from "./components/cart/Cart";
import Notification from "./components/notification/index";
import React from "react";
import OrderFinalization from "./components/orderFinalization/index";
import AboutUs from "./components/aboutUs/index";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/">
            <PizzaOverView />
          </Route>
        </Switch>
        <Cart />
        <OrderFinalization />
        <Notification />
      </div>
    </Router>
  );
}

export default App;
