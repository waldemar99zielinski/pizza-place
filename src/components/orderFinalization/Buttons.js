import React from "react";
import "./OrderFinalization.css";
import axios from "axios";
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
    console.log("INFO: ", isAllInfoFilled(props.orderInfo));
  };

  const sendPostRequest = async (info) => {};

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

//check wheather all neccessary field are filled
const isAllInfoFilled = (info) => {
  if (
    info.customer.name.length > 0 &&
    info.customer.phone.length === 11 &&
    info.order.delivery.length > 0 &&
    info.order.payment.length > 0
  ) {
    if (info.order.delivery == "Y") {
      if (
        info.address.city.length > 0 &&
        info.address.street.length > 0 &&
        info.address.streetNo.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  return false;
};

const mapStateToProps = (state) => {
  const orderInfo = getOrderInfo(state);
  return { orderInfo };
};

export default connect(mapStateToProps, {
  clearOrderInfo,
  setOrderInfoValidation,
})(Buttons);
