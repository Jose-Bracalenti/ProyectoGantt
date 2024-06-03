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
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ActivityDialog from "./ActivityDialog";
import AtributesDialog from "../../../components/AtributesDialog";
import { ActivitiesTableContext } from "../hooks/ActivitiesTableProvider";
import ConfirmDialog from "./ConfirmDialog";

const ActivitiesTable = () => {
  const { 
    activities, setActivities,
            open, setOpen,
            isEditing, setIsEditing,
            currentActivityIndex, setCurrentActivityIndex,
            newActivity, setNewActivity,
            atributeOpen, setAtributeOpen,
            atributeContent, setAtributeContent, dataArea
  } = useContext(ActivitiesTableContext);

  const handleClick =
    ({ condition }) =>
    () => {
        newActivity.nombre = "";
        newActivity.descripcion = "";
        newActivity.fechaInicio = "";
        newActivity.fechaFin = "";
        newActivity.area_id = "";
        newActivity.costo = "";
        newActivity.resultado_esperado = "";
        newActivity.participacion_ciudadana = "";
        setIsEditing(false);
      setOpen(condition);
    };

    const[openModalDelete, setOpenModalDelete] = useState(false);
    const[deleteActivityIndex, setDeleteActivityIndex] = useState(0);

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
      descripcion: "",
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
      descripcion: activities[index].descripcion,
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
      descripcion: "",
      fechaInicio: "",
      fechaFin: "",
      area_id: "",
      costo: "",
      resultado_esperado: "",
      participacion_ciudadana: "",
    });
    setIsEditing(false);
    setOpen(false);
  };

  const handleDeleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  const handleShowAtributes = (contenido, nombre) => () => {
    setAtributeOpen(true);
    setAtributeContent({
      contenido: contenido,
      nombre: nombre,
    });
  };

  const handleCloseDescription = () => {
    setAtributeOpen(false);
    setAtributeContent({
      contenido: "",
      nombre: "",
    });
  };

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  console.log("activities", activities);

  return (
    <>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Fecha Inicio</TableCell>
            <TableCell>Fecha Fin</TableCell>
            <TableCell>Área</TableCell>
            <TableCell>Costo</TableCell>
            <TableCell>Resultado Esperado</TableCell>
            <TableCell>Participación ciudadana</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((activity, index) => (
            <TableRow key={index}>
              <TableCell>{activity.nombre}</TableCell>
              <TableCell>
                <Tooltip
                  title={
                    activity.descripcion
                      ? "Mostrar descripción"
                      : "Sin descripción"
                  }
                >
                  <span>
                    {truncateText(activity.descripcion, 5)}
                    {activity.descripcion && (
                      <IconButton
                        color="primary"
                        onClick={handleShowAtributes(activity.descripcion, "Descripción")}
                        disabled={!activity.descripcion}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    )}
                  </span>
                </Tooltip>
              </TableCell>
              <TableCell>{activity.fechaInicio}</TableCell>
              <TableCell>{activity.fechaFin}</TableCell>
              <TableCell>
                {activity.area_id !== "" ? (dataArea.find(item => item.id === activity.area_id)).nombre : ""}
              </TableCell>
              <TableCell>{activity.costo}</TableCell>
              <TableCell>
                <Tooltip
                  title={
                    activity.resultado_esperado
                      ? "Mostrar resultado Esperado"
                      : "resultado Esperado sin completar"
                  }
                >
                  <span>
                  {truncateText(activity.resultado_esperado, 5)}
                    <IconButton
                      color="primary"
                      onClick={handleShowAtributes(activity.resultado_esperado, "Resultado Esperado")}
                      disabled={!activity.resultado_esperado}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </TableCell>
              <TableCell>
                <Tooltip
                  title={
                    activity.participacion_ciudadana
                      ? "Mostrar Participación ciudadana"
                      : "Participación ciudadana sin completar"
                  }
                >
                  <span>
                  {truncateText(activity.participacion_ciudadana, 5)}

                    <IconButton
                      color="primary"
                      onClick={handleShowAtributes(activity.participacion_ciudadana, "Participación ciudadana")}
                      disabled={!activity.participacion_ciudadana}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </span>
                </Tooltip>
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
                color="primary"
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
        activity={newActivity}
        setActiviy={setNewActivity}
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

export default ActivitiesTable;
