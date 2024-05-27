import FormularioPolitica from "./components/FormularioPolitica";
import AgregarActividades from "./components/AgregarActividades";
import "./CrearPolitica.css";
import { Button, Grid } from "@mui/material";
import { FormularioPoliticaProvider } from "./components/FormularioPoliticaProvider";
import CrearPoliticaButtons from "./components/CrearPoliticaButtons";

export const CrearPolitica = () => {
    

    const handleCrear = () => {
        console.log("crear politica");

    };


    return (
        <FormularioPoliticaProvider>
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
        </FormularioPoliticaProvider>
            );
};

export default CrearPolitica;
