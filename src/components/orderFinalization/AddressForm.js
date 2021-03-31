import React from "react";
import "./OrderFinalization.css";
const AddressForm = () => {
  return (
    <div className="order-finalization-address-info-container">
      <div className="order-finalization-form-container">
        <input className="order-finalization-input" placeholder=" " />
        <label className="order-finalization-label">City</label>
      </div>
      <div className="order-finalization-form-container">
        <input className="order-finalization-input" placeholder=" " />
        <label className="order-finalization-label">Street</label>
      </div>
      <div className="order-finalization-form-container">
        <input className="order-finalization-input" placeholder=" " />
        <label className="order-finalization-label">Street No</label>
      </div>
      <div className="order-finalization-form-container">
        <input className="order-finalization-input" placeholder=" " />
        <label className="order-finalization-label">
          Apartment No (optional)
        </label>
      </div>
    </div>
  );
};

export default AddressForm;
