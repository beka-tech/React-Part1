import { useState } from "react";
import "./index.css";

const message = ["First ", "Second ", "Third "];

function App() {
  const [step, setStep] = useState(1);
  //const [test, setTest] = useState({ name: "Beka" });
  const [isopen, setIsopen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);

      // setStep((s) => s + 1);
      // setStep(step + 1);
    }
    // setTest({ name: "Aman" });
  }
  // function closeit() {
  //   setIsopen(false);
  // }
  return (
    <div>
      <button className="close" onClick={() => setIsopen((Is) => !Is)}>
        &times;
      </button>
      {console.log(isopen)}
      {isopen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {message[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: " #7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: " #7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>Close</p>
      )}
    </div>
  );
}
export default App;
