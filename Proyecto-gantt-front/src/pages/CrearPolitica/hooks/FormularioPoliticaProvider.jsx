import  { createContext, useState, useEffect } from 'react';
import secretariaServices from "../../../services/secretariaServices";
import objetivoServices from "../../../services/objetivoServices";
import ejeServices from "../../../services/ejeServices";
import PropTypes from "prop-types";
export const FormularioPoliticaContext = createContext();





export const FormularioPoliticaProvider = ({ children }) => {
  const [nombre, setNombre] = useState("");
  const [dataSecretaria, setDataSecretaria] = useState([]);
  const [secretaria, setSecretaria] = useState("");
  const [eje, setEje] = useState("");
  const [dataEje, setDataEje] = useState([]);
  const [objetivo, setObjetivo] = useState("");
  const [dataObjetivo, setDataObjetivo] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [costo, setCosto] = useState("");
  const [camposCompletos, setCamposCompletos] = useState(false);
  const [alertaServidor, setAlertaServidor] = useState("");
  const[openAlerta, setOpenAlerta] = useState(false);


  useEffect(() => {
    secretariaServices
     .getAll()
    .then((response) => {
      setDataSecretaria(response.data);
      if(alertaServidor.mensaje !== "") {
        setAlertaServidor("Conectado al servidor", "success");
        
      }
    }).catch (() => {
      console.log('Error al obtener los datos');
      setAlertaServidor({mensaje: 'Error al obtener los datos del servidor', status: 'error'}); 
      setOpenAlerta(true);
      }) 
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
    <FormularioPoliticaContext.Provider value={{
      nombre, setNombre,
      dataSecretaria, setDataSecretaria,
      secretaria, setSecretaria,
      eje, setEje,
      dataEje, setDataEje,
      objetivo, setObjetivo,
      dataObjetivo, setDataObjetivo,
      descripcion, setDescripcion,
      costo, setCosto,
      camposCompletos, setCamposCompletos,
      alertaServidor, setAlertaServidor,
      openAlerta, setOpenAlerta
    }}>
      {children}
    </FormularioPoliticaContext.Provider>
  );
};

FormularioPoliticaProvider.propTypes = {

    children: PropTypes.node
    };
    