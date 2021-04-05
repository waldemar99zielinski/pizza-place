import React, { useState } from "react";
//redux
import { connect } from "react-redux";
import { getName } from "../../redux/selectors/orderInfo";
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
    <div className="order-finalization-form-container">
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
  return { name };
};

export default connect(mapStateToProps, { setName })(NameInput);
