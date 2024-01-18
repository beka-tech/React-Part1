import { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = Math.floor(bill * ((percentage1 + percentage2) / 2 / 100));

  function handleRest() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onsetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <OutPut tip={tip} bill={bill} />
          <Rest handleRest={handleRest} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, onsetBill }) {
  return (
    <div>
      <label>How Much Is The Bill </label>
      <input
        type="text"
        placeholder="Enter Bill"
        value={bill}
        onChange={(e) => onsetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function OutPut({ tip, bill }) {
  return (
    <div>
      <h2>
        You pay {bill} (${bill} + ${tip} tip)
      </h2>
    </div>
  );
}

function Rest({ handleRest }) {
  return (
    <div>
      <button onClick={() => handleRest()}>Rest</button>
    </div>
  );
}
