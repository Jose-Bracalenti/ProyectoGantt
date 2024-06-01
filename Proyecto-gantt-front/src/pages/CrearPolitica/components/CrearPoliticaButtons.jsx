import { useContext, useState } from "react";
import { Button, Tooltip, Snackbar, Modal, Box, Alert } from "@mui/material";
import { FormularioPoliticaContext } from "../hooks/FormularioPoliticaProvider";
import { ActivitiesTableContext } from "../hooks/ActivitiesTableProvider";
import politicasService from "../../../services/politicasServices";
import TimelineComponent from "../../../components/TimelineComponent";
import ConfirmDialog from "./ConfirmDialog";

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
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  const camposCompletos = nombre !== "" && costo !== "";
  const buttonTitle = camposCompletos
    ? "Crear ppp"
    : "Complete los campos con (*) para crear ppp";

  const handleCrear = () => setConfirmDialogOpen(true);

  const handleConfirmCrear = () => {
    setConfirmDialogOpen(false);
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
      nombre,
      secretaria_id: secretaria,
      objetivo_id: objetivo,
      descripcion,
      costo,
      actividades,
    };

    politicasService
      .create(politica)
      .then((response) => {
        setSnackbarMessage("Política agregada correctamente");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setNombre("");
        setSecretaria("");
        setObjetivo("");
        setDescripcion("");
        setCosto("");
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

  const handlePreVisualizar = () => setOpenModalGantt(true);

  return (
    <div
      style={{ display: "flex", justifyContent: "right", marginRight: "5rem" }}
    >
      <Button sx={{ marginRight: 5 }} variant="outlined" color="secondary">
        Cancelar
      </Button>
      <Button
        disabled={!activities.length}
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
            Crear PPP
          </Button>
        </span>
      </Tooltip>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Modal open={openModalGantt} onClose={() => setOpenModalGantt(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 2,
            display: "inline-block",
          }}
        >
          <TimelineComponent activities={activities} />
        </Box>
      </Modal>
      <ConfirmDialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        onConfirm={handleConfirmCrear}
        title="Confirmar Creación"
        content="¿Está seguro de que desea crear esta política pública prioritaria?"
      />
    </div>
  );
};

export default CrearPoliticaButtons;
