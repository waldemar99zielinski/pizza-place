import React from "react";
import "./Cart.css";

const OrderedPizzaListElement = (props) => {
  return (
    <>
      <div className="order-table-cell">
        <h3>{props.name}</h3>
      </div>
      <div className="order-table-cell">{props.additionalTopping}</div>
      <div className="order-table-cell">{props.price}</div>
      <div className="order-table-cell">
        <strong>DELETE</strong>
      </div>
    </>
  );
};

export default OrderedPizzaListElement;
