import "./App.css";
import Display from "./componentes/Display/Display";
import Key from "./componentes/Key/Key";

function App() {
  let number = 0;
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"];

  const print = (event) => {
    console.log(event.target.textContent);
    // if (event.target.className === "key") {
    number = event.target.textContent;
    //number = key;
    // }
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
                  print(event);
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
