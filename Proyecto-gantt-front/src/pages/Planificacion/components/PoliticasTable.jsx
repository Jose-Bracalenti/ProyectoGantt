import { useState, useContext } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Tooltip,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from "@mui/material";
import { FiltroActividadesContext } from "../hooks/FiltroActividadesProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PoliticasTable = () => {
    const [showDescription, setShowDescription] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState("");

    const {
        filteredPoliticas,
    } = useContext(FiltroActividadesContext);

    const handleShowAttributes = (descripcion) => {
        setSelectedDescription(descripcion);
        setShowDescription(true);
    }

    const handleEditPolitica = (politica) => {
        // Implement your edit logic here, e.g., redirect to edit page
        console.log("Edit politica:", politica);
    }

    const handleDeletePolitica = (politica) => {
        // Implement your delete logic here
        console.log("Delete politica:", politica);
    }

    const handleClose = () => {
        setShowDescription(false);
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Secretaria</TableCell>
                            <TableCell>Objetivo</TableCell>
                            <TableCell>Costo Total</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredPoliticas.map((politica) => (
                            <TableRow key={politica.id}>
                                <TableCell>{politica.nombre}</TableCell>
                                <TableCell>
                                    <Tooltip
                                        title={
                                            politica.descripcion
                                                ? "Mostrar descripción"
                                                : "Sin descripción"
                                        }
                                    >
                                        <span>
                                            {politica.descripcion && (
                                                <IconButton 
                                                    color="primary"
                                                    onClick={() => handleShowAttributes(politica.descripcion)}
                                                    disabled={!politica.descripcion}
                                                >
                                                    <VisibilityIcon />
                                                </IconButton>
                                            )}
                                        </span>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>{politica.secretaria}</TableCell>
                                <TableCell>{politica.objetivo}</TableCell>
                                <TableCell>{politica.actividades.reduce((acc, curr) => acc + curr.costo, 0)}</TableCell>
                                <TableCell>
                                    <IconButton color="primary" onClick={() => handleEditPolitica(politica)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={() => handleDeletePolitica(politica)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={showDescription} onClose={handleClose}>
                <DialogTitle>Descripción</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {selectedDescription}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};


export default PoliticasTable;
