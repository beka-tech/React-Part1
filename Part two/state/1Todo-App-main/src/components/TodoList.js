import React from "react";

const TodoList = ({ setInputText }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <li> {setInputText}</li>
      </ul>
    </div>
  );
};

export default TodoList;
