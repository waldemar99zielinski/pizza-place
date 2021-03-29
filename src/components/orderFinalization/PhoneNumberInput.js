import React, { useState } from "react";

const PhoneNumberInput = () => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    const validInput = validatePhoneNumber(e.target.value);
    setInput(validInput);
  };

  return (
    <div>
      <label>Phone:</label>
      <input type="text" value={input} onChange={(e) => inputHandler(e)} />
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

export default PhoneNumberInput;
