
import React, { Component } from "react";
import Itemfromlist from "./itemfromlist";
class Itemlist extends Component {
  state = { items: [], text: "" };
  render() {
    return (
      <>
        <h3>TODO</h3>
        <Itemfromlist items={this.state.items} />
        <form onSubmit={this.handle_submit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handle_value}
            value={this.state.text}
          />
          <button>Add_#{this.state.items.length}</button>
        </form>
      </>
    );
  }

  handle_value = (e) => {
      
    this.setState({ text: e.target.value });
  };
  handle_submit = (e) => {
   e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newitem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newitem),
      text: " ",
    }));
  };
}

export default Itemlist;
