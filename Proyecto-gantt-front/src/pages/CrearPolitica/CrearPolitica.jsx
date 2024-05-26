import FormularioPolitica from "./components/FormularioPolitica";
import AgregarActividades from "./components/AgregarActividades";
import "./CrearPolitica.css";
import { Button } from "@mui/material";
export const CrearPolitica = () => {
    return (
        <form>
        <div style={{ display: 'flex' }}>
            <div className="FormularioPolitica">
                <FormularioPolitica />
            </div>
            <div className="AgregarActividades">
                <AgregarActividades />
            </div>
            
        </div>
        <div style={{ display: 'flex', justifyContent: 'right', marginRight:'5rem' }}>
        <Button sx={{marginRight: 5}} variant="contained" color="primary">
                Crear Politica
                </Button>
                <Button variant="outlined" color="secondary">
                Cancelar
                </Button>
            </div>
        </form>
            );
};

            export default CrearPolitica;
