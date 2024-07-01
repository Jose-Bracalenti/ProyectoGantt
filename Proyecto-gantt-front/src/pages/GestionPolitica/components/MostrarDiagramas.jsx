import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { FiltroDePoliticasContext } from "../hooks/FiltroDePoliticasProvider";
import TimelineComponent from "../../../components/TimelineComponent";
import ExportPDFButton from "../components/ExportPDFButton";

export const MostrarDiagramas = () => {
  const { showDiagram, setShowDiagram, politicas, fechaInicio, fechaFin } =
    useContext(FiltroDePoliticasContext);
  const [activarGrupos, setActivarGrupos] = useState(true);

  return (
    <div>
      <h2>Mostrar Diagramas</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowDiagram(!showDiagram)}
      >
        {showDiagram ? "Ocultar Diagrama" : "Mostrar Diagrama"}
      </Button>
      {showDiagram && (
        <>
          <Button
            color="primary"
            onClick={() => setActivarGrupos(!activarGrupos)}
          >
            {activarGrupos ? "Desagrupar items" : "Agrupar por items"}
          </Button>
          <div id="timeline-container">
            <TimelineComponent
              politicas={politicas}
              activarGrupos={activarGrupos}
              fechaInicio={fechaInicio}
              fechaFin={fechaFin}
            />
          </div>
          <ExportPDFButton elementId="timeline-container" />
        </>
      )}
    </div>
  );
};
