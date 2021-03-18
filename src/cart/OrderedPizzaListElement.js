import React, { useEffect } from "react";

import "./Cart.css";
import priceToDisplay from "../utils/priceToDisplay";
//redux
import { connect, useDispatch } from "react-redux";
import { getPizzaById } from "../redux/selectors/pizza";
import { getOrderedPizzaPriceById } from "../redux/selectors/order";
import { fetchExtraToppings } from "../redux/actions/extraToppings";
import {
  increaseNumberOfPizzaInOrder,
  decreaseNumberOfPizzaInOrder,
  removePizzaOrder,
} from "../redux/actions/order";
//components
import NumberOfOrderedPizzas from "./NumberOfOrderedPizzas";
import ExtraToppingsSelect from "./ExtraToppingsSelect";
import SizeSelect from "./SizeSelect";
const OrderedPizzaListElement = (props) => {
  const pizza = props.pizza[0] || {
    name: "null",
    extraTopping: [null],

    price: -1,
  };

  return (
    <>
      {/* {console.log("OorederPizzaListElemetn: ", props.pizza)} */}

      <div className="order-table-cell head">
        <h2>{pizza.name}</h2>
      </div>
      <ExtraToppingsSelect id={props.id} />
      <NumberOfOrderedPizzas
        id={props.id}
        numberOfPizzas={props.numberOfPizzas}
      />
      <SizeSelect id={props.id} />
      <div className="order-table-cell">
        {console.log("OrederPizzaListElement: ", props.price)}
        <h3> {priceToDisplay(props.price)}</h3>
      </div>
      <div className="order-table-cell">
        <h3
          className="delete-order-bnt"
          onClick={() => props.removePizzaOrder(props.id)}
        >
          DELETE
        </h3>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const pizza = getPizzaById(state, id);

  const price = getOrderedPizzaPriceById(state, id);

  return { pizza, price };
};

export default connect(mapStateToProps, {
  increaseNumberOfPizzaInOrder,
  decreaseNumberOfPizzaInOrder,
  removePizzaOrder,
})(OrderedPizzaListElement);
