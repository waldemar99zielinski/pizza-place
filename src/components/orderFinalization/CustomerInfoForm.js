import React from "react";
import "./OrderFinalization.css";
import "./PhoneNumberInput";
import "./NameInput";
import PhoneNumberInput from "./PhoneNumberInput";
import NameInput from "./NameInput";
const CustomerInfoForm = () => {
  return (
    <form className="order-finalization-customer-info-container">
      <NameInput />
      <PhoneNumberInput />
    </form>
  );
};

export default CustomerInfoForm;
