export const getExtraToppingsState = (store) => store.pizza;

export const getExtraToppings = (store) => {
  return getExtraToppingsState(store)
    ? getExtraToppingsState(store).data.data
    : [];
};
export const getExtraToppingById = (store, id) => {
  // console.log("Selector: extraTopping: getExtraToppings: ", getExtraToppings(store));
  return getExtraToppings(store).filter(
    (extraTopping) => extraTopping.extra_topping_code === id
  );
};
export const getExtraToppingPriceById = (store, id) =>
  getExtraToppingById(store, id) ? getExtraToppingById(store, id).price : 0;
