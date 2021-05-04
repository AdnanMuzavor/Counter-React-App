import React from "react";
class itemlist extends Component {
  state = { items: [], text: "" };
  render() {
    return (
      <>
        <h3>TODO</h3>
        <todolist items={this.state.items} />
        <form onSubmit={this.handle_submit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handle_value}
            value={this.state.text}
          />
          <button>Add_#{this.state.item.length}</button>
        </form>
      </>
    );
  }

  handle_value = () => {
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

export default itemlist;
