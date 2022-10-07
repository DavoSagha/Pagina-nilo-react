import React from 'react'
import PlantillaAnillo from './PlantillaAnillo'

function DatosAnillos () {
    let basicos=[{
            nombre: "infinito",
            imagen: "infinito",
            precio: "1500"},/* {
            nombre: "sol y luna",
            imagen: "solyluna",
            precio: "2000"},{
            nombre: "con piedra negra",
            imagen: "piedranegra",
            precio: "3000"} */]
  return (
    <div>
        {basicos.map((el) =>{
            return <PlantillaAnillo info={el}/>
        })}
    </div>
  )
}

export default DatosAnillos