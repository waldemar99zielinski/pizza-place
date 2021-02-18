import React from "react";
import "./Cart.css";

const OrderedPizzaListElement = (props) => {
  return (
    <>
      <div className="order-table-cell">
        <h2>{props.name}</h2>
      </div>
      <div className="order-table-cell">
        <h3>{props.additionalTopping}</h3>
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
