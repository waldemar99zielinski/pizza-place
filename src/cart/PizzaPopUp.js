import React from "react";
import "./Cart.css";
//icons
import { FaTimes } from "react-icons/fa";
//componets

import OrderedPizzaList from "./OrderedPizzaList";
const data = [
  {
    pizza_code: 1,
    name: "pierwsza",
    additionalTopping: "pieczarki",
    price: 12,
  },
  {
    pizza_code: 2,
    name: "druga",
    additionalTopping: "krewetki",
    price: 6,
  },
  {
    pizza_code: 3,
    name: "trzecoa",
    additionalTopping: "",
    price: 69,
  },
];
const PizzaPopUp = () => {
  return (
    <div className="pizza-modal">
      <div className="pizza-modal-content">
        <header class="cart-header">
          <h1 className="header-title">YOUR CART</h1>
          <FaTimes size={40} className="cart-closing-toggle" />
        </header>
        <OrderedPizzaList pizzaOrders={data} />
      </div>
    </div>
  );
};

export default PizzaPopUp;
