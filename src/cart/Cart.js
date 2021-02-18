import React from "react";
import "./Cart.css";

//componets
import PopUp from "../popUp/PopUp";
import OrderedPizzaList from "./OrderedPizzaList";
import OrderConfirmation from "./OrderConfirmation";
const data = [
  {
    pizza_code: 1,
    name: "pierwsza",
    additionalTopping: "pieczarki",
    price: 12,
  },
  {
    pizza_code: 2,
    name: "druga",
    additionalTopping: "krewetki",
    price: 6,
  },
  {
    pizza_code: 3,
    name: "trzecoa",
    additionalTopping: "",
    price: 69,
  },
  {
    pizza_code: 1,
    name: "pierwsza",
    additionalTopping: "pieczarki",
    price: 12,
  },
  {
    pizza_code: 2,
    name: "druga",
    additionalTopping: "krewetki",
    price: 6,
  },
  {
    pizza_code: 3,
    name: "trzecoa",
    additionalTopping: "",
    price: 69,
  },
  {
    pizza_code: 1,
    name: "pierwsza",
    additionalTopping: "pieczarki",
    price: 12,
  },
  {
    pizza_code: 2,
    name: "druga",
    additionalTopping: "krewetki",
    price: 6,
  },
  {
    pizza_code: 3,
    name: "trzecoa",
    additionalTopping: "",
    price: 69,
  },
  {
    pizza_code: 1,
    name: "pierwsza",
    additionalTopping: "pieczarki",
    price: 12,
  },
  {
    pizza_code: 2,
    name: "druga",
    additionalTopping: "krewetki",
    price: 6,
  },
  {
    pizza_code: 3,
    name: "trzecoa",
    additionalTopping: "",
    price: 69,
  },
  {
    pizza_code: 1,
    name: "pierwsza",
    additionalTopping: "pieczarki",
    price: 12,
  },
  {
    pizza_code: 2,
    name: "druga",
    additionalTopping: "krewetki",
    price: 6,
  },
  {
    pizza_code: 3,
    name: "trzecoa",
    additionalTopping: "",
    price: 69,
  },
  {
    pizza_code: 1,
    name: "pierwsza",
    additionalTopping: "pieczarki",
    price: 12,
  },
  {
    pizza_code: 2,
    name: "druga",
    additionalTopping: "krewetki",
    price: 6,
  },
  {
    pizza_code: 3,
    name: "trzecoa",
    additionalTopping: "",
    price: 69,
  },
  {
    pizza_code: 1,
    name: "pierwsza",
    additionalTopping: "pieczarki",
    price: 12,
  },
  {
    pizza_code: 2,
    name: "druga",
    additionalTopping: "krewetki",
    price: 6,
  },
  {
    pizza_code: 3,
    name: "trzecoa",
    additionalTopping: "",
    price: 69,
  },
];
const Cart = () => {
  return (
    <PopUp title={"YOUR CART"}>
      <OrderedPizzaList pizzaOrders={data} />
      <OrderConfirmation totalPrice={12.69 + " USD"} />
    </PopUp>
  );
};

export default Cart;
