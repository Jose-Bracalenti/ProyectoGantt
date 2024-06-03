import { IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PropTypes from "prop-types";

const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };
  
const PopUpVerCampos = ({contenido, titulo, setAtributeContent, setAtributeOpen }) => {

      const handleShowAtributes = (contenido, nombre) => () => {
        setAtributeOpen(true);
        setAtributeContent({
          contenido: contenido,
          nombre: nombre,
        });
      };

    return (
        <Tooltip
                  title={
                    contenido
                      ? `mostrar ${titulo}`
                      : `${titulo} sin completar`
                  }
                >
                  <span>
                  {truncateText(contenido, 5)}
                    <IconButton
                      color="primary"
                      onClick={handleShowAtributes(contenido, titulo)}
                      disabled={!contenido}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </span>
                </Tooltip>

    );
};

PopUpVerCampos.propTypes = {
    contenido: PropTypes.string,
    titulo: PropTypes.string,
    setAtributeContent: PropTypes.func,
    setAtributeOpen: PropTypes.func,

};

export default PopUpVerCampos;
