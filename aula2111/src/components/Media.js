import React, {useState} from 'react'
 import './Todos.css';
function Media() {
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [numero3, setNumero3] = useState('')
    const [media, setMedia] = useState(null);

    const calcular = () => {
        const resultado = ( Number(numero1) + Number(numero2) + Number(numero3) ) / 3 ;
        setMedia(resultado)
        if(resultado <= 4 ) {
            alert("Sua média é de: " +resultado+ " e vc foi reprovado")
        } else if (resultado > 4 && resultado <=6) {
            alert("Sua média é de: " +resultado+ " e vc ficou de recuperação")
        } else {
            alert("Sua média é de: " +resultado+ " e vc passou de ano muito esperto cachorro slc parabens")
        }
    }

    return(
        <div className='divFoda'>
            <h1>Calcular a dor da Média </h1>
            <br/>
            <br/>
            <input type='number' value={numero1} onChange={(e) => setNumero1(e.target.value)} placeholder='Digite a primeira nota'/>
            <br/>
            <br/>
            <input type='number' value={numero2} onChange={(e) => setNumero2(e.target.value)} placeholder='Digite a segunda nota'/>
            <br/>
            <br/>
            <input type='number' value={numero3} onChange={(e) => setNumero3(e.target.value)} placeholder='Digite a terceira nota'/>
            <br/>
            <br/>
            <button onClick={calcular}> Calcular Media</button>
            
        </div>
    )

}

export default Media