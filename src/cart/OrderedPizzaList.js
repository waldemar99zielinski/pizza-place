import React from "react";
import "./Cart.css";
import OrderedPizzaListElement from "./OrderedPizzaListElement";

const OrderedPizzaList = ({ pizzaOrders }) => {
  return (
    <div className="order-table">
      {pizzaOrders.map((order) => {
        const id = order.pizza_code;
        const extraTopping = order.extraTopping || "none";
        const numberOfPizzas = order.numberOf || 69;
        const size = order.size || null;
        return (
          <OrderedPizzaListElement
            key={id}
            id={id}
            extraTopping={extraTopping}
            numberOfPizzas={numberOfPizzas}
            size={size}
          />
        );
      })}
    </div>
  );
};

export default OrderedPizzaList;
