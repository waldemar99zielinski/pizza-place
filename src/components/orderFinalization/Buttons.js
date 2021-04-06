import React from "react";
import "./OrderFinalization.css";

//redux
import { connect } from "react-redux";
import {
  clearOrderInfo,
  setOrderInfoValidation,
} from "../../redux/actions/orderInfo";
import { getOrderInfo } from "../../redux/selectors/orderInfo";
const Buttons = (props) => {
  const submitOrder = () => {
    props.setOrderInfoValidation(true);
    setTimeout(() => props.setOrderInfoValidation(false), 1000);
    console.log("submit: ", props.orderInfo);
  };

  return (
    <div className="buttons-container">
      <h3 className="button" onClick={() => props.clearOrderInfo()}>
        CLEAR
      </h3>
      <h3 className="button" onClick={() => submitOrder()}>
        SUBMIT ORDER
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  const orderInfo = getOrderInfo(state);
  return { orderInfo };
};

export default connect(mapStateToProps, {
  clearOrderInfo,
  setOrderInfoValidation,
})(Buttons);
