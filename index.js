const CAKE_ORDERED = "CAKE_ORDERED";

//Action Creator is a fn that returns the action
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

//State
const initialState = {
  numOfCakes: 10,
  anotherProperty: 0
};
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
