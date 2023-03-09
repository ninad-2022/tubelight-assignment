import React, { Component } from "react";
import ChildCounter from "./ChildCounter";

export default class ParentCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };
  render() {
    const { counter } = this.state;
    return (
      <div className="center">
        <div>
          <h1>Counter: {counter}</h1>
        </div>
        <div>
          <ChildCounter
            counter={counter}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        </div>
      </div>
    );
  }
}
