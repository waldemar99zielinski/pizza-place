import React from "react";
import "./PizzaPanel.css";
import { AiFillStar } from "react-icons/ai";

//redux
import { connect } from "react-redux";
import { addPizzaOrder } from "../redux/actions/order";

const PizzaPanel = (props) => {
  const handleAddOrderElement = () => {
    props.addPizzaOrder(props.id, null, "S", 1);
  };

  return (
    <div
      className="pizza-container"
      onClick={() => {
        // console.log("clicked");
        handleAddOrderElement();
      }}
    >
      <div className="pizza-photo-container">
        <img src={props.image} alt="pizza" className="pizza-photo" />
      </div>

      <h2>{props.name.toUpperCase()}</h2>
      <div className="pizza-info-container">
        <div className="pizza-rating">
          <h3>S: {props.price_small / 100}</h3>
          <h3>usd</h3>
        </div>
        <div className="pizza-prize">
          <h3>L: {props.price_big / 100}</h3>
          <h3>zl</h3>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addPizzaOrder })(PizzaPanel);
