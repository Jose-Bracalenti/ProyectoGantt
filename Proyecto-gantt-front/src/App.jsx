import { Routes, Route } from "react-router-dom/dist";
import "./App.css";
import NavBar from "./components/NavBar";
import { CrearPolitica, Contact, Ejemplo } from "./components/pages";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/crearPolitica" element={<CrearPolitica />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ejemplo" element={<Ejemplo />} />
      </Routes>
    </div>
  );
}

export default App;
