import { getPizzaPriceById } from "./pizza";
import { getExtraToppingPriceById } from "./extraTopping";
import { connect } from "react-redux";
export const getOrderedPizzasState = (store) => store.order;

export const getOrderedPizzas = (store) =>
  getOrderedPizzasState(store)
    ? getOrderedPizzasState(store).orderedPizzas
    : [];

export const getOrderedPizzaById = (store, id) => {
  return (
    getOrderedPizzas(store).find((p) => {
      return p.pizza_code === id;
    }) || []
  );
};

export const getIsOrderedPizzaById = (store, id) =>
  getOrderedPizzas(store).indexOf(id) > -1 ? true : false;

export const getOrderedPizzaPriceById = (store, id) => {
  const order = getOrderedPizzaById(store, id);
  // console.log("Selector: order: order: ", order);
  const pizzaPrice = getPizzaPriceById(store, id, order.size);
  const extraToppingPrice = getExtraToppingPriceById(
    store,
    order.extra_topping_code
  );
  // console.log(
  //   "Selector: order: pirce: ",
  //   pizzaPrice,
  //   " ",
  //   extraToppingPrice,
  //   " total: ",
  //   Number(pizzaPrice) + Number(extraToppingPrice)
  // );
  return order.numberOf * (Number(pizzaPrice) + Number(extraToppingPrice));
};

export const getOrderTotalCost = (store) => {
  const orderPrices = getOrderedPizzas(store).map((o) =>
    getOrderedPizzaPriceById(store, o.pizza_code)
  );
  console.log("Selector: order: pirce: ", orderPrices);
  return orderPrices.reduce((a, b) => a + b, 0);
};
