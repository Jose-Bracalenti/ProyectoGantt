import TimelineComponent from "../../../components/TimelineComponent";
import TimelineComponentContained from "../../../components/TimelineComponentContained";
import { useContext, useState } from "react";
import { FiltroActividadesContext } from "../hooks/FiltroActividadesProvider";
import { IconButton, Typography } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";

const DiagramasGantt = () => {
    const [activarGrupos, setActivarGrupos] = useState([]);
    const {
        filteredPoliticas,
        areas
    } = useContext(FiltroActividadesContext);
    return (
        <div>
            {filteredPoliticas && filteredPoliticas.map((politica, index) => (
                <div key={politica.id} style={{ marginTop: "2rem", justifyContent: 'center' }}>
                    <h3>{politica.nombre}</h3>
                    <TimelineComponentContained activities={politica.actividades} dataArea={areas} activarGrupos={activarGrupos[index]} />
                    <IconButton
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "1rem" }}
                        onClick={() => {
                            const newActivarGrupos = [...activarGrupos];
                            newActivarGrupos[index] = !newActivarGrupos[index];
                            setActivarGrupos(newActivarGrupos);
                        }}
                    >
                        <Typography variant="body1">{activarGrupos[index] ? "Desagrupar"  : "Agrupar"}</Typography>
                        {activarGrupos[index] ? <RemoveIcon /> : <AddIcon />}
                    </IconButton>
                    
                </div>
            ))}
        </div>
    );
}
export default DiagramasGantt;
