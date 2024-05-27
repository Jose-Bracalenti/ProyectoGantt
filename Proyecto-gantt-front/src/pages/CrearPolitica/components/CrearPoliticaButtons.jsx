import { Button, Tooltip } from "@mui/material";
import { useContext } from "react";
import { FormularioPoliticaContext } from "../hooks/FormularioPoliticaProvider";
import { ActivitiesTableContext } from "../hooks/ActivitiesTableProvider";
import axios from "axios";
import politicasService from "../services/politicasServices";
//import GanttActivities from "../../../components/GanttActivities";


const CrearPoliticaButtons = () => {
    const {nombre,
        secretaria,
        objetivo,
        descripcion,
        costo,
        } = useContext(FormularioPoliticaContext);

        const { activities } = useContext(ActivitiesTableContext);

        let camposCompletos = false;
        if (nombre !== "" && costo !== "") {
            camposCompletos = true;
        }
        const buttonTitle = camposCompletos ? "Crear ppp" : "Complete los campos con (*) para crear ppp"
    
        const handleCrear = () => {
        console.log("crear politica");
        const actividades = activities.map(({ nombre, descripcion,fechaInicio,fechaFin, area_id, resultado_esperado, participacion_ciudadana }) => 
        ({ nombre, descripcion,fechaInicio,fechaFin, area_id, resultado_esperado, participacion_ciudadana }));
        const politica = {
            nombre: nombre,
            secretaria_id: secretaria,
            objetivo_id: objetivo,
            descripcion: descripcion,
            costo: costo,
            actividades: actividades

        }
        politicasService.create(politica).then((response) => {
            console.log(response);
        });
    };


    const handlePreVisualizar = () => {
        console.log("previsualizar");
  
    }
return (
    <div style={{ display: 'flex', justifyContent: 'right', marginRight:'5rem' }}>
        
    <Button sx={{marginRight: 5}} variant="outlined" color="secondary">
            Cancelar
            </Button>
    <Button sx={{marginRight: 5}} 
    variant="outlined" 
    color="primary"
    onClick={handlePreVisualizar}
    >
        
        PreVisualizar
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