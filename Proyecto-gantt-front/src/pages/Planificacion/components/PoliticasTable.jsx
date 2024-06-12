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
  Button,
  TableSortLabel,
} from "@mui/material";
import { FiltroActividadesContext } from "../hooks/FiltroActividadesProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PopUpVerCampos from "../../../components/PopUpVerCampos";
import AtributesDialog from "../../../components/AtributesDialog";

const PoliticasTable = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [atributeOpen, setAtributeOpen] = useState(false);
  const [atributeContent, setAtributeContent] = useState({
    nombre: "",
    contenido: "",
  });
  
  
  const [selectedDescription, setSelectedDescription] = useState("");

  const { filteredPoliticas } = useContext(FiltroActividadesContext);

  const handleShowAttributes = (descripcion) => {
    setSelectedDescription(descripcion);
    setShowDescription(true);
  };
  const handleCloseDescription = () => {
    setAtributeOpen(false);
    setAtributeContent({
      contenido: "",
      nombre: "",
    });
  };
  const handleEditPolitica = (politica) => {
    // Implement your edit logic here, e.g., redirect to edit page
    console.log("Edit politica:", politica);
  };

  const handleDeletePolitica = (politica) => {
    // Implement your delete logic here
    console.log("Delete politica:", politica);
  };


  const [orderBy, setOrderBy] = useState(null);
  const [order, setOrder] = useState("asc");

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");
  };


  const sortedPoliticas = orderBy
    ? filteredPoliticas.sort((a, b) => {
      //Para ordenar alfábeticamente una string
      if (typeof a[orderBy] === "string" && typeof b[orderBy] === "string") {
        if (order === "asc") {
          return a[orderBy].localeCompare(b[orderBy]);
        } else {
          return b[orderBy].localeCompare(a[orderBy]);
        }
      }

      //para ordenar alfabeticamente por actividades (costo total)
      if (orderBy === "actividades") {
        if (order === "asc") {
          return a.actividades.reduce((acc, curr) => acc + curr.costo, 0) - b.actividades.reduce((acc, curr) => acc + curr.costo, 0);
        } else {
          return b.actividades.reduce((acc, curr) => acc + curr.costo, 0) - a.actividades.reduce((acc, curr) => acc + curr.costo, 0);
        }
      }
    })
    : filteredPoliticas;
  return (
    <div>
      <h2>Lista de PPP</h2>
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "nombre"}
                  direction={order}
                  onClick={() => handleSort("nombre")}
                >
                  Nombre
                </TableSortLabel>
              </TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "secretaria"}
                  direction={order}
                  onClick={() => handleSort("secretaria")}
                >
                  Secretaria
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "objetivo"}
                  direction={order}
                  onClick={() => handleSort("objetivo")}
                >
                  Objetivo
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "actividades"}
                  direction={order}
                  onClick={() => handleSort("actividades")}
                >
                  Costo Total
                </TableSortLabel>
              </TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedPoliticas.map((politica) => (
              <TableRow key={politica.id}>
                <TableCell>{politica.nombre}</TableCell>
                <TableCell>
                <PopUpVerCampos
                  contenido={politica.descripcion}
                  titulo="Descripción"
                  setAtributeOpen={setAtributeOpen}
                  setAtributeContent={setAtributeContent}
                />
                </TableCell>
                <TableCell>{politica.secretaria}</TableCell>
                <TableCell>{politica.objetivo}</TableCell>
                <TableCell>
                  $ {politica.actividades.reduce(
                    (acc, curr) => acc + curr.costo,
                    0
                  )}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditPolitica(politica)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeletePolitica(politica)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AtributesDialog
        open={atributeOpen}
        nombre={atributeContent.nombre || ""}
        atributesContent={atributeContent.contenido || ""}
        onClose={handleCloseDescription}
      />
      </TableContainer>
    </div>
  );
};

export default PoliticasTable;
