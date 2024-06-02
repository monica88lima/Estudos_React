import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Noite from "./assets/noite.jpg";
import ManageData from "./Components/ManageData";
import ListRender from "./Components/ListRender";
import CondicionalRender from "./Components/CondicionalRender";
import ShowUserName from "./Components/ShowUserName";
import CarDetails from "./Components/CarDetails";
import Container from "./Components/Container";
import ShowMessage from "./Components/ShowMessage";

function App() {
  const [count, setCount] = useState(0);
  const cars = [
    {id:1, km:1000, marca:"Ford", cor: "preto"},
    {id:2,km:300, marca:"Fiat", cor: "Vermelho"},
    {id:3,km:10000, marca:"SRV", cor: "Marrom"},
  ];

  function showMsg(){
    console.log("Exibiu a Mensagem Agora!")

  };

  return (
    <>
      <div className="imagens">
        <h1>React </h1>
        <div>
          <img src="/arvore.jpg" alt="arvore" />
        </div>
        <div>
          <img src={Noite} alt="noite" />
        </div>
        <div>
        <ManageData />
        <ListRender />
        <CondicionalRender />
        <ShowUserName name="Monica"/>
        <CarDetails km={25000} marca="i30" cor="Azul"/>
        <CarDetails km={55000} marca="Fiat" cor="Preto"/>
        <ShowUserName name="Ellen"/>
        {cars.map((car)=>
        (<CarDetails key={car.id} marca={car.marca} km={car.km} cor={car.cor} />))}
        <Container>
          <p>Algo escrito aqqui </p>

        </Container>
        <ShowMessage myfunction={showMsg}/>

      </div>
        
      </div>
     
      
    
    </>
  );
}

export default App;
