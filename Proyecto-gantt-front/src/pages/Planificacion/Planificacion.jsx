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
                    <div style={{ display: 'flex', marginY: '1rem' }}>

                        <Grid container spacing={2} sx={{ marginX: '1rem' }}>
                            <Grid item xs={3}>


                                <FiltroActividades />

                            </Grid>
                            <Grid item xs={9}>
                                <PoliticasTable />
                                <div style={{ display: 'flex', marginTop: "1rem", justifyContent: 'center', }}>
                                    <DiagramasGantt />
                                </div>
                            </Grid>
                        </Grid>

                    </div>
                </form>

            </FiltroActividadesProvider>
        </>
    );
}
export default Planificacion;