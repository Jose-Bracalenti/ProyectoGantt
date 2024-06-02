import React, { useState, useContext } from 'react';
import { TextField, Box, Button, Snackbar, Alert, IconButton } from '@mui/material';
import SelectList from '../../../components/SelectList'; // Assuming SelectList is correctly implemented and imported
import CloseIcon from '@mui/icons-material/Close';
import { FiltroActividadesContext } from '../hooks/FiltroActividadesProvider'; // Adjust the path if needed

const FiltroActividades = () => {
  const {
    nombre,
    setNombre,
    secretarias,
    ejes,
    objetivos,
    areas,
    secretaria,
    setSecretaria,
    eje,
    setEje,
    objetivo,
    setObjetivo,
    area,
    setArea,
    politicas,
    filteredPoliticas,
    setfilteredPoliticas,
    fechaInicio,
    setFechaInicio,
    fechaFin,
    setFechaFin,
    openAlerta,
    setOpenAlerta,
    alertaServidor,
    handleAlertClose,
    resetForm
  } = useContext(FiltroActividadesContext);

  const handleLimpiar = () => {
    setNombre('');
    setSecretaria('');
    setEje('');
    setObjetivo('');
    setArea('');
    setFechaInicio('');
    setFechaFin('');
  };

  const handleSubmit = () => {
    console.log(fechaInicio);
    console.log(fechaFin);
    
    const filtroPolitica = politicas.filter(politica => {
      const isMatchingObjetivoOrEje = politica.objetivo_id === objetivo || (!objetivo && politica.eje_id === eje) || (!objetivo && !eje);
      const isMatchingSecretaria = politica.secretaria_id === secretaria || !secretaria;
      const isMatchingArea = politica.actividades.some(actividad => actividad.area_id === area) || !area;
      const isWithinDateRange = politica.actividades.some(actividad => (
        (!fechaInicio || actividad.fechaInicio >= fechaInicio) &&   
        (!fechaFin || actividad.fechaFin <= fechaFin) || !fechaInicio && !fechaFin
      ));
      
      return isMatchingObjetivoOrEje && isMatchingSecretaria && isMatchingArea && isWithinDateRange;
    });
    
    console.log(filtroPolitica);
    setfilteredPoliticas(filtroPolitica);
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
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertaServidor.status}
          sx={{ width: '100%' }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleAlertClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {alertaServidor.mensaje}
        </Alert>
      </Snackbar>

      <h2>Filtrar Actividades</h2>
      <div style={{ display: 'flex', flexDirection: 'column'}}>

        <SelectList
          nombre="Secretaria"
          list={secretarias}
          stateComponent={secretaria}
          setState={setSecretaria}
          sx={{ marginBottom: 1, marginRight: 3 }}
        />
        <SelectList
          nombre="Eje"
          list={ejes}
          stateComponent={eje}
          setState={setEje}
          sx={{ marginBottom: 1, marginRight: 1 }}
        />
        <SelectList
          nombre="Objetivo"
          list={objetivos}
          stateComponent={objetivo}
          setState={setObjetivo}
          sx={{ marginBottom: 1, marginRight: 1 }}
        />
        <SelectList
          nombre="Area"
          list={areas}
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
        <Button sx={{marginX : "1rem"}}variant="contained" color="primary" onClick={handleSubmit}>
          Filtrar
        </Button>
      </Box>
      
    </div>
  );
};

export default FiltroActividades;
