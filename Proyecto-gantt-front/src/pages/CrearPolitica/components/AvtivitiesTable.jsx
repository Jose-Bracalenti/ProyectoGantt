// src/ActivitiesTable.js

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ActivitiesTable = () => {
  const [activities, setActivities] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(null);
  const [newActivity, setNewActivity] = useState({
    nombre: '',
    descripcion: '',
    fechaInicio: '',
    fechaFin: '',
    area: ''
  });

  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [descriptionContent, setDescriptionContent] = useState('');

  const handleClick = ({ condition }) => () => {
    setOpen(condition);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddActivity = () => {
    setActivities([...activities, newActivity]);
    setNewActivity({
      nombre: '',
      descripcion: '',
      fechaInicio: '',
      fechaFin: '',
      area: ''
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
      nombre: '',
      descripcion: '',
      fechaInicio: '',
      fechaFin: '',
      area: ''
    });
    setIsEditing(false);
    setOpen(false);
  };

  const handleDeleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  const handleShowDescription = (description) => () => {
    setDescriptionContent(description);
    setDescriptionOpen(true);
  };

  const handleCloseDescription = () => {
    setDescriptionOpen(false);
    setDescriptionContent('');
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
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((activity, index) => (
            <TableRow key={index}>
              <TableCell>{activity.nombre}</TableCell>
              <TableCell>
                <Tooltip title={activity.descripcion ? "Mostrar descripción" : "No hay descripción disponible"}>
                  <span>
                    <IconButton
                      color="primary"
                      onClick={handleShowDescription(activity.descripcion)}
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
                <IconButton color="primary" onClick={() => handleEditActivity(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDeleteActivity(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={6} align="center">
              <Button variant="contained" color="primary" onClick={handleClick({ condition: true })}>
                Agregar Nueva Actividad
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Dialog open={open} onClose={handleClick({ condition: false })}>
        <DialogTitle>{isEditing ? 'Modificar Actividad' : 'Agregar Nueva Actividad'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, completa los siguientes campos para {isEditing ? 'modificar' : 'agregar'} una actividad.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="nombre"
            label="Nombre"
            type="text"
            fullWidth
            value={newActivity.nombre}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="descripcion"
            label="Descripción"
            type="text"
            fullWidth
            value={newActivity.descripcion}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="fechaInicio"
            label="Fecha Inicio"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newActivity.fechaInicio}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="fechaFin"
            label="Fecha Fin"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newActivity.fechaFin}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="area"
            label="Área"
            type="text"
            fullWidth
            value={newActivity.area}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick({ condition: false })} color="secondary">
            Cancelar
          </Button>
          {isEditing ? (
            <Button onClick={handleSaveEditActivity} color="primary">
              Guardar
            </Button>
          ) : (
            <Button onClick={handleAddActivity} color="primary">
              Agregar
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Dialog open={descriptionOpen} onClose={handleCloseDescription}>
        <DialogTitle>Descripción</DialogTitle>
        <DialogContent>
          <DialogContentText>{descriptionContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDescription} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default ActivitiesTable;
