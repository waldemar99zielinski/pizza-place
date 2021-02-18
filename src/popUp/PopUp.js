import React from "react";
import "./PopUp.css";
//icons
import { FaTimes } from "react-icons/fa";

const PopUp = (props) => {
  return (
    <div className="pizza-modal">
      <div className="pizza-modal-content">
        <header class="cart-header">
          <h1 className="header-title">{props.title}</h1>
          <FaTimes size={40} className="cart-closing-toggle" />
        </header>
        {props.children}
      </div>
    </div>
  );
};

export default PopUp;
