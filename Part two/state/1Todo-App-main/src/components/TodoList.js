import React from "react";

const TodoList = ({ setInputText }) => {
  return (
    <div className="todo-container">
      <ul class="todo-list">
        <li> {setInputText}</li>
      </ul>
    </div>
  );
};

export default TodoList;
