import CamposPolitica from "./components/CamposPolitica";
import "./styles/CrearPolitica.css";
import { FormularioPoliticaProvider } from "./hooks/FormularioPoliticaProvider";
import { ItemsTableProvider } from "./hooks/ItemsTableProvider";
import CrearPoliticaButtons from "./components/CrearPoliticaButtons";
import { TablaDeItems } from "./components/TablaDeItems";

export const CrearPolitica = () => {
  return (
    <FormularioPoliticaProvider>
      <ItemsTableProvider>
        <form>
          <div className="crear-politica-container">
            <div className="crear-politica-header">
              <CamposPolitica />
            </div>
            <div className="crear-politica-body">
              <TablaDeItems />
              <div className="crear-politica-footer">
              <CrearPoliticaButtons />
            </div>
            </div>

          </div>
        </form>
      </ItemsTableProvider>
    </FormularioPoliticaProvider>
  );
};

