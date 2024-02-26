import './App.css';
import Header from "./Components/Home/Header/Header.jsx"
import Section from './Components/Home/Section/Section.jsx';
import Contacto from './Components/Contact/Contacto.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/my-app/" element={<Section/>} />
          <Route path="/my-app/Contacto" element={<Contacto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
