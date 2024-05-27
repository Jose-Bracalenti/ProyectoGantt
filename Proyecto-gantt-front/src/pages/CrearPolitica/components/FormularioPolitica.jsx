import { TextField, Box, Button, Autocomplete } from "@mui/material";

import SelectList from "./SelectList";

import { FormularioPoliticaContext } from "../hooks/FormularioPoliticaProvider";
import { useContext, useState } from "react";

const FormularioPolitica = () => {
  const {
    nombre,
    setNombre,
    dataSecretaria,
    secretaria,
    setSecretaria,
    eje,
    setEje,
    dataEje,
    objetivo,
    setObjetivo,
    dataObjetivo,
    descripcion,
    setDescripcion,
    costo,
    setCosto,
  } = useContext(FormularioPoliticaContext);
  const [nombreVacio, setNombreVacio] = useState(false);

  console.log("secretaria ", secretaria);

  const handleLimpiar = () => {
    setNombre("");
    setSecretaria("");
    setObjetivo("");
    setDescripcion("");
    setCosto("");
  };

  return (
    <div>
      <h2>Crear política pública prioritaria</h2>
      <TextField
        required
        error={nombreVacio}
        id="nombre"
        label="nombre de política"
        type="text"
        variant="outlined"
        fullWidth
        helperText="Ingrese el nombre de la politica"
        sx={{ marginY: 1 }}
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
          setNombreVacio(false);
        }}
        onBlur={(e) => {
          if (e.target.value === "") setNombreVacio(true);
          else setNombreVacio(false);
        }}
      />
      <SelectList
        list={dataSecretaria}
        stateComponent={secretaria}
        setState={setSecretaria}
        nombre="secretaria"
      />
      <SelectList
        list={dataEje}
        stateComponent={eje}
        setState={setEje}
        nombre="eje"
      />
      <Autocomplete
        required
        fullWidth     
        disablePortal
        id="combo-box-demo"
        options={dataObjetivo}
        getOptionLabel={(option) => option.nombre}
        sx={{ marginY: 1 }}
        renderInput={(params) => <TextField {...params} label="Objetivo" />}
      />
      <TextField
        id="costo"
        label="Costo"
        type="number"
        variant="outlined"
        fullWidth
        helperText="Ingrese el costo de la politica"
        sx={{ marginY: 1 }}
        value={costo}
        onChange={(e) => setCosto(e.target.value)}
      />
      <TextField
        id="descripcion"
        label="Descripción"
        type="text"
        variant="outlined"
        fullWidth
        helperText="Ingrese la descripción de la politica"
        sx={{ marginY: 1 }}
        multiline
        rows={4}
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <Box sx={{ display: "flex", marginY: 1 }}></Box>
      <Button variant="text" color="secondary" onClick={handleLimpiar}>
        Limpiar
      </Button>
    </div>
  );
};

export default FormularioPolitica;
