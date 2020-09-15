import React, { Component } from "react";
import "./App.css";
import AddTasks from "./AddTasks";
import TasksList from "./TasksList";

class App extends Component {
  counter = 0;
  state = {
    tasks: [],
  };

  handleDelete = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks,
    });
  };

  handleAdd = (tittle) => {
    const tasks = {
      id: this.counter,
      tittle,
    };
    this.counter++;
    this.setState((state) => ({
      tasks: [...state.tasks, tasks],
    }));
    console.log(tasks);
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>ToDoApp</h1>
        <AddTasks click={this.handleAdd} />
        <hr />
        <TasksList tasks={this.state.tasks} click={this.handleDelete} />
      </div>
    );
  }
}

export default App;
