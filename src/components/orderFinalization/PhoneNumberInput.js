import React, { useState } from "react";

//redux
import { connect } from "react-redux";
import { getPhone, getIsValidating } from "../../redux/selectors/orderInfo";
import { setPhone } from "../../redux/actions/orderInfo";

const PhoneNumberInput = (props) => {
  const inputHandler = (e) => {
    const validInput = validatePhoneNumber(e.target.value);
    props.setPhone(validInput);
  };

  return (
    <div
      className={
        props.isValidating && props.phone.length <= 0
          ? "order-finalization-form-container shake-animation"
          : "order-finalization-form-container"
      }
    >
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
  const isValidating = getIsValidating(state);
  return { phone, isValidating };
};

export default connect(mapStateToProps, { setPhone })(PhoneNumberInput);
