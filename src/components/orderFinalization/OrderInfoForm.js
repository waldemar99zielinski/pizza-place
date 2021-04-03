import React from "react";

const OrderInfoForm = () => {
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
          />
          <label className="order-finalization-radio-label" htmlFor="yes">
            YES
          </label>
          <input
            className="order-finalization-radio-input"
            type="radio"
            id="no"
            name="delivery"
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
          />
          <label className="order-finalization-radio-label" htmlFor="money">
            MONEY
          </label>
          <input
            className="order-finalization-radio-input"
            type="radio"
            id="card"
            name="payment"
          />
          <label className="order-finalization-radio-label" htmlFor="card">
            CARD
          </label>
        </div>
      </div>
    </form>
  );
};

export default OrderInfoForm;
