import './App.css';
import Header from "./Components/Home/Header/Header.jsx"
import Section from './Components/Home/Section/Section.jsx';
import Contacto from './Components/Contact/Contacto.jsx';
import Menu from './Components/Menu/Menu.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='fondo'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="my-app/" element={<Section/>}/>
          <Route path="my-app/contacto" element={<Contacto/>} />
          <Route path="my-app/menu" element={<Menu/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
