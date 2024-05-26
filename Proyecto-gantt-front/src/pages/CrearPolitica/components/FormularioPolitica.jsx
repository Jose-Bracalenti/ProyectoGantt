import { TextField, Box, Button } from "@mui/material";
import secretariaServices from "../services/secretariaServices";
import { useEffect, useState } from "react";
import SelectList from "./SelectList";  
import objetivoServices from "../services/objetivoServices";

const FormularioPolitica = () => {
    const [nombre, setNombre] = useState('');
    const [dataSecretaria, setDataSecretaria] = useState([]);
    const [secretaria, setSecretaria] = useState('');
    const [objetivo, setObjetivo] = useState("");
    const [dataObjetivo, setDataObjetivo] = useState([]);

    useEffect(() => {
        secretariaServices.getAll().then((response) => {
            setDataSecretaria(response.data);
        })},[]);

        console.log(dataSecretaria);

    useEffect(() => {
        objetivoServices.getAll().then((response) => {
            setDataObjetivo(response.data);
        })},[]);

    console.log("secretaria ", secretaria);
    return (
        <div>
            <h2>Crear Politica</h2>
                <TextField
                    id="nombre"
                    label="nombre de política"
                    type="text"
                    variant="outlined"
                    fullWidth
                    helperText="Ingrese el nombre de la politica"
                    sx={{marginY: 1}}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <SelectList list={dataSecretaria} stateComponent={secretaria} setState={setSecretaria} name="secretaria"/>
                <SelectList list={dataObjetivo} stateComponent={objetivo} setState={setObjetivo} name="objetivo"/>

                <Box sx={{display: 'flex' ,marginY: 1}}>
                </Box>
                <Button  variant="text" color="secondary">
                Limpiar
                </Button>
        </div>
    );
};

export default FormularioPolitica;
