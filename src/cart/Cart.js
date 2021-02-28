import React from "react";
import "./Cart.css";

//componets
import PopUp from "../popUp/PopUp";
import OrderedPizzaList from "./OrderedPizzaList";
import OrderConfirmation from "./OrderConfirmation";

//redux
import { connect } from "react-redux";
import { getIsCartPopUpOpen } from "../redux/selectors/cartPopUp";

const data = [
  {
    pizza_code: 1,
    name: "pierwsza",
    extraTopping: "pieczarki",
    numberOfPizzas: 12,
    price: 12,
  },
  {
    pizza_code: 2,
    name: "druga",
    extraTopping: "krewetki",
    numberOfPizzas: 1,
    price: 6,
  },
  {
    pizza_code: 3,
    name: "trzecoa",
    extraTopping: "",
    numberOfPizzas: 102,
    price: 69,
  },
];
const Cart = (props) => {
  return (
    <PopUp title={"YOUR CART"} isDisplayed={props.isCartOpened}>
      <OrderedPizzaList pizzaOrders={data} />
      <OrderConfirmation totalPrice={12.69 + " USD"} />
    </PopUp>
  );
};

const mapStateToProps = (store) => {
  const isCartOpened = getIsCartPopUpOpen(store);
  return { isCartOpened };
};

export default connect(mapStateToProps)(Cart);
