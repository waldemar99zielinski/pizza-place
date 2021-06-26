export const getExtraToppingsState = (store) => store.extraTopping;

export const getExtraToppings = (store) => {
  return getExtraToppingsState(store)
    ? getExtraToppingsState(store).data.data
    : [];
};
export const getExtraToppingById = (store, id) => {
  // console.log("Selector: extraTopping: getExtraToppings: ", getExtraToppings(store));
  return getExtraToppings(store).find(
    (extraTopping) => extraTopping.extra_topping_code === id
  );
};
export const getExtraToppingPriceById = (store, id) => {
  // console.log("Selector: extraTopping: ", getExtraToppingById(store, id), id);

  return getExtraToppingById(store, id)
    ? getExtraToppingById(store, id).price
    : 0;
};
