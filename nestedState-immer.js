const redux = require("redux");
const createStore = redux.createStore;
const produce = require('immer').produce;

//Working with nested states
const initialState = {
  name: "Mrinmoy",
  address: {
    street: "123 main St",
    city: "Boston",
    state: "MA",
  },
};

//Action type
const STREET_UPDATED = "STREET_UPDATED";

//Action creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

//reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       street: action.payload,
    //     },
    //   };
    produce(state, (draft) => {
        // we are updating the property directly but under the hood 
        //immer tansaltes the code to something that we have above
        draft.address.street = action.payload
    })
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(updateStreet("456 main St"));

unsubscribe();