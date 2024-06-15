import "./MyForms.css";
import { useState } from "react";

const MyForms = () => {
    const [nome, settName] = useState()
    const[email, setEmail] = useState()

    const handleName = (e)=>{
        settName(e.target.value)
    }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" name="nome" placeholder="Digite seu nome" onChange={handleName} />
        </div>
        <label htmlFor="email">
          Email 
          <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
