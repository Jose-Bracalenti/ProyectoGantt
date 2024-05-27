// src/ActivitiesTable.js

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
import AtributesDialog from "./AtributesDialog";
import { ActivitiesTableContext } from "../hooks/ActivitiesTableProvider";

const ActivitiesTable = () => {
  const { 
    activities, setActivities,
            open, setOpen,
            isEditing, setIsEditing,
            currentActivityIndex, setCurrentActivityIndex,
            newActivity, setNewActivity,
            atributeOpen, setAtributeOpen,
            atributeContent, setAtributeContent
  } = useContext(ActivitiesTableContext);

  const handleClick =
    ({ condition }) =>
    () => {
        newActivity.nombre = "";
        newActivity.descripcion = "";
        newActivity.fechaInicio = "";
        newActivity.fechaFin = "";
        newActivity.area = "";
      setOpen(condition);
    };

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
      area: "",
    });
    setOpen(false);
  };

  const handleEditActivity = (index) => {
    setNewActivity(activities[index]);
    setCurrentActivityIndex(index);
    setIsEditing(true);
    setOpen(true);
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
      area: "",
    });
    setIsEditing(false);
    setOpen(false);
  };

  const handleDeleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  const handleShowAtributes = (atribute) => () => {
    setAtributeContent(atribute);
    setAtributeOpen(true);
  };

  const handleCloseDescription = () => {
    setAtributeOpen(false);
    setAtributeContent("");
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Fecha Inicio</TableCell>
            <TableCell>Fecha Fin</TableCell>
            <TableCell>Área</TableCell>
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
                    <IconButton
                      color="primary"
                      onClick={handleShowAtributes(activity.descripcion)}
                      disabled={!activity.descripcion}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </TableCell>
              <TableCell>{activity.fechaInicio}</TableCell>
              <TableCell>{activity.fechaFin}</TableCell>
              <TableCell>{activity.area}</TableCell>
              <TableCell>
                <Tooltip
                  title={
                    activity.resultadoEsperado
                      ? "Mostrar resultado Esperado"
                      : "resultado Esperado sin completar"
                  }
                >
                  <span>
                    <IconButton
                      color="primary"
                      onClick={handleShowAtributes(activity.resultadoEsperado)}
                      disabled={!activity.resultadoEsperado}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </TableCell>
              <TableCell>
                <Tooltip
                  title={
                    activity.participacionCiudadana
                      ? "Mostrar Participación ciudadana"
                      : "Participación ciudadana sin completar"
                  }
                >
                  <span>
                    <IconButton
                      color="primary"
                      onClick={handleShowAtributes(activity.participacionCiudadana)}
                      disabled={!activity.participacionCiudadana}
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
                  onClick={() => handleDeleteActivity(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={8} align="center">
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
        onChange={handleChange}
        onSave={isEditing ? handleSaveEditActivity : handleAddActivity}
        onCancel={handleClick({ condition: false })}
      />

      <AtributesDialog
        open={atributeOpen}
        descriptionContent={atributeContent}
        onClose={handleCloseDescription}
      />
    </TableContainer>
  );
};

export default ActivitiesTable;
