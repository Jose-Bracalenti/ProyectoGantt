import CamposPolitica from "./components/CamposPolitica";
import TablaDeActividades from "./components/TablaDeActividades";
import "./styles/CrearPolitica.css";
import { FormularioPoliticaProvider } from "./hooks/FormularioPoliticaProvider";
import { ActivitiesTableProvider } from "./hooks/ActivitiesTableProvider";
import CrearPoliticaButtons from "./components/CrearPoliticaButtons";

export const CrearPolitica = () => {
  return (
    <FormularioPoliticaProvider>
      <ActivitiesTableProvider>
        <form style={{}}>
          <div className="crear-politica-container">
            <div className="crear-politica-header">
              <CamposPolitica />
            </div>
            <div className="crear-politica-body">
              <TablaDeActividades />
            </div>
            <div className="crear-politica-footer">
              <CrearPoliticaButtons />
            </div>
          </div>
        </form>
      </ActivitiesTableProvider>
    </FormularioPoliticaProvider>
  );
};

