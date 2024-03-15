import React from 'react';
import Saludo from './Saludo';
import Mensaje from './Mensaje'

function App(){
  return (
    <div>
      <Saludo nombre="Juan"/>
      <Mensaje mensaje="Bienvenido a mi aplicacion React 1234567890"/>
    </div>
  )
}

export default App;
