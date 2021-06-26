import React from "react";
import "./Cart.css";

//redux
import { connect } from "react-redux";
import { setExtraToppings } from "../../redux/actions/order";
const ExtraToppingsSelect = (props) => {
  return (
    <div className="order-table-cell">
      <select
        onChange={(e) => props.setExtraToppings(props.id, e.target.value)}
      >
        {props.dataExtraTopping.data.map((extraTopping) => {
          return (
            <option value={extraTopping.extra_topping_code}>
              {extraTopping.name}
            </option>
          );
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
export default connect(mapStateToProps, { setExtraToppings })(
  ExtraToppingsSelect
);
