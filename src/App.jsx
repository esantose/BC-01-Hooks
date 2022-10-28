import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handle1Click = (numero) => {
    setCount(count + numero);
  };

  const handle2Click = (numero) => {
    setCount(prev => prev + numero);
  };  

  return (
    <div className="App">
      <h1>Hook: Use State</h1>
      <h2>Counter:   {count}</h2>
      <button onClick={() => setCount(count + 3)}>Add 3</button>
      <button onClick={() => handle1Click(5)}>Add 5</button>
      <button onClick={() => handle2Click(7)}>Add 7</button>
    </div>
  );
}

export default App;