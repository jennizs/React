import { useState } from "react"

function Contador() {


  const [valor, setvalor] = useState(0);

function handleClick(){
  setvalor(valor + 1);
}

// console.log("Variavel valor:" + valor);
  return (
    <div>
      
      <h2>Componente Contador</h2>

      <p>O valor atual é: {valor} </p>

      <button onClick={handleClick}>Adicionar 1</button>
      
      
      </div>
  )
}

export default Contador