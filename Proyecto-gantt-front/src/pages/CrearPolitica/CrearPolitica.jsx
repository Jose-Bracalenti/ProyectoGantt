import FormularioPolitica from "./components/FormularioPolitica";
import AgregarActividades from "./components/AgregarActividades";
import "./CrearPolitica.css";
import { Button, Grid } from "@mui/material";


export const CrearPolitica = () => {
    return (
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
        <div style={{ display: 'flex', justifyContent: 'right', marginRight:'5rem' }}>
        <Button sx={{marginRight: 5}} variant="outlined" color="secondary">
                Cancelar
                </Button>
                <Button variant="contained" color="primary"  >
                Crear Politica
                </Button>
            </div>
        </form>
            );
};

            export default CrearPolitica;
