// import { createStore, applyMiddleware } from "redux";
import { createStore, applyMiddleware } from "../kredux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

function counterReducer(state = 0, action) {
  console.log("state", state);
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

// const store = createStore(counterReducer, applyMiddleware(thunk, logger));
const store = createStore(counterReducer, applyMiddleware(thunk, logger));

function logger() {
  return dispatch => action => {
    console.log(action.type + "执行了！");
    return dispatch(action);
  };
}

function thunk() {
  return dispatch => action => {
    if (typeof action === "function") {
      return action(dispatch);
    }
    return dispatch(action);
  };
}

export default store;
