import { TextField, Box, Button } from "@mui/material";
import secretariaServices from "../services/secretariaServices";
import { useEffect, useState } from "react";
import SelectList from "./SelectList";
import objetivoServices from "../services/objetivoServices";
import ejeServices from "../services/ejeServices";

const FormularioPolitica = () => {
  const [nombre, setNombre] = useState("");
  const [dataSecretaria, setDataSecretaria] = useState([]);
  const [secretaria, setSecretaria] = useState("");
  const [eje, setEje] = useState("");
  const [dataEje, setDataEje] = useState([]);
  const [objetivo, setObjetivo] = useState("");
  const [dataObjetivo, setDataObjetivo] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [costo, setCosto] = useState("");

  useEffect(() => {
    secretariaServices.getAll().then((response) => {
      setDataSecretaria(response.data);
    });
  }, []);

  console.log(dataSecretaria);

  useEffect(() => {
    objetivoServices.getObjetivosByEjes(eje).then((response) => {
      setDataObjetivo(response.data);
    });
  }, [eje]);
  
 
    console.log(dataObjetivo);

    useEffect(() => {
        ejeServices.getAll().then((response) => {
            setDataEje(response.data);
        }); 
    }, []);


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
        id="nombre"
        label="nombre de política"
        type="text"
        variant="outlined"
        fullWidth
        helperText="Ingrese el nombre de la politica"
        sx={{ marginY: 1 }}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <SelectList
        list={dataSecretaria}
        stateComponent={secretaria}
        setState={setSecretaria}
        name="secretaria"
      />
      <SelectList
        list={dataEje}
        stateComponent={eje}
        setState={setEje}
        name="eje"
        />
      <SelectList
        list={dataObjetivo}
        stateComponent={objetivo}
        setState={setObjetivo}
        name="objetivo"
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
