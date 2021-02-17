import React from "react";
import "./Cart.css";
import OrderedPizzaListElement from "./OrderedPizzaListElement";

const OrderedPizzaList = ({ pizzaOrders }) => {
  return (
    <div className="order-table">
      {pizzaOrders.map((pizza) => {
        const id = pizza.pizza_code;
        const name = pizza.name || "pizzaName";
        const additionalTopping = pizza.additionalTopping || "none";
        const price = pizza.price || "none";
        return (
          <OrderedPizzaListElement
            id={id}
            name={name}
            additionalTopping={additionalTopping}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default OrderedPizzaList;
