import "./Planificacion.css"
import { Grid } from "@mui/material";
import FiltroActividades from "./components/FiltroActividades";
export const Planificacion = () => {
    return (
        <form>
        <div style={{ display: 'flex' , marginY:'1rem'}}>
            <Grid container spacing={10} sx={{marginX:'1rem'}}>
                <Grid item xs={3}>

                    <FiltroActividades />
                </Grid>
                <Grid item xs={9}>
                </Grid>
            </Grid>  
            
        </div>
        </form>
    );
}
export default Planificacion;