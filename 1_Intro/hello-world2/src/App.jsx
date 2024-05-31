import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>Hello World</h1>
       <ul className='lista'> 
        <li>Comer</li>
        <li>Dormir</li>
        <li>Tomar Banho</li>
        <li>Estudar</li>
        <li>Passear</li>
       </ul>
       
      </div>
     
    </>
  )
}

export default App
