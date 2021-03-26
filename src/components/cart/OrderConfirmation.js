import React from "react";
import "./Cart.css";
import priceToDisplay from "../../utils/priceToDisplay";
//redux
import { connect } from "react-redux";
import { getOrderTotalCost } from "../../redux/selectors/order";

const OrderConfirmation = (props) => {
  return (
    <div className="order-table sum-up">
      <div className="order-table-cell sum-up">
        <h2> </h2>
      </div>
      <div className="order-table-cell sum-up">
        <h2> </h2>
      </div>
      <div className="order-table-cell sum-up">
        <h2> </h2>
      </div>
      <div className="order-table-cell sum-up">
        <h3>total cost</h3>
      </div>
      <div className="order-table-cell">
        <h3> {priceToDisplay(props.totalPrice)}</h3>
      </div>
      <div className="order-table-cell">
        <h3 className="delete-order-bnt">ORDER</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const totalPrice = getOrderTotalCost(state);
  return { totalPrice };
};

export default connect(mapStateToProps)(OrderConfirmation);
