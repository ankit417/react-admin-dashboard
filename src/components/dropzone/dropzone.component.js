import React, { useState, useEffect } from "react";

const todoData = ["apple", "banana", "mango"];
const completedData = ["pineapple", "papaya"];

export const DropZone = () => {
  const [todo, setTodo] = useState(todoData);
  const [completed, setCompleted] = useState(completedData);
  const [transferData, setTransferData] = useState(null);

  const dragStart = (e, item, index) => {
    setTransferData(index);
    console.log("index", index);
  };

  const dropHere = (e, category) => {
    console.log("Drop zone drop", transferData);
    let data = todo[transferData];
    setCompleted((prev) => [...prev, data]);
    let todoNew = todo;
    todoNew.splice(transferData, 1);
    setTodo(todoNew);
  };
  return (
    <div className="dropzone-wrapper">
      <div className="todo">
        {todo.map((item, index) => {
          return (
            <div
              draggable
              className="todo-item"
              key={index}
              onDragStart={(e) => dragStart(e, item, index)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div
        className="completed"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => dropHere(e, "complete")}
      >
        {completed.map((item, index) => {
          return (
            <div key={index} className="completed-item">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
