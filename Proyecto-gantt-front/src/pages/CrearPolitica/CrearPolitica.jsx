import FormularioPolitica from "./components/FormularioPolitica";
import AgregarActividades from "./components/AgregarActividades";
import "./CrearPolitica.css";
export const CrearPolitica = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div className="FormularioPolitica">
                <FormularioPolitica />
            </div>
            <div className="AgregarActividades">
                <AgregarActividades />
            </div>
        </div>
            );
};

            export default CrearPolitica;
