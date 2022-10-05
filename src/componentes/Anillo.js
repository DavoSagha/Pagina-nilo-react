import React from 'react'
import '../hojas-de-estilo/Anillo.css';

function Anillo(props){
    let anillosCatalogo=[{}]
    return (
    <div className='contenedor-anillo'>
        <img 
        className='imagen-anillo'
        src={require(`../imagenes/${props.imagen}.jpg`)}
       />
        <div className='propsAnillo'>
            <h3>Anillo {props.nombre}</h3>
        <p>Precio: {props.precio}</p>
        <p>Peso: {props.peso}</p>
        </div>
    </div>)
}

export default Anillo;