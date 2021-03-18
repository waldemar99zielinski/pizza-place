import React, { useEffect } from "react";
import "./Cart.css";
import OrderedPizzaListElement from "./OrderedPizzaListElement";
//redux
import { connect, useDispatch } from "react-redux";
import { fetchExtraToppings } from "../redux/actions/extraToppings";

const OrderedPizzaList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExtraToppings());
  }, [dispatch]);

  return (
    <div className="order-table">
      {props.pizzaOrders.map((order) => {
        const id = order.pizza_code;
        const extraTopping = order.extraTopping || "none";
        const numberOfPizzas = order.numberOf || 69;
        const size = order.size || null;
        return (
          <OrderedPizzaListElement
            key={id}
            id={id}
            extraTopping={extraTopping}
            numberOfPizzas={numberOfPizzas}
            size={size}
          />
        );
      })}
    </div>
  );
};

export default OrderedPizzaList;
