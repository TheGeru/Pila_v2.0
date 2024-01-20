import React, { useState } from "react";
import Button from "@mui/joy/Button";

const intensidades = ["Conecte el cargador", "cargado al 20%", "cargado al 40%", "cargado al 80%", "cargado al 100%"];
const imagenes =[
  '/pila al 0.png',
  '/pila al 20.png',
  '/pila al 40.png',
  '/pila al 80.png',
  '/pila al 100.png'
]
export function Pila() {
  const [indice, setIndice] = useState(0);

  const aumentarIntensidad = () => {
    if (indice < intensidades.length - 1) {
      setIndice(indice + 1);
    } else {
      setIndice(indice);
    }
  };

  const disminuirIntensidad = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    } else {
      setIndice(indice);
    }
  };

  const resetearIntensidad = () => {
    setIndice(0);
  };

  return (
    <div>
      
      <img
      src={imagenes[indice]} 
      alt={`Ilustración para ${intensidades[indice]}`} 
      style={{ width: "250px", height: "250px" }} />

      <div>Estado de la luz: {intensidades[indice]}</div>
      <Button variant="solid" color="primary" onClick={aumentarIntensidad}>
        Aumentar
      </Button>
      <Button variant="solid" color="primary" onClick={disminuirIntensidad}>
        Disminuir
      </Button>
      <Button variant="solid" color="primary" onClick={resetearIntensidad}>
        Resetear
      </Button>
    </div>
  );
}