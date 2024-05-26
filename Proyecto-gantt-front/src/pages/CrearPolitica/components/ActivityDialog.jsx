// src/ActivityDialog.js

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

import PropTypes from "prop-types";
import SelectList from "./SelectList";
import servicesArea from "../services/areaServices";

const ActivityDialog = ({
  open,
  isEditing,
  activity,
  onChange,
  onSave,
  onCancel,
}) => {
  const [area, setArea] = useState("");
  const [dataArea, setDataArea] = useState([]);

  useEffect(() => {
    servicesArea.getAll().then((response) => {
      setDataArea(response.data);
    });
  }, []);

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>
        {isEditing ? "Modificar Actividad" : "Agregar Nueva Actividad"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, completa los siguientes campos para{" "}
          {isEditing ? "modificar" : "agregar"} una actividad.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="nombre"
          label="Nombre"
          type="text"
          required
          fullWidth
          value={activity.nombre}
          onChange={onChange}
        />
        <TextField
          margin="dense"
          name="descripcion"
          label="Descripción"
          type="text"
          fullWidth
          multiline
          rows={3} 
          InputProps={{
            style: {
              width: "100%", 
              height: "auto", 
              overflowY: "auto", 
            },
          }}
          value={activity.descripcion}
          onChange={onChange}
        />
        <TextField
          margin="dense"
          name="fechaInicio"
          label="Fecha Inicio"
          type="date"
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={activity.fechaInicio}
          onChange={onChange}
        />
        <TextField
          margin="dense"
          name="fechaFin"
          label="Fecha Fin"
          type="date"
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={activity.fechaFin}
          onChange={onChange}
        />
        <SelectList
          list={dataArea}
          stateComponent={area}
          setState={setArea}
          name="area"
        />
        <TextField
          margin="dense"
          name="resultadoEsperado"
          label="Resultado Esperado"
          type="text"
          fullWidth
          value={activity.resultadoEsperado}
          multiline
          rows={3} 
          InputProps={{
            style: {
              width: "100%", 
              height: "auto", 
              overflowY: "auto", 
            },
          }}
          onChange={onChange}
        />
        <TextField
          margin="dense"
          name="participacionCiudadana"
          label="Participación Ciudadana"
          type="text"
          fullWidth
          value={activity.participacionCiudadana}
          multiline
          rows={3} 
          InputProps={{
            style: {
              width: "100%", 
              height: "auto", 
              overflowY: "auto", 
            },
          }}
          onChange={onChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">
          Cancelar
        </Button>
        <Button onClick={onSave} color="primary" variant="outlined">
          {isEditing ? "Guardar" : "Agregar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ActivityDialog.propTypes = {
  open: PropTypes.bool,
  isEditing: PropTypes.bool,
  activity: PropTypes.object,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ActivityDialog;
