import React from "react";

import "./Cart.css";
import priceToDisplay from "../utils/priceToDisplay";
//redux
import { connect } from "react-redux";
import { getPizzaById } from "../redux/selectors/pizza";

const data = [
  {
    extra_topping_code: "TOP1",
    name: "TOP1",
  },
  {
    extra_topping_code: "TOP2",
    name: "TOP2",
  },
  {
    extra_topping_code: "TOP3",
    name: "TOP3",
  },
  {
    extra_topping_code: "TOP4",
    name: "TOP4",
  },
];

const OrderedPizzaListElement = (props) => {
  const pizza = props.pizza[0] || {
    name: "null",
    extraTopping: [null],

    price: -1,
  };
  const price = props.size
    ? props.size === "S"
      ? pizza.price_small
      : pizza.price_big
    : null;
  return (
    <>
      {console.log("OorederPizzaListElemetn: ", props.pizza)}

      <div className="order-table-cell head">
        <h2>{pizza.name}</h2>
      </div>
      <div className="order-table-cell">
        <select>
          {data.map((extraTopping) => {
            return (
              <option value={extraTopping.extra_topping_code}>
                {extraTopping.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="order-table-cell">
        <h2>{props.numberOfPizzas}</h2>
        <h2 className="delete-order-bnt change-number-bnt">+</h2>
        <h2 className="delete-order-bnt change-number-bnt">-</h2>
      </div>
      <div className="order-table-cell">
        <h3> {priceToDisplay(price)}</h3>
      </div>
      <div className="order-table-cell">
        <h3 className="delete-order-bnt">DELETE</h3>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const pizza = getPizzaById(state, id);

  return { pizza };
};

export default connect(mapStateToProps)(OrderedPizzaListElement);
