import { useContext } from "react";
import { FiltroDePoliticasContext } from "../hooks/FiltroDePoliticasProvider";
import { Box, Button } from "@mui/material";
import ListaDesplegable from "../../../components/ListaDesplegable";


export const FiltroDePoliticas = () => {
    const { dataSecretaria, dataEje, 
        dataObjetivo, 
        secretaria, setSecretaria,
        eje, setEje,
        objetivo, setObjetivo,
       setShowDiagram
     } = useContext(FiltroDePoliticasContext);

    const handleLimpiar = () => {
        setSecretaria([]);
        setEje([]);
        setObjetivo([]);
    }

    const handleBuscar = () => {
        setShowDiagram(false)
        console.log("Buscando politicas");

    }

    
    return (
        <div>
        <h2>Filtro de Politicas</h2>
      <ListaDesplegable
        multiple
        isRequired
        list={dataSecretaria}
        stateComponent={secretaria}
        setState={setSecretaria}
        nombre="Secretaria"
        titleTrue
        sx={{ marginY: 0.5 }}
      />
      <ListaDesplegable
      multiple
        isRequired
        list={dataEje}
        stateComponent={eje}
        setState={setEje}
        nombre="eje"
      />
      <ListaDesplegable
      multiple
        isRequired
        list={dataObjetivo}
        stateComponent={objetivo}
        setState={setObjetivo}
        nombre="Objetivo Principal"
        sx={{ marginY: 0.5 }}
      />

      <Box sx={{ display: "flex", marginY: 1, float:'right' }}>
      <Button variant="text" color="secondary" onClick={handleLimpiar}>
        Limpiar
      </Button>
      <Button variant="contained" color="primary"
      onClick={handleBuscar}
      >
        Buscar
        </Button>
      
        </Box>
        </div>
    );
    };

