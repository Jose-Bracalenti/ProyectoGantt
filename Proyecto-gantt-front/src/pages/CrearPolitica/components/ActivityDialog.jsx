// src/ActivityDialog.js

import { useContext, useState } from "react";
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
import { ActivitiesTableContext } from "../hooks/ActivitiesTableProvider";
import ListaDesplegable from "../../../components/ListaDesplegable";

const ActivityDialog = ({
  open,
  isEditing,
  onChange,
  onSave,
  onCancel,
  newActivity,
  setNewActivity,
}) => {
  const{dataArea} = useContext(ActivitiesTableContext);
  const [areaID, setAreaID] = useState(null)
  

  const cancel = () => {
    onCancel();
    setAreaID(null);
  }

  return (
    <Dialog open={open} onClose={cancel}>
      <DialogTitle>
        {isEditing ? "Modificar Actividad" : "Agregar Nueva Actividad"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, completa los siguientes campos para
          {isEditing ? " modificar" : " agregar"} una actividad.
        </DialogContentText>
        <TextField
          margin="dense"
          name="nombre"
          label="Nombre" 
          type="text"
          required
          fullWidth
          value={newActivity.nombre}
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
          value={newActivity.fechaInicio}
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
          value={newActivity.fechaFin}
          onChange={onChange}
        />
          <ListaDesplegable
            list={dataArea}
            stateComponent={areaID}
            setState={(newValue) => {
              setAreaID(newValue);

              setNewActivity({ ...newActivity, 
                area_id: newValue? newValue.id : null
              });
            }}
            nombre="Área"
            titleTrue
          />
        <TextField
          margin="dense"
          name="costo"
          label="Costo"
          type="float"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={newActivity.costo}
          onChange={onChange}
        />
        <TextField
          margin="dense"
          name="resultado_esperado"
          label="Resultado Esperado"
          type="text"
          fullWidth
          value={newActivity.resultado_esperado}
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
          value={newActivity.participacion_ciudadana}
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
        <Button onClick={cancel} color="secondary">
          Cancelar
        </Button>
        <Button
        disabled={newActivity.nombre === "" || newActivity.fechaInicio === "" || newActivity.fechaFin === "" || newActivity.area_id === ""}
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
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  newActivity: PropTypes.object,
  setNewActivity: PropTypes.func,
};

export default ActivityDialog;
