import React from "react";

//redux
import { connect } from "react-redux";
import {
  getDelivery,
  getPayment,
  getIsValidating,
} from "../../redux/selectors/orderInfo";
import { setDelivery, setPayment } from "../../redux/actions/orderInfo";

const OrderInfoForm = (props) => {
  // console.log("Radio input: ", props.isValidating, " ", props.delivery.length);
  return (
    <form className="order-finalization-order-info">
      <div
        className={
          props.isValidating && props.delivery.length <= 0
            ? "order-finalization-radio-container shake-animation"
            : "order-finalization-radio-container"
        }
      >
        <label className="order-finalization-radio-title">DELIVERY</label>
        <div className="order-finalization-radio-group">
          <input
            className="order-finalization-radio-input"
            type="radio"
            id="yes"
            name="delivery"
            onChange={() => props.setDelivery("Y")}
          />
          <label className="order-finalization-radio-label" htmlFor="yes">
            YES
          </label>
          <input
            className="order-finalization-radio-input"
            type="radio"
            id="no"
            name="delivery"
            onChange={() => props.setDelivery("N")}
          />
          <label className="order-finalization-radio-label" htmlFor="no">
            NO
          </label>
        </div>
      </div>
      <div
        className={
          props.isValidating && props.payment.length <= 0
            ? "order-finalization-radio-container shake-animation"
            : "order-finalization-radio-container"
        }
      >
        <label className="order-finalization-radio-title">payment</label>
        <div className="order-finalization-radio-group">
          <input
            className="order-finalization-radio-input"
            type="radio"
            id="money"
            name="payment"
            onChange={() => props.setPayment("R")}
          />
          <label className="order-finalization-radio-label" htmlFor="money">
            MONEY
          </label>
          <input
            className="order-finalization-radio-input"
            type="radio"
            id="card"
            name="payment"
            onChange={() => props.setPayment("C")}
          />
          <label className="order-finalization-radio-label" htmlFor="card">
            CARD
          </label>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  const payment = getPayment(state);
  const delivery = getDelivery(state);
  const isValidating = getIsValidating(state);
  return { payment, delivery, isValidating };
};

export default connect(mapStateToProps, { setPayment, setDelivery })(
  OrderInfoForm
);
