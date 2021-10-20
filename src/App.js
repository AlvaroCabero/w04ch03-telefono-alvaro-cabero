import "./App.css";
import Display from "./componentes/Display/Display";

function App() {
  const number = 6;
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <li>
              <button className="key">1</button>
            </li>
            <li>
              <button className="key">2</button>
            </li>
            <li>
              <button className="key">3</button>
            </li>
            <li>
              <button className="key">4</button>
            </li>
            <li>
              <button className="key">5</button>
            </li>
            <li>
              <button className="key">6</button>
            </li>
            <li>
              <button className="key">7</button>
            </li>
            <li>
              <button className="key">8</button>
            </li>
            <li>
              <button className="key">9</button>
            </li>
            <li>
              <button className="key">0</button>
            </li>
            <li>
              <button className="key big">delete</button>
            </li>
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
