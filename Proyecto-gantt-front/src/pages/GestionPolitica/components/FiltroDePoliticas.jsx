import { useContext, useState } from "react";
import { FiltroDePoliticasContext } from "../hooks/FiltroDePoliticasProvider";
import { Box, Button, TextField } from "@mui/material";
import ListaDesplegable from "../../../components/ListaDesplegable";
import politicasService from "../../../services/politicasServices";


export const FiltroDePoliticas = () => {
    const { dataSecretaria, dataEje, 
        dataObjetivo,  dataAreas,
        secretaria, setSecretaria,
        eje, setEje,
        objetivo, setObjetivo,
       setShowDiagram,
       setPoliticas,
       areas, setAreas,
     } = useContext(FiltroDePoliticasContext);
     const [fechaInicio, setFechaInicio] = useState("");
      const [fechaFin, setFechaFin] = useState("");
      const [errorFechaInicio, setErrorFechaInicio] = useState(false);
      const [errorFechaFin, setErrorFechaFin] = useState(false);
      const [errorComparacionFechas, setErrorComparacionFechas] = useState(false);


     console.log("secretaria",secretaria);
      console.log("eje",eje);

    const handleLimpiar = () => {
        setSecretaria([]);
        setEje([]);
        setObjetivo([]);
        setAreas([]);
        setFechaInicio("");
        setFechaFin("");
    }

    const handleBuscar = () => {
        setShowDiagram(false)
        politicasService.getWithFilter(secretaria, eje, objetivo, areas, fechaInicio, fechaFin)
        .then((response) => {
            console.log("response", response.data);
            setPoliticas(response.data);
        })
        .catch((error) => {
            console.log("error", error);
        })
    }

    const verificacionFechas = ({setError, fecha}) => {
      if (fecha === "" || fecha === null) setError(false) 
      if (fecha < "1900-01-01" || fecha > "2100-01-01") {
        setError(true);
      }
      else {
        setError(false);
      }
    }

    const comparacionFechas = () => {
      if(fechaInicio === "" || fechaFin === "") return setErrorComparacionFechas(false);
      if (fechaInicio > fechaFin) {
        setErrorComparacionFechas(true);
      }
      else {
        setErrorComparacionFechas(false);
      }
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
      <ListaDesplegable
      multiple
        isRequired
        list={dataAreas}
        stateComponent={areas}
        setState={setAreas}
        nombre="Areas"
        sx={{ marginY: 0.5 }}
      />
      <TextField
          margin="dense"
          name="fechaInicio"
          label="Fecha Inicio"
          type="date"
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={fechaInicio}
          onChange= {(e) => setFechaInicio(e.target.value)}
          error={errorFechaInicio || errorComparacionFechas}
          helperText={
            errorFechaInicio ? "La fecha debe estar entre 1900 y 2100" : errorComparacionFechas ? "La fecha de inicio debe ser menor a la de fin" : ""
          }
          onBlur={() => {
            verificacionFechas({setError: setErrorFechaInicio, fecha: fechaInicio});
            comparacionFechas();
          } }
        />
       <TextField
          margin="dense"
          name="fechaFin"
          label="Fecha Fin"
          type="date"
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={fechaFin}
          onChange= {(e) => setFechaFin(e.target.value)}
          error={errorFechaFin || errorComparacionFechas}
          helperText={
            errorFechaFin ? "La fecha debe estar entre 1900 y 2100" : errorComparacionFechas ? "La fecha de fin debe ser mayor a la de inicio" : ""
          }
          onBlur={() => {
            verificacionFechas({setError: setErrorFechaFin, fecha: fechaFin});
            comparacionFechas();
          } }
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

