import React, { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import ejeServices from "../../../services/ejeServices";
import objetivoServices from "../../../services/objetivoServices";
import secretariaServices from "../../../services/secretariaServices";
import areaServices from "../../../services/areaServices";
import politicasServices from "../../../services/politicasServices";
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
    const [politicas, setPoliticas] = useState([]);
    const [filteredPoliticas, setfilteredPoliticas] = useState([]);

    useEffect(() => {
        secretariaServices.getAll()
            .then((response) => {
                setSecretarias(response.data);
                if (alertaServidor.mensaje !== "") {
                    setAlertaServidor("Conectado al servidor", "success");
                }
            })
            .catch(() => {
                console.log('Error al obtener los datos');
                setAlertaServidor({ mensaje: 'Error al obtener los datos del servidor', status: 'error' });
                setOpenAlerta(true);
            });
    }, []);

    useEffect(() => {
        if (eje === "") {
            objetivoServices.getAll().then((response) => setObjetivos(response.data));
        } else {
            objetivoServices.getObjetivosByEjes(eje)
                .then((response) => {
                    setObjetivos(response.data);
                });
        }
    }, [eje]);

    useEffect(() => {
        ejeServices.getAll()
            .then((response) => {
                setEjes(response.data);
            });
    }, []);
    
    useEffect(() => {
        areaServices.getAll()
            .then((response) => {
                setAreas(response.data);
            });
    }, []);

    useEffect(() => {
        politicasServices.getAll()
            .then((response) => {
                setPoliticas(response.data);
            });
    }, []);

    const handleSubmit = () => {
        // Handle form submission
    };

    const handleAlertClose = () => {
        setOpenAlerta(false);
    };

    const handleLimpiar = () => {
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
                filteredPoliticas,
                setfilteredPoliticas,
                fechaInicio,
                setFechaInicio,
                fechaFin,
                setFechaFin,
                ejes,
                areas,
                objetivos,
                secretarias,
                politicas,
                handleSubmit,
                handleAlertClose,
                handleLimpiar,
            }}
        >
            {children}
        </FiltroActividadesContext.Provider>
    );
};

FiltroActividadesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
