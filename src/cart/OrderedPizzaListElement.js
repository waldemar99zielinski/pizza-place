import React, { useEffect } from "react";

import "./Cart.css";
import priceToDisplay from "../utils/priceToDisplay";
//redux
import { connect, useDispatch } from "react-redux";
import { getPizzaById } from "../redux/selectors/pizza";
import { fetchExtraToppings } from "../redux/actions/extraToppings";
import {
  increaseNumberOfPizzaInOrder,
  decreaseNumberOfPizzaInOrder,
  removePizzaOrder,
} from "../redux/actions/order";
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExtraToppings());
  }, [dispatch]);

  const { isLoading, dataExtraTopping, error } = props;
  const isEmpty = dataExtraTopping.length === 0;

  return (
    <>
      {/* {console.log("OorederPizzaListElemetn: ", props.pizza)} */}

      <div className="order-table-cell head">
        <h2>{pizza.name}</h2>
      </div>
      <div className="order-table-cell">
        <select>
          {isEmpty ? (
            isLoading ? (
              <option value={"Loading"}>{"Loading"}</option>
            ) : (
              <option value={"Error"}>{"error"}</option>
            )
          ) : (
            props.dataExtraTopping.data.map((extraTopping) => {
              return (
                <option value={extraTopping.extra_topping_code}>
                  {extraTopping.name}
                </option>
              );
            })
          )}
        </select>
      </div>
      <div className="order-table-cell">
        <h2>{props.numberOfPizzas}</h2>
        <h2
          className="delete-order-bnt change-number-bnt"
          onClick={() => {
            console.log("INCREAS");
            props.increaseNumberOfPizzaInOrder(props.id, 1);
          }}
        >
          +
        </h2>
        <h2
          className="delete-order-bnt change-number-bnt"
          onClick={() => {
            if (props.numberOfPizzas > 1)
              props.decreaseNumberOfPizzaInOrder(props.id, 1);
          }}
        >
          -
        </h2>
      </div>
      <div className="order-table-cell">
        <h3> {priceToDisplay(price)}</h3>
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

  const dataExtraTopping = state.extraTopping.data;
  const isLoading = state.extraTopping.isLoading;
  const error = state.extraTopping.error;

  return { pizza, dataExtraTopping, isLoading, error };
};

export default connect(mapStateToProps, {
  increaseNumberOfPizzaInOrder,
  decreaseNumberOfPizzaInOrder,
  removePizzaOrder,
})(OrderedPizzaListElement);
