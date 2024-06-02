import React from 'react'

export const CarDetails = ({marca, cor, km}) => {
  return (
    <div>
        <h3>Detalhes do Carro</h3>
       <ul>
        <li>Marca: {marca}</li>
        <li>Cor: {cor}</li>
        <li>KM: {km}</li>
       </ul>
    </div>
  );
};
export default CarDetails;