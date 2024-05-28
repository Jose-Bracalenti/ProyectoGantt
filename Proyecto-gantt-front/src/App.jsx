import { Routes, Route } from "react-router-dom/dist";
import NavBar2 from "./about/NavBar2";
import {CrearPolitica, VerPoliticas , Contact, Ejemplo } from "./pages";

function App() {
  return (
    <div>
    <NavBar2 />
      <Routes>
        <Route path="/crearPolitica" element={<CrearPolitica />} />
        <Route path="/verPoliticas" element={<VerPoliticas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ejemplo" element={<Ejemplo />} />
      </Routes>
    </div>
  );
}

export default App;
