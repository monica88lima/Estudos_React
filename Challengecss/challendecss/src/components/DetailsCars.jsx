import React from 'react'
import './DetailsCars.css'


function DetailsCars({marca, cor, ano, modelo, img}) {
  return (
    <div className='container-cars'>
       
        <ul>
        <li>Marca: {marca}</li>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Modelo: {modelo}</li>
        
    </ul>
    <img src={img} alt="foto-veiculo" />
    </div>
    
    
  )
}

export default DetailsCars