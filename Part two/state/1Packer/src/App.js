// import React, { useState } from "react";

import { useState } from "react";

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
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: `${new Date().getMinutes().toString().padStart(2, "0")}${new Date()
        .getSeconds()
        .toString()
        .padStart(2, "0")}`,
    };
    console.log(newItem);
    setDescription("");
    setQuantity("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your tips</h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  const [isopen, setIsopen] = useState(true);
  return (
    <>
      {isopen ? (
        <li>
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity}
            {item.description}
          </span>
          <button onClick={() => setIsopen((Is) => !Is)}> ❌ &times;</button>
        </li>
      ) : (
        ""
      )}
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
