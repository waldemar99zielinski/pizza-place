import React, { useEffect } from "react";
//redux
import { connect, useDispatch } from "react-redux";
import { fetchPizzas } from "./redux/actions/pizza";
import "./Panel.css";

//components
import PizzaOverView from "./pizzaPanel/PizzaOverView";

const Panel = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);
  return (
    <div>
      <div className="panel-container">
        {console.log("Panel ", props.pizza)}
        <PizzaOverView data={props.pizza.data.data} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const pizza = state.pizza;
  return { pizza };
};

export default connect(mapStateToProps)(Panel);
