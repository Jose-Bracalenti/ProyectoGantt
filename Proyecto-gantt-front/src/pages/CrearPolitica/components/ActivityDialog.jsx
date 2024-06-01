// src/ActivityDialog.js

import { useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import PropTypes from "prop-types";
import { ActivitiesTableContext } from "../hooks/ActivitiesTableProvider";

const ActivityDialog = ({
  open,
  isEditing,
  activity,
  onChange,
  onSave,
  onCancel,
}) => {
  const{newActivity, setNewActivity, dataArea} = useContext(ActivitiesTableContext);
  

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

        <FormControl fullWidth sx={{ marginY: 1, minWidth: 120 }}>
          <InputLabel required id={"demo-simple-select-standard-label-area"}>
            área
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label-area"
            id={"demo-simple-select-standard-label-area"}
            value={activity.area_id}
            name="area"
            label='area'
            onChange={(e) => {
              onChange(e);
              setNewActivity({
                ...newActivity,
                  area_id: e.target.value,
                });
            } }
          >
            {dataArea.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          margin="dense"
          name="resultado_esperado"
          label="Resultado Esperado"
          type="text"
          fullWidth
          value={activity.resultado_esperado}
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
          name="participacion_ciudadana"
          label="Participación Ciudadana"
          type="text"
          fullWidth
          value={activity.participacion_ciudadana}
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
        <Button
        disabled={activity.nombre === "" || activity.fechaInicio === "" || activity.fechaFin === "" || activity.area_id === ""}
         onClick={onSave} color="primary" variant="outlined">
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
