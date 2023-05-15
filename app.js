import React, { useState } from "react";

function TextSectionApp() {
  // Definimos el estado para controlar si la sección de texto debe mostrarse o no
  // Inicialmente, la sección está oculta, por lo que el valor es 'false'
  const [showText, setShowText] = useState(false);

  // Función que se llama cuando se hace clic en el botón para mostrar u ocultar la sección de texto
  const handleButtonClick = () => {
    // Cambiamos el valor del estado a su opuesto (es decir, 'true' si estaba en 'false', y viceversa)
    setShowText(!showText);
  };

  // Renderizamos la aplicación, que consiste en un botón y una sección de texto que se muestra u oculta según el estado del valor 'showText'
  return (
    <div>
      <h1>Text Section App</h1>
      <button onClick={handleButtonClick}>
        {showText ? "Hide Text" : "Show Text"}
      </button>
      {showText && (
        <p>
    La naturaleza es un concepto utilizado 
    para referirse al mundo material o universo material,
    incluyendo los fenómenos del mundo físico, 
    la materia inerte generada como parte de procesos
    sin la intervención humana,
    y al fenómeno de la vida,
    que incluye también a los humanos.
        </p>
      )}
    </div>
  );
}

export default TextSectionApp;
