import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyForms from "./components/MyForms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Formulário</h1>
        <MyForms/>

      </div>
    </>
  );
}

export default App;
