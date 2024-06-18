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
import { ItemsTableContext } from "../hooks/ItemsTableProvider";
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
  const{dataArea} = useContext(ItemsTableContext);
  const [areaID, setAreaID] = useState(null)
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorComparacionFechas, setErrorComparacionFechas] = useState(false);
  const [errorFechaFin, setErrorFechaFin] = useState(false);
  const [errorFechaInicio, setErrorFechaInicio] = useState(false);


  const verificacionFechas = ({setError, fecha}) => {
    if(fecha === "") return;
    if (fecha < '1900 - 01 - 01' || fecha > '2100 - 01 - 01') {
      setError(true);
    } else {
      setError(false);
    }
  }


  const verificacionCampos = () => {
    if(newActivity.nombre === "" || newActivity.fechaInicio === "" || newActivity.fechaFin === "" || newActivity.area_id === null || errorNombre || errorFechaFin || errorFechaInicio || errorComparacionFechas) return true;
    return false;
  }

  const comparacionFechas = () => {
    if(newActivity.fechaInicio === "" || newActivity.fechaFin === "") return;
    if (newActivity.fechaInicio > newActivity.fechaFin) {
      setErrorComparacionFechas(true);
    } else {
      setErrorComparacionFechas(false);
    }
  }

  const nombreValido = () => {
    if(newActivity.nombre === "") {
      setErrorNombre(true);
    } else {
      setErrorNombre(false);
    }
  }
  

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
          error={errorNombre}
          margin="dense"
          name="nombre"
          label="Nombre" 
          type="text"
          required
          fullWidth
          value={newActivity.nombre}
          helperText={errorNombre ? "La actividad debe tener un nombre" : ""}
          onChange={
            (e) => {
              onChange (e);
              setErrorNombre(false);
          }
          }
          onBlur={nombreValido}
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
          error={errorFechaInicio}
          helperText={errorFechaInicio ? "La fecha debe estar entre 1900 y 2100" : ""}
          onBlur={() => {
            verificacionFechas({setError: setErrorFechaInicio, fecha: newActivity.fechaInicio});
            comparacionFechas();
          }}
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
          error={errorFechaFin || errorComparacionFechas}
          helperText={
            errorFechaFin ? "La fecha debe estar entre 1900 y 2100" : errorComparacionFechas ? "La fecha de fin debe ser mayor a la de inicio" : ""
          }
          onBlur={() => {
            verificacionFechas({setError: setErrorFechaFin, fecha: newActivity.fechaFin});
            comparacionFechas();
          } }
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
          disabled={verificacionCampos()}
         onClick={
          () => {
            verificacionFechas({setError: setErrorFechaInicio, fecha: newActivity.fechaInicio});
            verificacionFechas({setError: setErrorFechaFin, fecha: newActivity.fechaFin});
            comparacionFechas();
            nombreValido();
            if (verificacionCampos()) return;
            onSave();
         }
        }

         
         
         color="primary" variant="outlined">
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
