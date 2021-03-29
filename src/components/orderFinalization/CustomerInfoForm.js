import React from "react";
import "./OrderFinalization.css";
import "./PhoneNumberInput";
import PhoneNumberInput from "./PhoneNumberInput";
const CustomerInfoForm = () => {
  return (
    <div className="order-finalization-container">
      <form>
        <label>Name:</label>
        <input type="text" />
        <PhoneNumberInput />
      </form>
    </div>
  );
};

export default CustomerInfoForm;
