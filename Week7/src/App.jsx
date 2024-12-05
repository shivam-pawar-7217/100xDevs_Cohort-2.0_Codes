import { useContext, useState, createContext } from "react";

// Create a Context
export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Provide both count and setCount via Context */}
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext); // Access count from Context
  return <div>Count: {count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext); // Access both count and setCount from Context

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
