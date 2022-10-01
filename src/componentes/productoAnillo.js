import React from 'react'
//'../imagenes/anilloInfinito.png'
function Anillo(){
    return (
    <div className='contenedor-anillo'>
        <img 
        className='imagen-anillo'
        src={require('../imagenes/anilloInfinito.png')}
        alt={'Anillo Infinito' }/>
        <div className='propsAnillo'>
        <p>Precio: 50</p>
        </div>
    </div>)
}


//let Infinito = Anillo('../imagenes/anilloInfinito.png', 500, Infinito)

export default Anillo;