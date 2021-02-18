import React from "react";
import "./Cart.css";

const OrderConfirmation = (props) => {
  return (
    <div className="order-table sum-up">
      <div className="order-table-cell sum-up">
        <h2> </h2>
      </div>
      <div className="order-table-cell sum-up">
        <h3>total cost</h3>
      </div>
      <div className="order-table-cell">
        <h3> {props.totalPrice}</h3>
      </div>
      <div className="order-table-cell">
        <h3 className="delete-order-bnt">CONFIRM ORDER</h3>
      </div>
    </div>
  );
};

export default OrderConfirmation;
