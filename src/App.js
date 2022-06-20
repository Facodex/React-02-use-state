import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {
  const fecha = new Date();
  const currentYear = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>El estado en react - Hook useState</h2>
        <EjercicioComponent year={currentYear}></EjercicioComponent>
        <hr></hr>
        <MiPrimerEstado></MiPrimerEstado>

        

      </header>
    </div>
  );
}

export default App;
