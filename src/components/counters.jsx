import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          RESET
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default counters;

/*
<Counter/>
<Counter/>
<Counter/>
<Counter/>

 onDecrement={this.Decrement}
 onDelete={this.handledelete}
 onIncrement={this.handleIncrement}

*/
