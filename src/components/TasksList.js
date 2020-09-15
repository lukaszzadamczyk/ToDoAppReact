import React from "react";
import Task from "./Task";
import "./TasksList.css";

const TasksList = (props) => {
  const tasks = props.tasks.map((task) => (
    <Task task={task} key={task.id} click={props.click} />
  ));

  return (
    <>
      <h2>to-do-list({tasks.length})</h2>
      {tasks}
    </>
  );
};

export default TasksList;
