import React, { useEffect } from "react";

//redux
import { connect, useDispatch } from "react-redux";
import { fetchPizzas } from "../../redux/actions/pizza";

import PizzaPanel from "./PizzaPanel";
import "./PizzaPanel.css";
const PizzaOverView = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  const { isLoading, data, error } = props;
  const isEmpty = data.length === 0;
  return (
    <div className="panel-container">
      {isEmpty ? (
        isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <h2>Something went wrong :o</h2>
        )
      ) : (
        data.data.map((pizza) => {
          return (
            <PizzaPanel
              key={pizza.pizza_code}
              id={pizza.pizza_code}
              name={pizza.name}
              price_small={pizza.price_small}
              price_big={pizza.price_big}
              image={pizza.image}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const data = state.pizza.data;
  const isLoading = state.pizza.isLoading;
  const error = state.pizza.error;
  return { isLoading, data, error };
};

export default connect(mapStateToProps)(PizzaOverView);
