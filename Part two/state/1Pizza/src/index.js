import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    id: 1,
    ingredients: "Bread with italian olive oil and rosemary",
    name: "Focaccia",

    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    id: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const stl = { color: "red", fontSize: "50px" };
  return (
    <header className="header">
      <h1> Fast React Pizza Co.</h1>
      <h2>Menu</h2>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  const sold = pizzaData.filter((pizza) => pizza.soldOut === true);
  const soldnum = sold.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <input type="text" placeholder="item..."></input>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.id} />
          ))}
        </ul>
      ) : (
        <p>no data</p>
      )}
      <p>You Have {numPizzas} Pizza</p>
      <p>You Sold {soldnum} Pizza</p>
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openhour = 10;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closehour={closehour} />
      ) : (
        "We are Close currently  " + hour + " We Open At " + openhour
      )}
    </footer>
  );
}
function Order({ closehour }) {
  return (
    <div className="order">
      <p> We are Open Until {closehour}</p>
      <button className="btn">Button</button>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  const [pizza, setPizza] = useState([]);
  function handleDeleteItem(id) {
    setPizza((pizzaData) => pizzaData.filter((pizza) => pizza.id !== id));
  }
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt="spinaci"></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "soldOut Yes" : pizzaObj.price}</span>
        <input type="checkbox" />
        <button onClick={() => handleDeleteItem(pizzaObj.id)} className="btn">
          Delete
        </button>
      </div>
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
