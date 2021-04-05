import React from "react";

//redux
import { connect } from "react-redux";
import { getDelivery, getPayment } from "../../redux/selectors/orderInfo";
import { setDelivery, setPayment } from "../../redux/actions/orderInfo";

const OrderInfoForm = (props) => {
  return (
    <form className="order-finalization-order-info">
      <div className="order-finalization-radio-container">
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
      <div className="order-finalization-radio-container">
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
  return { payment, delivery };
};

export default connect(null, { setPayment, setDelivery })(OrderInfoForm);
