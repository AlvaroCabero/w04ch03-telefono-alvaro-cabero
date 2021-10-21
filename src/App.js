import { useState } from "react";
import "./App.css";
import Display from "./componentes/Display/Display";
import Key from "./componentes/Key/Key";

function App() {
  const [number, setNumber] = useState([]);
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"];

  const printDisplay = (event) => {
    //console.log(event.target.textContent);
    if (event.target.className === "key" && number.length < 9) {
      setNumber(number + event.target.textContent);
      //number = key;
    }
    if (event.target.className === "key big") {
      setNumber("");
    }
  };

  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            {keys.map((key, index) => (
              <Key
                key={index === "delete" ? 10 : index}
                className="key"
                number={key}
                actionOnClick={(event) => {
                  printDisplay(event);
                }}
              />
            ))}
          </ol>
        </div>
        <div className="actions">
          <Display number={number} className="number" />
          <a href="a" className="call">
            Call
          </a>

          <a href="b" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
