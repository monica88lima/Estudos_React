import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import DetailsCars from './components/DetailsCars'
import  volvoex30 from "./assets/volvoex30.png"
import  gwmora from "./assets/gwmora.png"
import  jeeprenegate  from "./assets/jeeprenegate.png"
import  volvohaval from "./assets/volvohaval.png"

function App() {
  const [count, setCount] = useState(0)
  const cars = [
    {id:1, marca: "Volvo", cor:"Prata" , ano:2024 , modelo:"EX30 Core ER" , img:volvoex30 },
    {id:2, marca: "GWM", cor:"Azul" , ano:2025 , modelo:"HAVAL" , img:gwmora },
    {id:3, marca: "Jeep", cor:"Branco" , ano:2024 , modelo:"Renegate" , img:jeeprenegate },
    {id:4, marca: "Volvo", cor:"Azul" , ano:2024 , modelo:"Ora 03" , img:volvohaval },
    
  ]

  return (
    <>
    <div>
      <h1>Concessionária </h1>
      <Title/>
     {cars.map((car)=>
      (<DetailsCars key={car.id} marca={car.marca} modelo={car.modelo} ano={car.ano} img={car.img}/>))}

      
    </div>
    
    </>
  )
}

export default App
