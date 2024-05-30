import { Routes, Route } from "react-router-dom/dist";
import NavBar2 from "./about/NavBar2";
import { CrearPolitica, VerPoliticas, Planificacion, Ejemplo, Login } from "./pages";

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element ={ <NavBar2 />}>
          <Route path="/crearPolitica" element={<CrearPolitica />} />
          <Route path="/verPoliticas" element={<VerPoliticas />} />
          <Route path="/planificacion" element={<Planificacion />} />
          <Route path="/ejemplo" element={<Ejemplo />} />
          <Route path="/planificacion" element={<Planificacion />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
