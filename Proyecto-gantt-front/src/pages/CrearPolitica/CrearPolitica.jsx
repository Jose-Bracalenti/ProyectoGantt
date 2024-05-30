import FormularioPolitica from "./components/FormularioPolitica";
import AgregarActividades from "./components/AgregarActividades";
import "./CrearPolitica.css";
import { Grid } from "@mui/material";
import { FormularioPoliticaProvider } from "./hooks/FormularioPoliticaProvider";
import { ActivitiesTableProvider } from "./hooks/ActivitiesTableProvider";
import CrearPoliticaButtons from "./components/CrearPoliticaButtons";
import TimelineComponent from "../../components/TimelineComponent";

export const CrearPolitica = () => {
    

    return (
        <FormularioPoliticaProvider>
        <ActivitiesTableProvider>
        <form style={{ }}>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Grid container spacing={2} sx={{  marginX: 0, marginY: 0 }}>
          <Grid item xs={3} sx={{ height: '100%' }}>
            <FormularioPolitica />
          </Grid>
          <Grid item xs={9} sx={{  }}>
            <AgregarActividades />
          </Grid>
        </Grid>
      </div>
      <CrearPoliticaButtons style={{ flexShrink: 0 }} />
    </form>
        </ActivitiesTableProvider>
        </FormularioPoliticaProvider>
            );
};

export default CrearPolitica;
