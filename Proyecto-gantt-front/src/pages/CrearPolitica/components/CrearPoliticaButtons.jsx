import { Button, Tooltip } from "@mui/material";
import { useContext } from "react";
import { FormularioPoliticaContext } from "./FormularioPoliticaProvider";
import axios from "axios";
import politicasService from "../services/politicasServices";


const CrearPoliticaButtons = () => {
    const {nombre,
        secretaria,
        eje,
        objetivo,
        descripcion,
        costo,
        } = useContext(FormularioPoliticaContext);

        let camposCompletos = false;
        if (nombre !== "" && secretaria !== "" && eje !== "" && objetivo !== ""  && costo !== "") {
            camposCompletos = true;
        }
        const buttonTitle = camposCompletos ? "Crear ppp" : "Complete los campos con (*) para crear ppp"
    const handleCrear = () => {
        console.log("crear politica");
        const politica = {
            nombre: nombre,
            secretaria: secretaria,
            eje: eje,
            objetivo: objetivo,
            descripcion: descripcion,
            costo: costo
        }
        politicasService.create(politica).then((response) => {
            console.log(response);
        });
    };
return (
    <div style={{ display: 'flex', justifyContent: 'right', marginRight:'5rem' }}>
        
    <Button sx={{marginRight: 5}} variant="outlined" color="secondary">
            Cancelar
            </Button>
            <Tooltip title={buttonTitle}>
        <span>
            <Button 
            disabled={!camposCompletos} 
            variant="contained" 
            color="primary" 
            onClick={handleCrear}>
            Crear Politica
            </Button>
        </span>
        </Tooltip>
            
        </div>
    );
}

export default CrearPoliticaButtons;