import './App.css';
import Anillo from './componentes/Anillo'
import PlantillaPagina from './componentes/PlantillaPagina';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <PlantillaPagina/>
      <Anillo
      nombre='Sol y Luna'
      imagen='solyluna'
      precio='600'/>
      <Anillo
      nombre='Inifinito'
      imagen='infinito'
      precio='800'/>
      <Anillo
      nombre='Anillo con piedra'
      imagen='piedranegra'
      precio='2500'/>
      </div>
    </div>
  );
}

export default App;
