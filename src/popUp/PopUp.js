import React from "react";
import "./PopUp.css";
//icons
import { FaTimes } from "react-icons/fa";

//redux
import { connect } from "react-redux";
import { getIsOpenedPopUpById } from "../redux/selectors/popUp";
import { closePopUp } from "../redux/actions/popUp";

const PopUp = (props) => {
  return (
    <div
      className={
        props.isOpenedPopUp ? "pizza-modal" : "pizza-modal hide-pop-up"
      }
    >
      {/* {console.log("PopUp: isOpenedPopUp: ", props.isOpenedPopUp)} */}
      <div className="pizza-modal-content">
        <header className="cart-header">
          <h1 className="header-title">{props.title}</h1>
          <FaTimes
            size={40}
            className="cart-closing-toggle"
            onClick={() => {
              props.closePopUp(props.id);
            }}
          />
        </header>
        {props.children}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;

  const isOpenedPopUp = getIsOpenedPopUpById(state, id);

  return { isOpenedPopUp };
};

export default connect(mapStateToProps, { closePopUp })(PopUp);
