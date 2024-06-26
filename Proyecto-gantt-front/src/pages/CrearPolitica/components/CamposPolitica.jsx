import {
  TextField,
  Box,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import ListaDesplegable from "../../../components/ListaDesplegable";
import { FormularioPoliticaContext } from "../hooks/FormularioPoliticaProvider";
import { useContext, useState } from "react";

const CamposPolitica = () => {
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
    dataMeta,
    meta,
    setMeta,
  } = useContext(FormularioPoliticaContext);
  const [nombreVacio, setNombreVacio] = useState(false);

  const handleLimpiar = () => {
    setNombre("");
    setSecretaria(null);
    setEje(null);
    setObjetivo(null);
    setDescripcion("");
  };


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

      <h2>Crear Política Pública Prioritaria</h2>
      <TextField
        required
        error={nombreVacio}
        id="nombre"
        label="nombre PPP"
        type="text"
        variant="outlined"
        fullWidth
        helperText={
          nombreVacio ? "Debe ingresar el nombre de la política" : "Ingrese el nombre de la política"
        }
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
      <ListaDesplegable
        isRequired
        list={dataSecretaria}
        stateComponent={secretaria}
        setState={setSecretaria}
        nombre="Secretaria"
        titleTrue
        sx={{ marginY: 0.5 }}
      />
      <ListaDesplegable
        isRequired
        list={dataEje}
        stateComponent={eje}
        setState={setEje}
        nombre="eje"
        onChange={() => {
          setObjetivo(null);
         }}

      />
      <ListaDesplegable
        isRequired
        list={dataObjetivo}
        stateComponent={objetivo}
        setState={setObjetivo}
        nombre="Objetivo Principal"
        sx={{ marginY: 0.5 }}


      />
      <ListaDesplegable
        isRequired
        list={dataMeta}
        stateComponent={meta}
        setState={setMeta}
        nombre="Meta"
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

export default CamposPolitica;
