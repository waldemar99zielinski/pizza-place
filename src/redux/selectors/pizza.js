export const getPizzasState = (store) => store.pizza;

export const getPizzas = (store) => {
  return getPizzasState(store) ? getPizzasState(store).data.data : [];
};
export const getPizzaById = (store, id) => {
  // console.log("Selector: pizza: getPizzas: ", getPizzas(store));
  return getPizzas(store).filter((pizza) => pizza.pizza_code === id);
};
export const getPizzaPriceById = (store, id, size) => {
  const SMALL = "S";
  const LARGE = "L";
  const pizza = getPizzaById(store, id);
  return size === SMALL ? pizza.price_small : pizza.price_big;
};
