import React from 'react'
import '../hojas-de-estilo/PlantillaPagina.css';

function PlantillaPagina (){
return (<div className='plantilla-pagina'>
    
 <header>
    <div className='header-superior'>
            <img className='header-superior-imagen' src={require('../imagenes/nilo.jpg')} alt='Nilo'/>
            <h1 className='nilo-joyeria'>Nilo Joyería</h1>
         <div className='header-superior-search'><input itemType='search' placeholder='¿Qué deseas buscar?'/></div>
    </div>

    <div className='container-menu'>
        <div className='container-menu-menu'>
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
         <div className='redes'>
            <a className='redes-instagram' href='https://www.facebook.com/profile.php?id=100063985237492'><img src={require('../imagenes/facebook.png')} alt='Facebook'/></a>
            <a className='redes-facebook' href='https://www.instagram.com/nilojoyeria/'><img src={require('../imagenes/instagram.png')} alt='Instagram'/></a>
        </div>
        </nav>
        
        </div>
        
    </div>
</header>

</div>

)
}

export default PlantillaPagina;