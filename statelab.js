const { useState } = React;

const App = () => {
  // Initialize state for two counters
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <div>
      <h1>React Stateful Counter</h1>

      <div className="controls">
        <CounterSection label="Counter A" count={countA} setCount={setCountA} />
        <CounterSection label="Counter B" count={countB} setCount={setCountB} />
      </div>

      <Results
        countA={countA}
        countB={countB}
        setCountA={setCountA}
        setCountB={setCountB}
      />
    </div>
  );
};

const CounterSection = ({ label, count, setCount }) => {
  return (
    <div className="counter-section">
      <h3>
        {label}: {count}
      </h3>

      <button onClick={() => setCount(count + 1)}>
        + Increment {label.split(" ")[1]}
      </button>

      <button onClick={() => setCount(count - 1)}>
        - Decrement {label.split(" ")[1]}
      </button>

      <br />

      <button onClick={() => setCount(0)}>RESET</button> 
    </div>
  );
};

const Results = ({ countA, countB, setCountA, setCountB }) => {
  return (
    <div className="results">
      <h2>Calculations</h2>
      
      <p>
        {countA} + {countB} = {countA + countB}
      </p>
      <p>
        {countA} - {countB} = {countA - countB}
      </p>
      <p>
        {countA} * {countB} = {countA * countB}
      </p>
      <p>
        {countA} / {countB} ={" "}
        {countB !== 0 ? (countA / countB).toFixed(2) : "Cannot divide by zero"}
      </p>

      <button onClick={() => {(setCountA(0), setCountB(0));}}> 
        RESET ALL
      </button>

    </div>
  );
};

// --- Render the App to the DOM ---
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
