import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TableSortLabel,
} from "@mui/material";
import { useState, useContext } from "react";
import { FiltroDePoliticasContext } from "../hooks/FiltroDePoliticasProvider";
import PopUpVerCampos from "../../../components/PopUpVerCampos";
import AtributesDialog from "../../../components/AtributesDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const TablaDePoliticas = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("nombre");
  const [atributeOpen, setAtributeOpen] = useState(false);
  const [atributeContent, setAtributeContent] = useState("");
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [deletePoliticaIndex, setDeletePoliticaIndex] = useState(-1);

  const { politicas } = useContext(FiltroDePoliticasContext);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedPoliticas = politicas.sort((a, b) => {
    if (order === "asc") {
      return a[orderBy].localeCompare(b[orderBy]);
    } else {
      return b[orderBy].localeCompare(a[orderBy]);
    }
  });

  const handleCloseDescription = () => {
    setAtributeOpen(false);
  };

    const handleEditPolitica = (index) => {
    console.log("Editando politica", index);
    }

    


  return (
    <div>
      <h2>Tabla de Politicas</h2>
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
                  active={orderBy === "costoTotalEstimado"}
                  direction={order}
                  onClick={() => handleSort("costoTotalEstimado")}
                >
                  Costo Total Estimado
                </TableSortLabel>
              </TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedPoliticas.map((politica , index) => (
              <TableRow key={politica.id}>
                <TableCell>{politica.nombre}</TableCell>
                <TableCell>{politica.secretaria}</TableCell>
                <TableCell>{politica.objetivo}</TableCell>
                <TableCell>
                  {politica.actividades.reduce(
                    (acc, act) => acc + act.costo,
                    0
                  )}
                </TableCell>
                <TableCell>
                  <PopUpVerCampos
                    title="Descripción"
                    content={politica.descripcion}
                    setAtributeContent={setAtributeContent}
                    setAtributeOpen={setAtributeOpen}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditPolitica(index)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => (
                      setOpenModalDelete(true), setDeletePoliticaIndex(index)
                    )}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AtributesDialog
        open={atributeOpen}
        nombre={atributeContent.nombre || ""}
        atributesContent={atributeContent.contenido || ""}
        onClose={handleCloseDescription}
      />
    </div>
  );
};
