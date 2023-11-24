import React, {useState} from 'react'

function Contador() {

    const [contador, setContador] = useState(0);

   
  
    return (
      <div>
        <p>Você clicou {contador} vezes</p>
        <button onClick={() => setContador(contador + 1)}>Clique aqui para adicionar ao contador</button>
        <button onClick={() => setContador(contador - 1)}>Clique aqui para retirar do contador</button>
      </div>
    )
  }

export default Contador