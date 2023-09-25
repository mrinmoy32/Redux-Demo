const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

// Redux Toolkit (RTK under the hood uses immer library, RTK handles state updation on our behalf)
// createSlice takes care of (action type consts, action creators, action objects, 
// reducer switch statement and handling immutable updates)
// createSlice generates action.type key using name/reducers.key. e.g: cake/ordered 
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer; // Defaul export
module.exports.cakeActions = cakeSlice.actions; // Named export