import React, { useContext, useState } from "react";
import { Button, Tooltip, Snackbar, Modal, Box } from "@mui/material";
import { FormularioPoliticaContext } from "../hooks/FormularioPoliticaProvider";
import { ActivitiesTableContext } from "../hooks/ActivitiesTableProvider";
import politicasService from "../services/politicasServices";
import TimelineComponent from "../../../components/TimelineComponent";
const CrearPoliticaButtons = () => {
  const {
    nombre,
    setNombre,
    secretaria,
    setSecretaria,
    objetivo,
    setObjetivo,
    descripcion,
    setDescripcion,
    costo,
    setCosto,
  } = useContext(FormularioPoliticaContext);
  const { activities, setActivities } = useContext(ActivitiesTableContext);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [openModalGantt, setOpenModalGantt] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  let camposCompletos = false;
  if (nombre !== "" && costo !== "") {
    camposCompletos = true;
  }
  const buttonTitle = camposCompletos
    ? "Crear ppp"
    : "Complete los campos con (*) para crear ppp";

  const handleCrear = () => {
    const actividades = activities.map(
      ({
        nombre,
        descripcion,
        fechaInicio,
        fechaFin,
        area_id,
        resultado_esperado,
        participacion_ciudadana,
      }) => ({
        nombre,
        descripcion,
        fechaInicio,
        fechaFin,
        area_id,
        resultado_esperado,
        participacion_ciudadana,
      })
    );
    const politica = {
      nombre: nombre,
      secretaria_id: secretaria,
      objetivo_id: objetivo,
      descripcion: descripcion,
      costo: costo,
      actividades: actividades,
    };

    politicasService
      .create(politica)
      .then((response) => {
        setSnackbarMessage("Política agregada correctamente");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        // Reset form values
        setNombre("");
        setSecretaria("");
        setObjetivo("");
        setDescripcion("");
        setCosto("");
        // Clear activities
        setActivities([]);

        console.log(response);
      })
      .catch((error) => {
        setSnackbarMessage("Error al crear la política");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        console.error(error);
      });
  };

  const handlePreVisualizar = () => {
    setOpenModalGantt(true);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "right", marginRight: "5rem" }}
    >
      <Button sx={{ marginRight: 5 }} variant="outlined" color="secondary">
        Cancelar
      </Button>
      <Button
        sx={{ marginRight: 5 }}
        variant="outlined"
        color="primary"
        onClick={handlePreVisualizar}
      >
        PreVisualizar
      </Button>
      <Tooltip title={buttonTitle}>
        <span>
          <Button
            disabled={!camposCompletos}
            variant="contained"
            color="primary"
            onClick={handleCrear}
          >
            Crear Política
          </Button>
        </span>
      </Tooltip>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
      <Modal open={openModalGantt} onClose={() => setOpenModalGantt(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1000,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            alignContent: "center",
            alignItems: 'center',
            height: 500,
          }}
        >
          <TimelineComponent activities={activities} />
        </Box>
      </Modal>
    </div>
  );
};

export default CrearPoliticaButtons;
