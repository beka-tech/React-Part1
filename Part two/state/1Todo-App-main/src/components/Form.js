import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  function inputTextHandler(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputText("");
  }

  function submitTodoHandlerz() {}
  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onChange={submitTodoHandlerz}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
