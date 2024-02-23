import { useState } from "react";
import data from "./data";
import "./style.css";
export default function Accordian() {
  const [isSelected, setIsSelected] = useState(null);

  function passid(getcurid) {
    setIsSelected(getcurid === isSelected ? null : getcurid);
  }

  console.log(isSelected);
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div onClick={() => passid(dataItem.id)} className="title">
              <h2>{dataItem.question}</h2>
              <span>+</span>
              {isSelected === dataItem.id ? (
                <div>
                  <h2 className="clicked">{dataItem.answer}</h2>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
