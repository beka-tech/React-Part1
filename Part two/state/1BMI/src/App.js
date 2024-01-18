import { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <BMICalculator />
    </div>
  );
}

function BMICalculator() {
  //const [bmi, setBmi] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [Height, setHeight] = useState(0);

  const bmix = (Weight / Height ** 2) * 10000;
  const bmi = Math.floor(bmix);
  return (
    <>
      <EnterWeight Weight={Weight} onWeight={setWeight} />
      <EnterHeight Height={Height} onHeight={setHeight} />
      <Out BMI={bmi} />
      <Reset />
    </>
  );
}

function EnterWeight({ onWeight, Weight }) {
  return (
    <>
      <p>EnterWeight</p>

      <input
        type="range"
        min="0"
        max="100"
        value={Weight}
        onChange={(e) => onWeight(Number(e.target.value))}
      />
      <label>{Weight} KG</label>
    </>
  );
}

function EnterHeight({ onHeight, Height }) {
  return (
    <>
      <p>EnterHeight</p>
      <input
        type="range"
        min="0"
        max="200"
        value={Height}
        onChange={(e) => onHeight(Number(e.target.value))}
      />
      <label>{Height} CM</label>
    </>
  );
}

function Out({ BMI }) {
  return (
    <>
      <p> {BMI}</p>
    </>
  );
}

function Reset({ bmi }) {
  return (
    <>
      <p>Rest</p>
    </>
  );
}
