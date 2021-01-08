import React from "react";
import "./PizzaPanel.css";
import { AiFillStar } from "react-icons/ai";
const PizzaPanel = () => {
  return (
    <div className="pizza-container" onClick={() => console.log("clicked")}>
      <div>
        <img
          src="https://assets.puzzlefactory.pl/puzzle/238/423/original.jpg"
          alt="pizza"
          className="pizza-photo"
        />
      </div>

      <h2>TITLE</h2>
      <div className="pizza-info-container">
        <div className="pizza-rating">
          <h3>4.3</h3>
          <AiFillStar />
        </div>
        <div className="pizza-prize">
          <h3>12</h3>
          <h3>zl</h3>
        </div>
      </div>
    </div>
  );
};

export default PizzaPanel;
