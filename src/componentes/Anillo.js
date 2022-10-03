import React from 'react'
import '../hojas-de-estilo/Anillo.css';
//'../imagenes/anilloInfinito.png'

function Anillo(props){
    return (
    <div className='contenedor-anillo'>
        <img 
        className='imagen-anillo'
        src={require(`../imagenes/${props.imagen}.jpg`)}
       />
        <div className='propsAnillo'>
            <h3>Anillo {props.nombre}</h3>
        <p>Precio: {props.precio}</p>
        </div>
    </div>)
}


//let Infinito = Anillo('../imagenes/anilloInfinito.png', 500, Infinito)

export default Anillo;