import React, { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import ejeService from "../../../services/ejeServices";
import objetivoService from "../../../services/objetivoServices";
import secretariaService from "../../../services/secretariaServices";
import areaService from "../../../services/areaServices";

export const FiltroActividadesContext = createContext();

export const FiltroActividadesProvider = ({ children }) => {
    const [nombre, setNombre] = useState('');
    const [secretaria, setSecretaria] = useState('');
    const [eje, setEje] = useState('');
    const [objetivo, setObjetivo] = useState('');
    const [nombreVacio, setNombreVacio] = useState(false);
    const [openAlerta, setOpenAlerta] = useState(false);
    const [alertaServidor, setAlertaServidor] = useState({});
    const [area, setArea] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [ejes, setEjes] = useState([]);
    const [areas, setAreas] = useState([]);
    const [objetivos, setObjetivos] = useState([]);
    const [secretarias, setSecretarias] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const ejesResponse = await ejeService.getAll();
            setEjes(ejesResponse.data);

            const areasResponse = await areaService.getAll();
            setAreas(areasResponse.data);

            const objetivosResponse = await objetivoService.getAll();
            setObjetivos(objetivosResponse.data);

            const secretariasResponse = await secretariaService.getAll();
            setSecretarias(secretariasResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSubmit = () => {
        // Handle form submission
    };

    const handleAlertClose = () => {
        setOpenAlerta(false);
    };

    const resetForm = () => {
        setNombre('');
        setSecretaria('');
        setEje('');
        setObjetivo('');
        setArea('');
        setFechaInicio('');
        setFechaFin('');
        setNombreVacio(false); // Set nombreVacio to false when resetting the form
    };

    return (
        <FiltroActividadesContext.Provider
            value={{
                nombre,
                setNombre,
                secretaria,
                setSecretaria,
                eje,
                setEje,
                objetivo,
                setObjetivo,
                nombreVacio,
                setNombreVacio,
                openAlerta,
                setOpenAlerta,
                alertaServidor,
                setAlertaServidor,
                area,
                setArea,
                fechaInicio,
                setFechaInicio,
                fechaFin,
                setFechaFin,
                ejes,
                areas,
                objetivos,
                secretarias,
                handleSubmit,
                handleAlertClose,
                resetForm
            }}
        >
            {children}
        </FiltroActividadesContext.Provider>
    );
};

FiltroActividadesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
