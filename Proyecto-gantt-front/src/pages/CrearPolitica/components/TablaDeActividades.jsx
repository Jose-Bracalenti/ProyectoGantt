import { useContext, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  TableSortLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ActivityDialog from "./ActivityDialog";
import AtributesDialog from "../../../components/AtributesDialog";
import { ActivitiesTableContext } from "../hooks/ActivitiesTableProvider";
import ConfirmDialog from "./ConfirmDialog";
import PopUpVerCampos from "../../../components/PopUpVerCampos";
import propTypes from "prop-types";



const TablaDeActividades = ({ activities, setActivities}) => {
  const { 
               atributeOpen, setAtributeOpen,
            atributeContent, setAtributeContent, dataArea
  } = useContext(ActivitiesTableContext);


  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(null);
  const [newActivity, setNewActivity] = useState({
    nombre: "",
    fechaInicio: "",
    fechaFin: "",
    area_id: null,
    resultado_esperado: "",
    participacion_ciudadana: "",
    costo: "",
  });
  


  const handleClick =
    ({ condition }) =>
    () => {
      setIsEditing(false);
        newActivity.nombre = "";
        newActivity.fechaInicio = "";
        newActivity.fechaFin = "";
        newActivity.area_id = null;
        newActivity.costo = "";
        newActivity.resultado_esperado = "";
        newActivity.participacion_ciudadana = "";
      setOpen(condition);
    };

    const[openModalDelete, setOpenModalDelete] = useState(false);
    const[deleteActivityIndex, setDeleteActivityIndex] = useState(0);
    const[orderBy, setOrderBy] = useState(null);
    const[order, setOrder] = useState("asc");

    const handleSort = (property) => {
      const isAsc = orderBy === property && order === "asc";
      setOrderBy(property);
      setOrder(isAsc ? "desc" : "asc");
    };

    const sortedActivities = orderBy
      ? activities.sort((a, b) => {
          if (order === "asc") {
            return a[orderBy] > b[orderBy] ? 1 : -1;
          } else {
            return a[orderBy] < b[orderBy] ? 1 : -1;
          }
        })
      : activities;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddActivity = () => {
    setActivities([...activities, newActivity]);
    setNewActivity({
      nombre: "",
      fechaInicio: "",
      fechaFin: "",
      area_id: "",
      costo: "",
      resultado_esperado: "",
      participacion_ciudadana: "",
    });
    setOpen(false);
  };

  const handleEditActivity = (index) => {
    setNewActivity(activities[index]);
    setCurrentActivityIndex(index);
    setIsEditing(true);
    setOpen(true);
    setNewActivity({
      nombre: activities[index].nombre,
      fechaInicio: activities[index].fechaInicio,
      fechaFin: activities[index].fechaFin,
      area_id: activities[index].area_id,
      costo: activities[index].costo,
      resultado_esperado: activities[index].resultado_esperado,
      participacion_ciudadana: activities[index].participacion_ciudadana,
    });
  };

  const handleSaveEditActivity = () => {
    const updatedActivities = activities.map((activity, index) =>
      index === currentActivityIndex ? newActivity : activity
    );
    setActivities(updatedActivities);
    setNewActivity({
      nombre: "",
      fechaInicio: "",
      fechaFin: "",
      area_id: "",
      costo: "",
      resultado_esperado: "",
      participacion_ciudadana: "",
    });
    setOpen(false);
    setIsEditing(false);
  };

  const handleDeleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  const handleCloseDescription = () => {
    setAtributeOpen(false);
    setAtributeContent({
      contenido: "",
      nombre: "",
    });
  };







  //----------------------------------------------------------------------------------------------------




  return (
    <>
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
                active={orderBy === "fechaInicio"}
                direction={order}
                onClick={() => handleSort("fechaInicio")}
              >
              Fecha Inicio
              </TableSortLabel>
              </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "fechaFin"}
                direction={order}
                onClick={() => handleSort("fechaFin")}
              >
              Fecha Fin
              </TableSortLabel>
              </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "area_id"}
                direction={order}
                onClick={() => handleSort("area_id")}
              >
              Área
              </TableSortLabel>
              </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "costo"}
                direction={order}
                onClick={() => handleSort("costo")}
              >
              Costo
              </TableSortLabel>
              </TableCell>
            <TableCell>Resultado Esperado</TableCell>
            <TableCell>Participación ciudadana</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedActivities.map((activity, index) => (
            <TableRow key={index}>
              <TableCell>{activity.nombre}</TableCell>
              <TableCell>{activity.fechaInicio}</TableCell>
              <TableCell>{activity.fechaFin}</TableCell>
              <TableCell>
                {activity.area_id !== "" ? (dataArea.find(item => item.id === activity.area_id)).nombre : ""}
              </TableCell>
              <TableCell>{activity.costo}</TableCell>
              <TableCell>
                <PopUpVerCampos
                  contenido={activity.resultado_esperado}
                  titulo="Resultado esperado"
                  setAtributeContent={setAtributeContent}
                  setAtributeOpen={setAtributeOpen}

                />
              </TableCell>
              <TableCell>
                <PopUpVerCampos
                  contenido={activity.participacion_ciudadana}
                  titulo="Participación ciudadana"
                  setAtributeContent={setAtributeContent}
                  setAtributeOpen={setAtributeOpen}
                />
              </TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => handleEditActivity(index)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => (setOpenModalDelete(true),
                    setDeleteActivityIndex(index))
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={9} align="center">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClick({ condition: true })}
              >
                Agregar Nueva Actividad
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <ActivityDialog
        
        open={open}
        isEditing={isEditing}
        newActivity={newActivity}
        setNewActivity={setNewActivity}
        onChange={handleChange}
        onSave={isEditing ? handleSaveEditActivity : handleAddActivity}
        onCancel={handleClick({ condition: false })}
        onClose={handleClick({ condition: false })}
      />

      <AtributesDialog
        open={atributeOpen}
        nombre={atributeContent.nombre || ""}
        atributesContent={atributeContent.contenido || ""}
        onClose={handleCloseDescription}
      />
    </TableContainer>
    <ConfirmDialog
      open={openModalDelete}
      onClose={() => setOpenModalDelete(false)}
      onConfirm={() => {
        handleDeleteActivity(deleteActivityIndex);
        setOpenModalDelete(false);
      }}
      title="Eliminar Actividad"
      content="¿Estás seguro de que deseas eliminar esta actividad?"
    />
    </>
  );
};

TablaDeActividades.propTypes = {
  activities: propTypes.array,
  setActivities: propTypes.func,
};



export default TablaDeActividades;
