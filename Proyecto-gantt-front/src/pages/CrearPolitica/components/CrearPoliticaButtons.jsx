  import { useContext, useEffect, useState } from "react";
  import { Button, Tooltip, Snackbar, Modal, Box, Alert, Typography } from "@mui/material";
  import { FormularioPoliticaContext } from "../hooks/FormularioPoliticaProvider";
  import { ItemsTableContext } from "../hooks/ItemsTableProvider";
  import politicasService from "../../../services/politicasServices";
  import TimelineComponent from "../../../components/TimelineComponent";
  import ConfirmDialog from "./ConfirmDialog";
  import areaService from "../../../services/areaServices";

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
      setEje,
    } = useContext(FormularioPoliticaContext);
    const { items, setItems, dataArea,setDataArea } = useContext(ItemsTableContext);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");
    const [openModalGantt, setOpenModalGantt] = useState(false);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [selectedColorIndex, setSelectedColorIndex] = useState(null); // Índice del color seleccionado
    const [newColor, setNewColor] = useState(dataArea.map(() => ""));
    const [newPolitica, setNewPolitica] = useState({});

    const handleCloseSnackbar = () => setSnackbarOpen(false);

    useEffect(() => {
      const politica = {
        nombre: nombre,
        items: items,
      };
      setNewPolitica(politica);
    }, [nombre, items]); 

    const camposCompletos = nombre !== "" && secretaria !== null && objetivo !== null;
    const buttonTitle = camposCompletos
      ? "Crear PPP"
      : "Complete los campos con (*) para crear PPP";



    //POST de la política
    console.log("items", items);
    console.log("nombre", nombre);
    console.log("secretaria", secretaria?.id);
    console.log("objetivo", objetivo?.id);
    console.log("descripcion", descripcion);
    
    const handleConfirmCrear = () => {
      setConfirmDialogOpen(false);
      const politica = {
        nombre: nombre,
        secretaria_id: secretaria.id,
        objetivo_id: objetivo.id,
        descripcion: descripcion,
        items: items,
      };

      politicasService
        .create(politica)
        .then((response) => {
          setSnackbarMessage("Política agregada correctamente");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          setNombre("");
          setSecretaria(null);
          setEje(null);
          setObjetivo(null);
          setDescripcion("");
          setItems([]);
          console.log(response);
        })
        .catch((error) => {
          setSnackbarMessage("Error al crear la política");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
          console.error(error);
        });
    };
//------------------------------------------------


    const handlePreVisualizar = () => setOpenModalGantt(true);

    // Función para manejar el cambio de color de área
    const handleColorChange = (index, color) => {
      setSelectedColorIndex(index);
      setNewColor((prevColors) => {
        const newColors = [...prevColors];
        newColors[index] = color;
        return newColors;
      });
    };


    // Función para enviar el color modificado al backend
    const handleUpdateColor = () => {
      const updatedColor = newColor[selectedColorIndex];
      const area_id = dataArea[selectedColorIndex].id; // Supongo que hay un ID para cada área en el backend
      areaService.updateAreaColor(area_id, updatedColor)
        .then((response) => {
          setSnackbarMessage("Color actualizado correctamente");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          setDataArea((prevDataArea) => {
            const newDataArea = [...prevDataArea];
            newDataArea[selectedColorIndex].color = updatedColor;
            return newDataArea;
          });
          console.log(response);
        })
        .catch((error) => {
          setSnackbarMessage("Error al actualizar el color");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
          console.error(error);
        });
    };

    return (
      <div style={{ display: "flex", justifyContent: "right", marginRight: "5rem" }}>
        <Button sx={{ marginRight: 5 }} variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button
          disabled={!items.length}
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
              onClick={() => setConfirmDialogOpen(true)}
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
              width: "80%",
            }}
          >
            <div style={{ display: "flex", }}>
              {dataArea.map((area, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                  <Typography>{area.nombre}</Typography>
                  <input
                    type="color"
                    value={newColor[index] || area.color}
                    onChange={(e) => handleColorChange(index, e.target.value)}
                    style={{marginLeft:'0.3rem' ,marginRight: "2rem", width: "30px", height: "30px" }}
                  />
                </div>
              ))}
            </div>
            <Button
              disabled={selectedColorIndex === null}
              variant="contained"
              color="primary"
              onClick={handleUpdateColor}
            >
              Aceptar cambios
            </Button>
            <h4>Previsualización del diagrama</h4>
            <TimelineComponent
            politicas = {[newPolitica]}  
            activarGrupos={true}
            dataArea={dataArea} />
          </Box>
        </Modal>
        <ConfirmDialog
          open={confirmDialogOpen}
          onClose={() => setConfirmDialogOpen(false)}
          onConfirm={handleConfirmCrear}
          title="Confirmar Creación"
          content="¿Está seguro de que desea crear esta Política Pública Prioritaria?"
        />
      </div>
    );
  };

  export default CrearPoliticaButtons;
    