import { Routes, Route } from "react-router-dom/dist";
import NavBar2 from "./components/NavBar2";
import {CrearPolitica, Contact, Ejemplo } from "./pages";


function App() {
  return (
    <div>
    <NavBar2 />
      <Routes>
        <Route path="/crearPolitica" element={<CrearPolitica />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ejemplo" element={<Ejemplo />} />
      </Routes>
    </div>
  );
}

export default App;
