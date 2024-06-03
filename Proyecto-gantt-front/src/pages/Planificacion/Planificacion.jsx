import "./styles/Planificacion.css";
import FiltroActividades from "./components/FiltroActividades";
import PoliticasTable from "./components/PoliticasTable";
import { FiltroActividadesProvider } from "./hooks/FiltroActividadesProvider";
import DiagramasGantt from "./components/DiagramasGantt";

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
              <DiagramasGantt />
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
