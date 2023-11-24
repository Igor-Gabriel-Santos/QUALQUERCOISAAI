import React, {useState} from 'react'

function Temperatura() {

    const [Celsius, setCelsius] = useState(0);
    const [Fahrenheit, setFahrenheit] = useState(0);
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    const calcularCelsius = () => {
        contador = (Celsius * 1.8) + 32 
    }

    const calcularFahrenheit = () => {
        contador = (Fahrenheit * 1.8) + 32 
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
        <button onClick={calcularFahrenheit} {...() => setContador2(contador2)}>Calcular Fahrenheit para Celcius </button>
        
        <p>A quantidade de Celcius para Fahrenheit foi de: {contador}</p>
        <p>A quantidade de Fahrenheit para Celcius foi de: {contador2}</p>
        
      </div>
    )

  }


  
  

export default Temperatura