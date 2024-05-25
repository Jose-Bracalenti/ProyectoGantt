import React from "react";
import { TextField, Box, Button } from "@mui/material";
import areaServices from "../services/areaServices";
import { useEffect, useState } from "react";
import SelectList from "./SelectList";  

const FormularioPolitica = () => {
    const [dataArea, setDataArea] = useState([]);
    const [area, setArea] = useState('');
    const [objetivo, setObjetivo] = useState("");
    const [dataObjetivo, setDataObjetivo] = useState([]);

    useEffect(() => {
        areaServices.getAll().then((response) => {
            setDataArea(response.data);
        })},[]);
    

        console.log(dataArea);

    const handleChange = (e) => {
        setArea(e.target.value);
    };

    console.log("area ", area);
    return (
        <div>
            <h2>Crear Politica</h2>
            <form>
                <TextField
                    id="nombre"
                    label="nombre de política"
                    type="text"
                    variant="outlined"
                    fullWidth
                    helperText="Ingrese el nombre de la politica"
                    sx={{marginY: 1}}
                />
                <SelectList list={dataArea} stateComponent={area} setState={setArea} name="area"/>
                <SelectList list={dataObjetivo} stateComponent={objetivo} setState={setObjetivo} name="objetivo"/>

                <Box sx={{display: 'flex' ,marginY: 1}}>

                <Button sx={{marginRight: 5}} variant="contained" color="primary">
                Enviar
                </Button>
                <Button variant="text" color="secondary">
                Limpiar
                </Button>
                </Box>
                

            </form>
        </div>
    );
};

export default FormularioPolitica;
