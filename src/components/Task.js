import React from "react";
import "./Task.css";

const Task = (props) => {
  return (
    <>
      <p className="task">
        {props.task.tittle}{" "}
        <button className="task" onClick={() => props.click(props.task.id)}>
          delete
        </button>
      </p>
    </>
  );
};

export default Task;
