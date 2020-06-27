import React, { Component } from "react";
import store from "../store/";

export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
      // this.setState({});
    });
  }
  minus = () => {
    store.dispatch({ type: "minus" });
  };
  add = () => {
    store.dispatch({ type: "add" });
  };
  asyAdd = () => {
    store.dispatch(dispatch => {
      setTimeout(() => {
        dispatch({ type: "add" });
      }, 1000);
    });
  };
  render() {
    console.log("store", store);
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.asyAdd}>asyAdd</button>
      </div>
    );
  }
}
