const CAKE_ORDERED = "CAKE_ORDERED";

//Action Creator is a fn that returns the action
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};
