import './App.css';
import Anillo from './componentes/Anillo'
import PlantillaPagina from './componentes/PlantillaPagina';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <PlantillaPagina/>
      <Anillo nombre='Inifnito' imagen='infinito' peso='10 gramos' precio='$2000'/>
      <Anillo nombre='Sol y Luna' imagen='solyluna' peso='10 gramos' precio='$2000'/>
      </div>
    </div>
  );
}

export default App;
