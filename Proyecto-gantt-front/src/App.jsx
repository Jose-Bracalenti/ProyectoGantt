import { Routes, Route } from "react-router-dom/dist";
import NavBar2 from "./about/NavBar2";
import { Planificacion, CrearPolitica, VerPoliticas, Contact, Ejemplo, Login } from "./pages";

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element ={ <NavBar2 />}>
          <Route path="/crearPolitica" element={<CrearPolitica />} />
          <Route path="/verPoliticas" element={<VerPoliticas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ejemplo" element={<Ejemplo />} />
          <Route path="/planificacion" element={<Planificacion />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
