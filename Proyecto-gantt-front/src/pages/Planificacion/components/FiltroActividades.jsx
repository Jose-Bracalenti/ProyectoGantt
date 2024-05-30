import React, { useState } from 'react';
import { TextField, Box, Button, Snackbar, Alert, IconButton } from '@mui/material';
import SelectList from './SelectList'; // Assuming SelectList is correctly implemented and imported
import CloseIcon from '@mui/icons-material/Close';

const FiltroActividades = () => {
  const [nombre, setNombre] = useState('');
  const [secretaria, setSecretaria] = useState('');
  const [eje, setEje] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [costo, setCosto] = useState('');
  const [nombreVacio, setNombreVacio] = useState(false);
  const [openAlerta, setOpenAlerta] = useState(false);
  const [alertaServidor, setAlertaServidor] = useState({});
  const [area, setArea] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleLimpiar = () => {
    setNombre('');
    setSecretaria('');
    setEje('');
    setObjetivo('');
    setDescripcion('');
    setCosto('');
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openAlerta}
        autoHideDuration={6000}
        onClose={() => setOpenAlerta(false)}
      >
        <Alert
          onClose={() => setOpenAlerta(false)}
          severity={alertaServidor.status}
          sx={{ width: '100%' }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setOpenAlerta(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {alertaServidor.mensaje}
        </Alert>
      </Snackbar>

      <h2>Crear filtro de actividades</h2>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <TextField
          id="nombre"
          label="Nombre del filtro"
          type="text"
          variant="outlined"
          fullWidth
          helperText="Ingrese el nombre del filtro"
          sx={{ marginBottom: 1, marginRight: 1 }}
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            setNombreVacio(false);
          }}
          onBlur={(e) => {
            if (e.target.value === '') setNombreVacio(true);
            else setNombreVacio(false);
          }}
        />
        <SelectList
          nombre="Secretaria"
          list={[] /* Provide the list of secretarias */}
          stateComponent={secretaria}
          setState={setSecretaria}
          sx={{ marginBottom: 1, marginRight: 3 }}
        />
        <SelectList
          nombre="Eje"
          list={[] /* Provide the list of ejes */}
          stateComponent={eje}
          setState={setEje}
          sx={{ marginBottom: 1, marginRight: 1 }}
        />
        <SelectList
          nombre="Objetivo"
          list={[] /* Provide the list of objetivos */}
          stateComponent={objetivo}
          setState={setObjetivo}
          sx={{ marginBottom: 1, marginRight: 1 }}
        />
        <SelectList
          nombre="Area"
          list={[] /* Provide the list of objetivos */}
          stateComponent={area}
          setState={setArea}
          sx={{ marginBottom: 1, marginRight: 1 }}
        />
        <TextField
          id="fechaInicio"
          label="Fecha inicio"
          type="date"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: 3, marginRight: 1 }}
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
        />
        <TextField
          id="fechaFin"
          label="Fecha fin"
          type="date"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: 1, marginRight: 1 }}
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
        />
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
        <Button variant="outlined" color="secondary" onClick={handleLimpiar}>
          Limpiar
        </Button>
        <Button variant="contained" color="primary" >
          Filtrar
        </Button>
      </Box>
      
    </div>
  );
};

export default FiltroActividades;
