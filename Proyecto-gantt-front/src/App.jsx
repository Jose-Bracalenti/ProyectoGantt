import { Routes, Route } from "react-router-dom/dist";
import NavBar2 from "./about/NavBar2";
import { CrearPolitica, GestionPolitica, Inicio, Login, ModificarPolitica } from "./pages";

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element ={ <NavBar2 />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/crearPolitica" element={<CrearPolitica />} />
          <Route path="/GestionPolitica" element={<GestionPolitica />} />
        </Route>
        <Route path="/GestionPolitica/ModificarPolitica" element={<ModificarPolitica />} />
      </Routes>

    </div>
  );
}

export default App;
