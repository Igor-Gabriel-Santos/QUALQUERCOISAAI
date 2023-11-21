import React, {useState} from 'react'

function Contador() {

    const [soma, setSoma] = useState(null);

    const calcular = () => {
        const resultado = ;
        setSoma(resultado)
    }

    return(
        <div className='Calculadora'>
            <button onClick={calcular}> Calcular Soma</button>
            {soma !== null && <p>Resultado: {soma}</p>}
        </div>
    )

}

export default Contador