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
        <form>
        <div style={{ display: 'flex' , marginY:'1rem'}}>
            <Grid container spacing={10} sx={{marginX:'1rem'}}>
                <Grid item xs={3}>

                    <FormularioPolitica />
                </Grid>
                <Grid item xs={9}>
                <AgregarActividades />
                </Grid>
            </Grid>  
            
        </div>
        <CrearPoliticaButtons />
        </form>
        </ActivitiesTableProvider>
        </FormularioPoliticaProvider>
            );
};

export default CrearPolitica;
