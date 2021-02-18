import React from "react";

import ExtraToppingsSelect from "./ExtraToppingsSelect";

import "./Cart.css";

const data = [
  {
    extra_topping_code: "TOP1",
    name: "TOP1",
  },
  {
    extra_topping_code: "TOP2",
    name: "TOP2",
  },
  {
    extra_topping_code: "TOP3",
    name: "TOP3",
  },
  {
    extra_topping_code: "TOP4",
    name: "TOP4",
  },
];

const OrderedPizzaListElement = (props) => {
  return (
    <>
      <div className="order-table-cell head">
        <h2>{props.name}</h2>
      </div>
      <div className="order-table-cell">
        <ExtraToppingsSelect extraToppings={data} />
      </div>
      <div className="order-table-cell">
        <h2>{props.numberOfPizzas}</h2>
        <h2 className="delete-order-bnt change-number-bnt">+</h2>
        <h2 className="delete-order-bnt change-number-bnt">-</h2>
      </div>
      <div className="order-table-cell">
        <h3> {props.price}</h3>
      </div>
      <div className="order-table-cell">
        <h3 className="delete-order-bnt">DELETE</h3>
      </div>
    </>
  );
};

export default OrderedPizzaListElement;
