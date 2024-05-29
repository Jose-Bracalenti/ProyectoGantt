import { Button } from "@mui/material";
import PropTypes from "prop-types";

const BotonFiltrado = ({ children, onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

BotonFiltrado.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};
