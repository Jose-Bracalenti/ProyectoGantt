import  { createContext, useState, useEffect } from 'react';
import secretariaServices from '../../../services/secretariaServices';
import ejeServices from '../../../services/ejeServices';
import objetivoServices from '../../../services/objetivoServices';
import politicasServices from '../../../services/politicasServices';
import areaServices from '../../../services/areaServices';
import propTypes from 'prop-types';


export const FiltroDePoliticasContext = createContext();

export const FiltroDePoliticasProvider = ({ children }) => {
    const [dataSecretaria, setDataSecretaria] = useState([]);
    const [secretarias, setSecretarias] = useState([]);
    const [dataEje, setDataEje] = useState([]);
    const [ejes, setEjes] = useState([]);
    const [dataObjetivo, setDataObjetivo] = useState([]);
    const [objetivos, setObjetivos] = useState([]);
    const [dataPoliticas, setDataPoliticas] = useState([]);
    const [politicas, setPoliticas] = useState([]);
    const [dataAreas, setDataAreas] = useState([]);
    const [areas, setAreas] = useState([]);
    const [showDiagram, setShowDiagram] = useState(false);
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    useEffect(() => {
        secretariaServices
            .getAll()
            .then((response) => {
                const sortedData = response.data.sort((a, b) => a.nombre.localeCompare(b.nombre));
                setDataSecretaria(sortedData);
            }).catch(() => {
                console.log('Error al obtener los datos');
            })
    }, []);

    useEffect(() => {
        ejeServices.getAll().then((response) => {
            setDataEje(response.data);
        });
    }, []);


    useEffect(() => {
        if (ejes.length === 0) setDataObjetivo([]);
        else {
            objetivoServices.getObjetivosByEjes(ejes).then((response) => {
                setDataObjetivo(response.data);
            });
        }
    }, [ejes]);

    useEffect(() => {
        politicasServices.getAll().then((response) => {
            setDataPoliticas(response.data);
        });
    }, []);

    useEffect(() => {
        areaServices.getAll().then((response) => {
            setDataAreas(response.data);
        });
    }, []);

    return (
        <FiltroDePoliticasContext.Provider value={{
            dataSecretaria, setDataSecretaria,
            secretarias, setSecretarias,
            dataEje, setDataEje,
            ejes, setEjes,
            dataObjetivo, setDataObjetivo,
            objetivos, setObjetivos,
            dataPoliticas, setDataPoliticas,
            politicas, setPoliticas,
            dataAreas, setDataAreas,
            showDiagram, setShowDiagram,
            areas, setAreas,
            fechaInicio, setFechaInicio,
            fechaFin, setFechaFin
        }}>
            {children}
        </FiltroDePoliticasContext.Provider>
    );
}

FiltroDePoliticasProvider.propTypes = {
    children: propTypes.node
}

export default FiltroDePoliticasProvider;