import React, { Component } from "react";

class Counter extends React.Component {
  componentDidUpdate(prevProp, prevState) {
    console.log("prevProp", prevProp);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-md"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-md m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    console.log(this.props.counter);
    const { value } = this.props.counter;
    console.log(value);
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
