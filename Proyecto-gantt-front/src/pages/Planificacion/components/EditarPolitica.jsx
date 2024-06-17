import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button
} from '@mui/material';

const EditPolitica = () => {
  const { id } = useParams();
  const [politica, setPolitica] = useState(null);

  useEffect(() => {
    // Fetch the politica data by id (replace this with your data fetching logic)
    const fetchPolitica = async () => {
      // Replace this with your actual fetch logic
      const fetchedPolitica = await fetch(`/api/politicas/${id}`).then(res => res.json());
      setPolitica(fetchedPolitica);
    };

    fetchPolitica();
  }, [id]);

  if (!politica) {
    return <div>Loading...</div>;
  }

  const handleSave = () => {
    // Implement save logic here
    console.log('Save politica:', politica);
  };

  return (
    <div>
      <h2>Edit Politica</h2>
      <TextField
        label="Nombre"
        value={politica.nombre}
        onChange={(e) => setPolitica({ ...politica, nombre: e.target.value })}
        fullWidth
      />
      <TextField
        label="Descripción"
        value={politica.descripcion}
        onChange={(e) => setPolitica({ ...politica, descripcion: e.target.value })}
        fullWidth
      />
      <TextField
        label="Objetivo"
        value={politica.objetivo}
        onChange={(e) => setPolitica({ ...politica, objetivo: e.target.value })}
        fullWidth
      />
      <TextField
        label="Secretaria"
        value={politica.secretaria}
        onChange={(e) => setPolitica({ ...politica, secretaria: e.target.value })}
        fullWidth
      />
      <h3>Actividades</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Fecha Inicio</TableCell>
              <TableCell>Fecha Fin</TableCell>
              <TableCell>Participación Ciudadana</TableCell>
              <TableCell>Resultado Esperado</TableCell>
              <TableCell>Costo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {politica.actividades.map((actividad) => (
              <TableRow key={actividad.id}>
                <TableCell>{actividad.nombre}</TableCell>
                <TableCell>{actividad.descripcion}</TableCell>
                <TableCell>{actividad.fechaInicio}</TableCell>
                <TableCell>{actividad.fechaFin}</TableCell>
                <TableCell>{actividad.participacion_ciudadana}</TableCell>
                <TableCell>{actividad.resultado_esperado}</TableCell>
                <TableCell>{actividad.costo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default EditPolitica;
