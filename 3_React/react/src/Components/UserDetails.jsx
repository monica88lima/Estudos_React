import React from "react";

export const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h3>Detalhes do Pessoa</h3>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissao}</li>
      </ul>
      {idade >= 18 ? <p>Pode ser Habilitado!</p>:<p>Não pode ter Habilitacão!</p>}
    </div>
  );
};

export default UserDetails;
