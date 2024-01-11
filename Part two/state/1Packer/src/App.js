// import React, { useState } from "react";

import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItems}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far From Home</h1>;
}

function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

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

    handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
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

function PackingList({ items, handleDeleteItem, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            handleDeleteItem={handleDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handleDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}> ❌ &times;</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You Have X items on Your list, and You aleready packed x (X%)</em>
    </footer>
  );
}
