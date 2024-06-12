import { CrearPolitica } from "../CrearPolitica/CrearPolitica";
import "./VerPoliticas.css";
import propTypes from "prop-types";
export const VerPoliticas = ({idPolitica}) => {
    return (
        <div> VerPoliticas 
            <CrearPolitica
            idPolitica={idPolitica}
            />
        </div>
    );

};

VerPoliticas.propTypes = {
    idPolitica: propTypes.string
};

export default VerPoliticas;
