import { useContext, useState } from "react";
import TimelineComponentContained from "../../../components/TimelineComponentContained";
import { FiltroActividadesContext } from "../hooks/FiltroActividadesProvider";
import { Button, Box } from "@mui/material";
import ImprimirDiagramaButton from './ImprimirDiagramaButton';

const DiagramasGantt = () => {
    const [mostrarDiagrama, setMostrarDiagrama] = useState(false); // Estado para controlar la visibilidad del diagrama
    const { filteredPoliticas, areas } = useContext(FiltroActividadesContext);

    // Combinar todas las actividades en un solo array y clasificarlas por política
    const combinedActivities = filteredPoliticas?.reduce((acc, politica) => {
        politica.actividades.forEach(actividad => {
            acc.push({ ...actividad, politica: politica.nombre });
        });
        return acc;
    }, []) || [];

    return (
        <div>
            <Box display="flex" justifyContent="flex-start" alignItems="center" marginBottom="1rem">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setMostrarDiagrama(!mostrarDiagrama)}
                >
                    {mostrarDiagrama ? "Ocultar Diagrama" : "Mostrar Diagrama"}
                </Button>
                <ImprimirDiagramaButton />
            </Box>
            {mostrarDiagrama && (
                <div>
                    <h3>Diagrama de Gantt Consolidado</h3>
                    <TimelineComponentContained activities={combinedActivities} dataArea={areas} activarGrupos={true} />
                </div>
            )}
        </div>
    );
};

export default DiagramasGantt;
