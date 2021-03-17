export const getPizzasState = (store) => store.pizza;

export const getPizzas = (store) => {
  return getPizzasState(store) ? getPizzasState(store).data.data : [];
};
export const getPizzaById = (store, id) => {
  // console.log("Selector: pizza: getPizzas: ", getPizzas(store));
  return getPizzas(store).filter((pizza) => pizza.pizza_code === id);
};
