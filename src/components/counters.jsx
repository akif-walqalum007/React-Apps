import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    console.log("Counter props", this.props);
    const { onReset, onDelete, onIncrement, counters, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
