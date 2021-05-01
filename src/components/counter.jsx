import React, { Component } from "react";
class Counter extends Component {
  /*constructor(){
    super();
   this.handleincrement=this.handleincrement.bind(this);
  }
*/
  getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <button
          className="btn btn-secondary btn-sn"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sn"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}
export default Counter;

//React.createElement('div')->babel will take it like this and inside it it will again dicide them into React.createElement('h1') and React.createElement('button')amd compile it.

//state contains any data that component might need

/*
 
 

   rendertags() {
    if (this.state.tags.length == 0) return <p>There are no tags!</p>;

    return 
    (
      <ul>
        {this.state.tags.map(tag =>  <li key={tag}>{tag}</li>)}
      </ul>
    );
  }


  */
