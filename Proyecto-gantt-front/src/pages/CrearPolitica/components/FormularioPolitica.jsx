import {
  TextField,
  Box,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import SelectList from "../../../components/SelectList";
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
    alertaServidor,
    openAlerta,
    setOpenAlerta,
  } = useContext(FormularioPoliticaContext);
  const [nombreVacio, setNombreVacio] = useState(false);

  console.log("secretaria ", secretaria);
  const handleLimpiar = () => {
    setNombre("");
    setSecretaria("");
    setObjetivo("");
    setDescripcion("");
  };
  console.log("error ", alertaServidor);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={openAlerta}
        autoHideDuration={6000} // Duración en milisegundos para ocultar automáticamente la Snackbar
        onClose={() => {
          setOpenAlerta(false);
        }}
      >
        <Alert
          onClose={() => { setOpenAlerta(false); }}
          severity={alertaServidor.status}
          sx={{ width: "100%" }}
        >
          {alertaServidor.mensaje}
        </Alert>
      </Snackbar>

      <h2>Crear política pública prioritaria</h2>
      <TextField
        required
        error={nombreVacio}
        id="nombre"
        label="nombre ppp"
        type="text"
        variant="outlined"
        fullWidth
        helperText="Ingrese el nombre de la politica pública prioritaria"
        sx={{ marginY: 0.5}}
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
        nombre="Secretaria"
        titleTrue
        sx={{ marginY: 0.5 }}
      />
      <SelectList
        list={dataEje}
        stateComponent={eje}
        setState={setEje}
        nombre="eje"
      />
      <SelectList
        list={dataObjetivo}
        stateComponent={objetivo}
        setState={setObjetivo}
        nombre="Objetivo Principal"
        sx={{ marginY: 0.5 }}
      />
      <TextField
        id="descripcion"
        label="Descripción"
        type="text"
        variant="outlined"
        fullWidth
        helperText="Ingrese la descripción de la politica"
        sx={{ marginY: 0.5 }}
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
