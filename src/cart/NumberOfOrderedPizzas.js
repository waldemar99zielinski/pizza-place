import React from "react";
import "./Cart.css";

//redux
import { connect } from "react-redux";
import { getPizzaById } from "../redux/selectors/pizza";
import { fetchExtraToppings } from "../redux/actions/extraToppings";
import {
  increaseNumberOfPizzaInOrder,
  decreaseNumberOfPizzaInOrder,
} from "../redux/actions/order";

const NumberOfOrderedPizzas = (props) => {
  //   console.log("NumberOfOrderedPizzas: ", props);
  return (
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
  );
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;

  const pizza = getPizzaById(state, id);
  //   console.log("NumberOfOrderedPizzas: ", id, " ", pizza);
  return { pizza };
};
export default connect(mapStateToProps, {
  increaseNumberOfPizzaInOrder,
  decreaseNumberOfPizzaInOrder,
})(NumberOfOrderedPizzas);
