import "./styles/GestionPolitica.css";
import { FiltroDePoliticasProvider } from "./hooks/FiltroDePoliticasProvider";
import { FiltroDePoliticas } from "./components/FiltroDePoliticas";	
import { TablaDePoliticas } from "./components/TablaDePoliticas";
import { MostrarDiagramas } from "./components/MostrarDiagramas";


export const GestionPolitica = () => {
  return (
    <>
      <FiltroDePoliticasProvider>
      <div className="gestion-politica-container">
            <div className="gestion-politica-header">
            <FiltroDePoliticas />
            </div>
            <div className="gestion-politica-body">
              <TablaDePoliticas />
              <div className="gestion-politica-footer">
              <MostrarDiagramas />
            </div>
            </div>

          </div>
        <div>
        </div>

      </FiltroDePoliticasProvider>
    </>
  );
};
export default GestionPolitica;
