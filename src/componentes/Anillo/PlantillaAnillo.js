import React from 'react'
import '../../hojas-de-estilo/Anillo/PlantillaAnillo.css';

function PlantillaAnillo(props){
    return (
    <div className='contenedor-anillo'>
        <img 
        className='imagen-anillo'
        src={require(`../../imagenes/${props.info.imagen}.jpg`)}
       />
        <div className='propsAnillo'>
            <h3>Anillo {props.info.nombre}</h3>
        <p>Precio: {props.info.precio}</p>
        <p>Peso: {props.info.peso}</p>
        </div>
    </div>)
}

export default PlantillaAnillo;