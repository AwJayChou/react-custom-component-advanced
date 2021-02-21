# react-advanced
antd form表单简单实现 class版本 和 hooks版本
react-dom react react-router 简单实现源码
portal传送门和树形控件等



## start

```bash
npm i // or yarn
npm start // or yarn start
```



## react-router-dom

src/custom-react-router-dom/index.js

```js
import BrowserRouter from "./BrowserRouter";
import Link from "./Link";
import Route from "./Route";
import Switch from "./Switch";
import Redirect from "./Redirect";
import withRouter from "./withRouter";
import {useHistory, useLocation, useRouteMatch, useParams} from "./hooks";

export {
  BrowserRouter,
  Link,
  Route,
  Switch,
  Redirect,
  withRouter,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams
};

```



## custom-redux

src/kredux.js

```js
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

```

