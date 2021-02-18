import React from "react";

const extraToppingsSelect = ({ extraToppings }) => {
  return (
    <select>
      {extraToppings.map((extraTopping) => {
        return (
          <option value={extraTopping.extra_topping_code}>
            {extraTopping.name}
          </option>
        );
      })}
    </select>
  );
};

export default extraToppingsSelect;
