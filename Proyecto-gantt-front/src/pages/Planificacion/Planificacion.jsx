import "./Planificacion.css"
import { Grid } from "@mui/material";
import FiltroActividades from "./components/FiltroActividades";
import PoliticasTable from "./components/PoliticasTable";
import { FiltroActividadesProvider } from "./hooks/FiltroActividadesProvider";
import DiagramasGantt from "./components/DiagramasGantt";

export const Planificacion = () => {
    return (
        <>
        <FiltroActividadesProvider>
        <form>
        <div style={{ display: 'flex' , marginY:'1rem'}}>

            <Grid container spacing={2} sx={{marginX:'1rem'}}>
                <Grid item xs={3}>

                    
                        <FiltroActividades />
                    
                </Grid>
                <Grid item xs={9}>
                    <PoliticasTable />
                </Grid>
            </Grid>  
  
        </div>
        </form>
        <div  style={{ display: 'flex',marginTop:"5rem" ,justifyContent:'center',}}>
            <DiagramasGantt />
        </div>
        </FiltroActividadesProvider>
        </>
    );
}
export default Planificacion;