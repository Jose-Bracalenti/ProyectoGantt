import "./styles/Planificacion.css";
import FiltroActividades from "./components/FiltroActividades";
import PoliticasTable from "./components/PoliticasTable";
import { FiltroActividadesProvider } from "./hooks/FiltroActividadesProvider";
import DiagramaGanttContained from "./components/DiagramaGanttContained";

export const Planificacion = () => {
  return (
    <>
      <FiltroActividadesProvider>
        <form>
          <div
          className="planificacion-container"

          >
            <div className="planificacion-header">
              <FiltroActividades  />
            </div>
            <div
            className="planificacion-body"           
            >
              <PoliticasTable />
              <DiagramaGanttContained />
            </div>
            <div className="planificacion-footer"
            >
            </div>
          </div>
        </form>
      </FiltroActividadesProvider>
    </>
  );
};
export default Planificacion;
