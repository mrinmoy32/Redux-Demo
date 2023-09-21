const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

//Action Creator is a fn that returns the action
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

//Another action creator
const restockCake = (qty = 3) => {
  return {
    type: CAKE_RESTOCKED,
    quantity: qty,
  };
};

//State
const initialState = {
  numOfCakes: 10,
  numOfpastries: 25,
  numOfbreads: 30,
};
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    default:
      return state;
  }
};

//lets create the store, it takes reducer as parameter which in turn has initiaState
const store = createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(5));

unsubscribe();
