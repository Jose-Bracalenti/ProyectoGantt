import "./Planificacion.css"
import { Grid } from "@mui/material";
import FiltroActividades from "./components/FiltroActividades";
import PoliticasTable from "./components/PoliticasTable";
import { FiltroActividadesProvider } from "./hooks/FiltroActividadesProvider";
export const Planificacion = () => {
    return (
        <form>
        <div style={{ display: 'flex' , marginY:'1rem'}}>
        <FiltroActividadesProvider>
            <Grid container spacing={2} sx={{marginX:'1rem'}}>
                <Grid item xs={3}>

                    
                        <FiltroActividades />
                    
                </Grid>
                <Grid item xs={9}>
                    <PoliticasTable />
                </Grid>
            </Grid>  
        </FiltroActividadesProvider>
        </div>
        </form>
    );
}
export default Planificacion;