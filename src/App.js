import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

import Contacto from './components/Contacto';
import ListaCompras  from './components/ListaCompras';
import Form from './components/Form';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Resultado from './components/Resultado'

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/' >Inicio</Link>
            </li>
            <li>
              <Link to='/Contacto' >Contacto</Link>
            </li>
            <li>
              <Link to='/Nosotros' >Nosotros</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <Routes>

        <Route path='/' element={<ListaCompras />} />

        <Route path='/Contacto' element={<Contacto />} />

        <Route path="/form" element={<Form />} />

        <Route path='/productos' element={<Productos />} />

        <Route path='/Nosotros' element={<Nosotros />} />

        <Route path='/Resultado' element={ <Resultado />} />

      </Routes>
   </Router>
  
  

  );
}

export default App;
