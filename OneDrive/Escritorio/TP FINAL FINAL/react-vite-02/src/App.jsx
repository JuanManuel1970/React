import 'semantic-ui-css/semantic.min.css'
import Navegacion from './Componentes/Navegacion';
import Home from './Componentes/Home';
import Productos from './Componentes/Productos';
import Runing from './Componentes/Runing';
import Formulario from './Componentes/Formulario';
import Vite from './Componentes/Vite';
import Update from './Componentes/Update';
import Faq from './Componentes/Faq';
import Footer from './Componentes/Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return(
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Productos" element={ <Productos />} />
        <Route path="/runing" element={ <Runing />} />
        <Route path="/formulario" element={ <Formulario />} />
        <Route path="/update" element={ <Update />} />
        <Route path="/vite" element={ <Vite />} />
        <Route path='/Faq' element={<Faq />}></Route>
     



        
      </Routes>
      <Footer />
    </>
  )
}

export default App;