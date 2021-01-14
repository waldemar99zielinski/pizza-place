import React from "react";
import "./PizzaPanel.css";
import { AiFillStar } from "react-icons/ai";
const PizzaPanel = (props) => {
  return (
    <div className="pizza-container" onClick={() => console.log("clicked")}>
      <div className="pizza-photo-container">
        <img src={props.photo} alt="pizza" className="pizza-photo" />
      </div>

      <h2>{props.name.toUpperCase()}</h2>
      <div className="pizza-info-container">
        <div className="pizza-rating">
          <h3>{props.rating}</h3>
          <AiFillStar />
        </div>
        <div className="pizza-prize">
          <h3>{props.price}</h3>
          <h3>zl</h3>
        </div>
      </div>
    </div>
  );
};

export default PizzaPanel;
