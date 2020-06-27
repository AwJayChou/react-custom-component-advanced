export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState = undefined;
  const listeners = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    listeners.map(listener => listener());
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  dispatch({ type: "@@REDUX/OOOOOOO" });
  return {
    getState,
    dispatch,
    subscribe
  };
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);
    let dispatch = store.dispatch;
    const midAPi = {
      getState: store.getState,
      dispatch
    };
    const chain = middlewares.map(mw => mw(midAPi));
    dispatch = compose(...chain)(dispatch);
    return { ...store, dispatch };
  };
}

function compose(...funcs) {
  const len = funcs.length;
  if (len === 0) {
    return arg => arg;
  }
  if (len === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
