import FormularioPolitica from "./components/FormularioPolitica";
import AgregarActividades from "./components/AgregarActividades";
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
              <FormularioPolitica />
            </div>
            <div className="crear-politica-body">
              <AgregarActividades />
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

export default CrearPolitica;
