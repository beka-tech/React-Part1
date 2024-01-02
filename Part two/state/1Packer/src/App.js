// import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];
export default function App() {
  // const [isopen, setIsopen] = useState(true);

  // function Close() {
  //   setIsopen(false);
  // }
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
  function handleSubmit(e) {
    e.PreventDefault();
    console.log(e);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your tips</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..."></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity}
          {item.description}
        </span>
        <button> ❌ &times;</button>
      </li>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You Have X items on Your list, and You aleready packed x (X%)</em>
    </footer>
  );
}
