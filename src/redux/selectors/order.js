import { getPizzaPriceById } from "./pizza";
import { getExtraToppingPriceById } from "./extraTopping";
export const getOrderedPizzasState = (store) => store.order;

export const getOrderedPizzas = (store) =>
  getOrderedPizzasState(store)
    ? getOrderedPizzasState(store).orderedPizzas
    : [];

export const getOrderedPizzaById = (store, id) => {
  return getOrderedPizzas(store).filter((p) => {
    return p.pizza_code === id;
  });
};

export const getIsOrderedPizzaById = (store, id) =>
  getOrderedPizzas(store).indexOf(id) > -1 ? true : false;

export const getOrderedPizzaPriceById = (store, id) => {
  console.log("Selector: order: orderid: ", id);
  const order = getOrderedPizzaById(store, id);
  const pizzaPrice = getPizzaPriceById(store, id, order.size);
  const extraToppingPrice = getExtraToppingPriceById(
    store,
    order.extra_topping_code
  );
  console.log(
    "Selector: order: pirce: ",
    pizzaPrice,
    " ",
    extraToppingPrice,
    " total: ",
    Number(pizzaPrice) + Number(extraToppingPrice)
  );
  return Number(pizzaPrice) + Number(extraToppingPrice);
};
