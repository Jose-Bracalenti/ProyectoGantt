import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import PropTypes from "prop-types";

const ItemsDialog = ({ openDialogCreateItem, newItem, isEditing, onClose, onChange, onSave }) => {

    return (
        <Dialog open={openDialogCreateItem} onClose={onClose}>
        <DialogTitle>{
            isEditing ? "Modificar Item" : "Agregar Nuevo Item"
            }</DialogTitle>
        <DialogContent>
            <TextField
            margin="dense"
            name="nombre"
            label="Nombre"
            type="text"
            fullWidth
            value={newItem.nombre}
            onChange={onChange}
            />
            <Button
            variant="text"
            color="secondary"
            onClick={onClose}
            >
                Cancelar
            </Button>
            <Button
            variant="contained"
            color="primary"
            disabled={newItem.nombre === ""}
            onClick={onSave}
            >
                {isEditing ? "Guardar" : "Agregar"}
            </Button>
        </DialogContent>
    </Dialog>
    );
}

ItemsDialog.propTypes = {
    openDialogCreateItem: PropTypes.bool,
    newItem: PropTypes.object,
    setNewItem: PropTypes.func,
    isEditing: PropTypes.bool,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    onSave: PropTypes.func,
};


export default ItemsDialog;