const redux = require("redux");
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
// thunk middleware
const thunkMiddleware = require("redux-thunk").default;
const reduxLogger = require('redux-logger');
// logger middleware
const logger = reduxLogger.createLogger();

const initialState = {
  loading: true,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEDED = "FETCH_USERS_SUCCEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEDED,
    payload: users,
  };
};
const fetchUsersfailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersfailure(error.message));
      });
  };
};
//thunkMiddleware brings to the table, the ability to return a function
//from an action creator rather than action object
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUsers());
