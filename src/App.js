import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Panel from "./Panel";
import Cart from "./cart/Cart";
import React, { useState } from "react";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Panel />
        <Cart />
      </div>
    </Router>
  );
}

export default App;
