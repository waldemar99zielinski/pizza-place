export const getOrderedPizzasState = (store) => store.order;

export const getOrderedPizzas = (store) =>
  getOrderedPizzasState(store)
    ? getOrderedPizzasState(store).orderedPizzas
    : [];

export const getOrderedPizzaById = (store, id) => {
  getOrderedPizzas(store);
};

export const getIsOrderedPizzaById = (store, id) =>
  getOrderedPizzas(store).indexOf(id) > -1 ? true : false;
