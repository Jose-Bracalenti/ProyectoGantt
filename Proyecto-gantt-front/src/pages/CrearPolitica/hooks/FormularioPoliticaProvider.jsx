import  { createContext, useState, useEffect, useContext } from 'react';
import secretariaServices from "../services/secretariaServices";
import objetivoServices from "../services/objetivoServices";
import ejeServices from "../services/ejeServices";
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



  useEffect(() => {
    secretariaServices.getAll().then((response) => {
      setDataSecretaria(response.data);
    });
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
  
 
    console.log(dataObjetivo);

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
      camposCompletos, setCamposCompletos
    }}>
      {children}
    </FormularioPoliticaContext.Provider>
  );
};

FormularioPoliticaProvider.propTypes = {

    children: PropTypes.node
    };
    