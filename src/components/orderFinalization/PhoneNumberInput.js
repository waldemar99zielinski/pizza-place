import React, { useState } from "react";

//redux
import { connect } from "react-redux";
import { getPhone } from "../../redux/selectors/orderInfo";
import { setPhone } from "../../redux/actions/orderInfo";

const PhoneNumberInput = (props) => {
  const inputHandler = (e) => {
    const validInput = validatePhoneNumber(e.target.value);
    props.setPhone(validInput);
  };

  return (
    <div className="order-finalization-form-container">
      <input
        type="text"
        value={props.phone}
        onChange={(e) => inputHandler(e)}
        className="order-finalization-input"
        placeholder=" "
      />
      <label className="order-finalization-label">Phone:</label>
    </div>
  );
};
//returns polish phone number format: xxx-xxx-xxx
const validatePhoneNumber = (number) => {
  //regular expresstion to clean values that are not numbers
  let validPhoneNumber = number.replace(/[^\d]/g, "");

  if (validPhoneNumber.length <= 3) return validPhoneNumber;

  if (validPhoneNumber.length <= 6) {
    return `${validPhoneNumber.slice(0, 3)}-${validPhoneNumber.slice(3)}`;
  }

  return `${validPhoneNumber.slice(0, 3)}-${validPhoneNumber.slice(
    3,
    6
  )}-${validPhoneNumber.slice(6, 9)}`;
};
const mapStateToProps = (state) => {
  const phone = getPhone(state);
  return { phone };
};

export default connect(mapStateToProps, { setPhone })(PhoneNumberInput);
