import { Button } from "@mui/material"
import { useContext, useEffect, useRef } from "react"
import { FiltroDePoliticasContext } from "../hooks/FiltroDePoliticasProvider"
import TimelineComponent from "../../../components/TimelineComponent";

export const MostrarDiagramas = () => {
    const {showDiagram, setShowDiagram } = useContext(FiltroDePoliticasContext);





    return (
        <div>
            <h2>Mostrar Diagramas</h2>
            <Button variant="contained"
            color="primary"
            onClick={() => setShowDiagram(!showDiagram)}
            >{
                showDiagram ? 'Ocultar Diagrama' : 'Mostrar Diagrama'
            }
                </Button>
            {showDiagram && 
            <TimelineComponent />}
        </div>
    )
}