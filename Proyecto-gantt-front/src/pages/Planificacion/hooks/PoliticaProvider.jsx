import React, { createContext, useContext, useState } from 'react';
import secretariaServices from "../../../services/secretariaServices";
import objetivoServices from "../../../services/objetivoServices";
import ejeServices from "../../../services/ejeServices";
import PropTypes from "prop-types";
const PoliticaContext = createContext();

export const usePolitica = () => {
  return useContext(PoliticaContext);
};

export const PoliticaProvider = ({ children }) => {
  const [politica, setPolitica] = useState(null);
  const [nombre, setNombre] = useState("");
  const [dataSecretaria, setDataSecretaria] = useState([]);
  const [secretaria, setSecretaria] = useState("");
  const [eje, setEje] = useState("");
  const [dataEje, setDataEje] = useState([]);
  const [objetivo, setObjetivo] = useState("");
  const [dataObjetivo, setDataObjetivo] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [camposCompletos, setCamposCompletos] = useState(false);
  const [alertaServidor, setAlertaServidor] = useState("");
  const[openAlerta, setOpenAlerta] = useState(false);
  useEffect(() => {
    secretariaServices
     .getAll()
    .then((response) => {
      const sortedData = response.data.sort((a, b) => a.nombre.localeCompare(b.nombre));
      setDataSecretaria(sortedData);
      if(alertaServidor.mensaje !== "") {
        setAlertaServidor("Conectado al servidor", "success");
        
      }
    }).catch (() => {
      console.log('Error al obtener los datos');
      setAlertaServidor({mensaje: 'Error al obtener los datos del servidor', status: 'error'}); 
      setOpenAlerta(true);
      }) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  console.log(dataSecretaria);

  useEffect(() => {
    if (eje === "")  setDataObjetivo([]);
    else{
        objetivoServices.getObjetivosByEjes(eje).then((response) => {
            setDataObjetivo(response.data);
          });
    }
  }, [eje]);
    useEffect(() => {
        ejeServices.getAll().then((response) => {
            setDataEje(response.data);
        }); 
    }, []);
  return (
    <PoliticaContext.Provider value={{ politica, setPolitica,
        nombre, setNombre,
      dataSecretaria, setDataSecretaria,
      secretaria, setSecretaria,
      eje, setEje,
      dataEje, setDataEje,
      objetivo, setObjetivo,
      dataObjetivo, setDataObjetivo,
      descripcion, setDescripcion,
      camposCompletos, setCamposCompletos,
      alertaServidor, setAlertaServidor,
      openAlerta, setOpenAlerta
     }}>
      {children}
    </PoliticaContext.Provider>
  );
};
