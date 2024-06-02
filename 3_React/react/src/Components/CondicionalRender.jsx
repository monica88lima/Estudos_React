import React from 'react'
import { useState } from 'react'

function CondicionalRender() {
    const [x] = useState(true);
    const [name, setName] = useState("Alice");
  return (
    <div>
        <h1>Isso sera exibido?</h1>
        {x && <p>Se x for true</p>}

        <h2>If ternário</h2>
        { name === "Laura" ? (
            <div>
                <p>O nome é Laura!!!</p>
            </div>
        ):(
            <div>
                <p>O Nome não é Laura :( !!!!</p>

            </div>
        )}
        <button onClick={()=> setName("Laura")}>Mudar Nome</button>


       

    </div>
  );
};

export default CondicionalRender;