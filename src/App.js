import { useState } from "react";
import "./App.css";
import Actions from "./componentes/Actions/Actions";
import ComponentContext from "./componentes/Context/Context";
import Key from "./componentes/Key/Key";

function App() {
  const [number, setNumber] = useState([]);
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"];
  const [telephone, setTelephone] = useState(false);
  const [callActive, setCallActive] = useState(false);

  const printDisplay = (event) => {
    //console.log(event.target.textContent);
    if (event.target.className === "key" && number.length < 9) {
      setNumber(number + event.target.textContent);
      //number = key;
    }
    if (event.target.className === "key big") {
      setNumber("");
      setTelephone(false);
    }
    if (number.length >= 8) {
      setTelephone(true);
    } else {
      setTelephone(false);
    }
  };
  const hangUp = (event) => {
    setCallActive(false);
    setNumber("");
    setTelephone(false);
  };
  const calling = (event) => {
    if (number.length >= 8) {
      setCallActive(true);
    }
  };
  //  const deleteGentlemanById = (id) => {
  //    setGentlemen(gentlemen.filter((gentleman) => gentleman.id !== id));
  //  };
  // if (calling === true) {

  // }

  return (
    <ComponentContext.Provider value={{ calling, hangUp }}>
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
          <Actions
            number={number}
            callActive={callActive}
            className="actions"
            numberOK={telephone}
            //onCalling={() => calling()}
          />
        </main>
      </div>
    </ComponentContext.Provider>
  );
}

export default App;
