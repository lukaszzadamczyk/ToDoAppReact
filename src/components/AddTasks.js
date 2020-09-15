import React, { Component } from "react";
import "./AddTasks.css";
class AddTasks extends Component {
  state = {
    tittle: "",
  };

  handleChange = (e) => {
    this.setState({
      tittle: e.target.value,
    });
  };

  handleClick = () => {
    const { tittle } = this.state;

    if (tittle.length > 2) {
      const add = this.props.click(tittle);
      if (add) {
        this.setState({
          tittle: "",
        });
      }
    } else {
      alert("too short a word!");
    }
  };
  render() {
    return (
      <>
        <input
          className="add"
          placeholder="add task"
          type="text"
          value={this.state.tittle}
          onChange={this.handleChange}
        />
        <button className="add" onClick={this.handleClick}>
          Add
        </button>
      </>
    );
  }
}

export default AddTasks;
