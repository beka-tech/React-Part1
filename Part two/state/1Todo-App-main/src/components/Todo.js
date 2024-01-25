import React from "react";

function Todo({ text, todo, handleDelete, handleComplete }) {
  return (
    <div className="todo">
      <li className={`todo-itme ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={() => handleComplete(todo.id)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => handleDelete(todo.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
