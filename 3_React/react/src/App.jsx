import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Noite from './assets/noite.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='imagens'>
      <h1>React </h1>
      <div >
      <img src="/arvore.jpg" alt="arvore" />

      </div>
      <div>
        <img src={Noite} alt="noite" />
      </div>
      
    </div>
      
    </>
  )
}

export default App
