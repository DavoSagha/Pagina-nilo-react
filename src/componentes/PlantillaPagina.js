import React from 'react'
import '../hojas-de-estilo/PlantillaPagina.css';

function PlantillaPagina (){
return (<div id='Barra-Principal'>
    <h1>Nilo Joyería</h1>
 <header>
    <div className='Header-superior'>
            <img className='Logo' src={require('../imagenes/nilo.jpg')} alt='Nilo'/>
         <div className='search'>
            <input itemType='search' placeholder='¿Qué deseas buscar?'/>
         </div>
    </div>

    <div className='Container-menu'>
        <div className='Menu'>
        <nav>
        <ul>
    <li><a href='#'>Home</a></li>
    <li><a href='#'>Joyería</a>
    <ul>
        <li><a href='#'>Anillos</a></li>
        <li><a href='#'>Aros</a></li>
        <li><a href='#'>Pulseras</a></li>
        <li><a href='#'>Collares</a></li>
    </ul>
    </li>
    <li><a href='#'>Contacto</a></li>
    <li><a href='#'>Nosotros</a></li>
    </ul>
        </nav>

        </div>
        
    </div>
    
</header>
</div>)
}

export default PlantillaPagina;