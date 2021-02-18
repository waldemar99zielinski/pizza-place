import React from "react";
import "./Cart.css";
import OrderedPizzaListElement from "./OrderedPizzaListElement";

const OrderedPizzaList = ({ pizzaOrders }) => {
  return (
    <div className="order-table">
      {pizzaOrders.map((pizza) => {
        const id = pizza.pizza_code;
        const name = pizza.name || "pizzaName";
        const extraTopping = pizza.extraTopping || "none";
        const numberOfPizzas = pizza.numberOfPizzas || 69;
        const price = pizza.price || "none";
        return (
          <OrderedPizzaListElement
            id={id}
            name={name}
            extraTopping={extraTopping}
            numberOfPizzas={numberOfPizzas}
            price={price + " USD"}
          />
        );
      })}
    </div>
  );
};

export default OrderedPizzaList;
