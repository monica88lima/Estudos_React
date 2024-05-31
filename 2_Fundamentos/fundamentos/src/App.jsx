import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponents from './components/FirstComponents'
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events'
import Challenge from './components/Challenge' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>Fundamentos React</h1>
      </div>
      <FirstComponents/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
     
    </>
  );
};

export default App
