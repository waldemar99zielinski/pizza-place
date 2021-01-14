import React from "react";
import PizzaPanel from "./PizzaPanel";

const PizzaOverView = ({ data }) => {
  return (
    <>
      {data.map((pizza) => {
        return (
          <PizzaPanel
            id={pizza.id}
            name={pizza.name}
            rating={pizza.rating}
            price={pizza.price}
            photo={pizza.photo}
          />
        );
      })}
    </>
  );
};

export default PizzaOverView;
