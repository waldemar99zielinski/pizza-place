import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import PizzaOverView from "./pizzaPanel/PizzaOverView";
import Cart from "./cart/Cart";
import React, { useState } from "react";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <PizzaOverView />
        <Cart />
      </div>
    </Router>
  );
}

export default App;
