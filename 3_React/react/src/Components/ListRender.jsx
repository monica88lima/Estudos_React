import React from "react";
import { useState } from "react";

export const ListRender = () => {
  const [list] = useState(["Rishi", "Monica", "Ellen", "Alice", "Laura"]);
  const [user, setUsers] = useState([
    { id: 1, name: "Goiaba", tipo: "Fruta" },
    { id: 2, name: "Acelga", tipo: "Legume" },
    { id: 3, name: "Batata", tipo: "Tuberculo" },
    { id: 4, name: "Sanduiche", tipo: "Lanche" },
  ]);

  const [nome, setNome] = useState("monica");

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  function AtualizaDado() {
    setNome("rishi");
  }

  return (
    <div>
      <p>Lista de Nomes</p>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p>Lista de Comidas</p>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} - {user.tipo}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete itens da lista</button>

      <button onClick={AtualizaDado}>teste {nome}</button>
    </div>
  );
};
export default ListRender;
