import React from "react";
import "./Cart.css";
import pizzaSizes from "../../utils/pizzaSizes";

//redux
import { connect } from "react-redux";
import { setSize } from "../../redux/actions/order";
const SizeSelect = (props) => {
  return (
    <div className="order-table-cell">
      <h2>size: </h2>
      <select onChange={(e) => props.setSize(props.id, e.target.value)}>
        {pizzaSizes.map((size) => {
          return <option value={size}>{size}</option>;
        })}
      </select>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const dataExtraTopping = state.extraTopping.data;
  const isLoading = state.extraTopping.isLoading;
  const error = state.extraTopping.error;

  return { dataExtraTopping, isLoading, error };
};
export default connect(mapStateToProps, { setSize })(SizeSelect);
