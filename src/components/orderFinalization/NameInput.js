import React, { useState } from "react";
import "./OrderFinalization.css";
//redux
import { connect } from "react-redux";
import { getName, getIsValidating } from "../../redux/selectors/orderInfo";
import { setName } from "../../redux/actions/orderInfo";
const NameInput = (props) => {
  const NAME_MAX_LENGTH = 50;

  const nameHandler = (e) => {
    const name = e.target.value;

    if (name.length > NAME_MAX_LENGTH) {
      props.setName(`${name.slice(0, NAME_MAX_LENGTH)}`);
    } else {
      props.setName(`${name}`);
    }
  };

  return (
    <div
      className={
        props.isValidating && props.name.length <= 0
          ? "order-finalization-form-container shake-animation"
          : "order-finalization-form-container"
      }
    >
      <input
        type="text"
        value={props.name}
        onChange={(e) => nameHandler(e)}
        className="order-finalization-input"
        placeholder=" "
      />
      <label className="order-finalization-label">Name:</label>
    </div>
  );
};

const mapStateToProps = (state) => {
  const name = getName(state);
  const isValidating = getIsValidating(state);
  return { name, isValidating };
};

export default connect(mapStateToProps, { setName })(NameInput);
