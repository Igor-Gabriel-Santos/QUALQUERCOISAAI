import React, {useState} from 'react'

function Votacao() {

  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [contador3, setContador3] = useState(0);

 

  return (
    <div className='divFoda'>
      <h1>LOL é bom ?</h1>
      <br/>
      <br/>
      <button onClick={() => setContador(contador + 1)}>Não</button>
      <br/>
      <br/>
      <button onClick={() => setContador2(contador2 + 1)}>Sim</button>
      <br/>
      <br/>
      <button onClick={() => setContador3(contador3 + 1)}>Nunca vai ser</button>
      <br/>
      <br/>
      <p>A opção "Não" teve {contador} votos</p>
      <p>A opção "Sim" teve {contador2} votos</p>
      <p>A opção "Nunca vai ser" teve {contador3} votos</p>
    </div>
  )
  }

export default Votacao