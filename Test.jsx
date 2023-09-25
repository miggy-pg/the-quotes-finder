import { useState } from "react";

export function SlowComponent() {
  const words = Array.from({ length: 30000 }, () => "WORD");

  return (
    <ul>
      {words.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Slow counter??</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

export default function Test() {
  return (
    <div>
      <h1>Slow counter??</h1>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
