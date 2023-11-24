import React, {useState} from 'react'
 import './Todos.css';
function Conversor() {
    const [numero1, setNumero1] = useState('')

    const calcular = () => {
        const resultado =  Number(numero1) * 4.90 ;
        -
            alert(" O Valor convertido foi de: " +resultado + " Reais")
        
    }

    return(
        <div className='divFoda'>
            <h1>Calcular o dolar </h1>
            <br/>
            <br/>
            <h4>Digite a quantidade de dólares</h4>
            <input type='number' value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={calcular}> Calcular conversão</button>
            
        </div>
    )

}

export default Conversor