import { useContext } from "react";
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
import { FiltroActividadesContext } from "../hooks/FiltroActividadesProvider";

const PoliticaDialog = ({
  open,
  isEditing,
  politica,
  onChange,
  onSave,
  onCancel,
}) => {
  const { dataArea } = useContext(FiltroActividadesContext);

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>
        {isEditing ? "Modificar Política" : "Agregar Nueva Política"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, completa los siguientes campos para{" "}
          {isEditing ? "modificar" : "agregar"} una política.
        </DialogContentText>
        <TextField
          margin="dense"
          name="nombre"
          label="Nombre" 
          type="text"
          required
          fullWidth
          value={politica.nombre}
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
          value={politica.descripcion}
          onChange={onChange}
        />
        {/* Add more fields as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">
          Cancelar
        </Button>
        <Button
          disabled={politica.nombre === "" || politica.descripcion === ""}
          onClick={onSave} 
          color="primary" 
          variant="outlined"
        >
          {isEditing ? "Guardar" : "Agregar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

PoliticaDialog.propTypes = {
  open: PropTypes.bool,
  isEditing: PropTypes.bool,
  politica: PropTypes.object,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default PoliticaDialog;
