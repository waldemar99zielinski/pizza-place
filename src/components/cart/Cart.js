import React, { useEffect } from "react";
import "./Cart.css";

//componets
import PopUp from "../popUp/PopUp";
import OrderedPizzaList from "./OrderedPizzaList";
import OrderConfirmation from "./OrderConfirmation";

//redux
import { connect } from "react-redux";
import { POPUP_ID_CART } from "../../redux/constants/popUpIds";
import { getOrderedPizzas } from "../../redux/selectors/order";

const Cart = (props) => {
  return (
    <PopUp title={"YOUR CART"} id={POPUP_ID_CART}>
      <OrderedPizzaList pizzaOrders={props.data} />
      <OrderConfirmation />
    </PopUp>
  );
};

const mapStateToProps = (state) => {
  const data = getOrderedPizzas(state);
  return { data };
};

export default connect(mapStateToProps)(Cart);
