import React from "react";
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far From Home</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your tips</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">List</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You Have X items on Your list, and You aleready packed x (X%)</em>
    </footer>
  );
}
