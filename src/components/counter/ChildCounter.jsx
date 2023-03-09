import React, { Component } from "react";

export class ChildCounter extends Component {
  render() {
    const { handleDecrement, handleIncrement } = this.props;

    return (
      <div>
        <button
          className="button"
          style={{ marginRight: 3 }}
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button className="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default ChildCounter;
