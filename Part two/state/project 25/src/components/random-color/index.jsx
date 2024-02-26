import { useState } from "react";

export default function RandomColor() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("");

  function handlecreateRandomHex() {
    const colorCode = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${colorCode}`);
  }
  function handlecreateRandomRgb() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    const RGB = ` rgb(${R},${G},${B})`;
    setColor(RGB);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: "center",
      }}
    >
      <button onClick={() => setTypeofColor("hex")}>HEX Color</button>
      <button onClick={() => setTypeofColor("rgb")}>RGB Color</button>
      <button
        onClick={
          typeofColor === "hex" ? handlecreateRandomHex : handlecreateRandomRgb
        }
      >
        Generate Random Color
      </button>
      <div style={{}}>
        <h3>{typeofColor}</h3>
        <h3> {color}</h3>
      </div>
    </div>
  );
}
