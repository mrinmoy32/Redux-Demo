const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

//Action Creator is a fn that returns the action
//In React the covention use to use property "payload" for any additional inforamtion you want to send.
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

//Another action creator
const restockCake = (qty = 3) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
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
        numOfCakes: state.numOfCakes + action.payload,
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

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5));

// bindActionCreators was useful back in the days, not now
const actions = bindActionCreators({orderCake, restockCake}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(5)

unsubscribe();
