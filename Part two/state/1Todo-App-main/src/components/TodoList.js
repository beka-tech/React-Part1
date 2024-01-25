import React from "react";
import Todo from "./Todo";

function TodoList({ todos, handleDelete, setTodos, handleComplete }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {" "}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            setTodos={setTodos}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
