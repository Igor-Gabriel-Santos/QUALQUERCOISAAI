import React, {useState} from 'react'

function Temperatura() {

    const [Celsius, setCelsius] = useState(0);
    const [Fahrenheit, setFahrenheit] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    const calcularCelsius = () => {
       const resultado1 = (Celsius * 1.8) + 32
        setContador(resultado1)
    }

    const calcularFahrenheit = () => {
       const resultado2 = (Fahrenheit - 32) / 1.8
        setContador2(resultado2)
    }

    return (
      <div className='divFoda'>
        <h1>Conversor de Celsius para Fahrenheit e vice e versa</h1>
        <h5>Digite a temperatura em Celsius</h5>
        <input type='number' value={Celsius} onChange={(e) => setCelsius(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={calcularCelsius}>Calcular Celcius para Fahrenheit </button>
        <h5>Digite a temperatura em Fahrenheit</h5>
        <input type='number' value={Fahrenheit} onChange={(e) => setFahrenheit(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={calcularFahrenheit}>Calcular Fahrenheit para Celcius </button>
        <br/>
        <br/>
        {contador !== null && <p>A quantidade de Celcius para Fahrenheit foi de: {contador}</p>}
        {contador2 !== null && <p>A quantidade de Fahrenheit para Celcius foi de: {contador2}</p>}
        
      </div>
    )
  }
export default Temperatura