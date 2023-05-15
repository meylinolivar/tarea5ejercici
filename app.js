import React, { useState } from "react";

function CounterApp() {
  // Definimos el estado inicial del contador con un valor de 0
  const [count, setCount] = useState(0);

  // Funciones que se llaman cuando se hace clic en los botones para incrementar o decrementar el contador
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Renderizamos la aplicación, que consiste en el contador y dos botones para incrementar o decrementar su valor
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}



export default CounterApp;
