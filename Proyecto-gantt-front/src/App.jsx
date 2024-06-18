import { Routes, Route } from "react-router-dom/dist";
import NavBar2 from "./about/NavBar2";
import { CrearPolitica, VerPoliticas, GestionPolitica, Inicio, Login } from "./pages";

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element ={ <NavBar2 />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/crearPolitica" element={<CrearPolitica />} />
          <Route path="/verPoliticas" element={<VerPoliticas />} />
          <Route path="/GestionPolitica" element={<GestionPolitica />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
