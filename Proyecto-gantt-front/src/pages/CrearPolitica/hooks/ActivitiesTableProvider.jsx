import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import servicesArea from "../../../services/areaServices";
export const ActivitiesTableContext = createContext();


export const ActivitiesTableProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(null);
  const [newActivity, setNewActivity] = useState({
    nombre: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    area_id: "",
    resultado_esperado: "",
    participacion_ciudadana: "",
    costo: "",
  });
  const [atributeOpen, setAtributeOpen] = useState(false);
  const [atributeContent, setAtributeContent] = useState({
    nombre: "",
    contenido: "",
  });
  const [dataArea, setDataArea] = useState([]);
 
  useEffect(() => {
    servicesArea
     .getAll()
    .then((response) => {
      const sortedData = response.data.sort((a, b) => a.nombre.localeCompare(b.nombre));
      setDataArea(sortedData);
    })
    
  }, []);

  return (
    <ActivitiesTableContext.Provider
      value={{
        activities,
        setActivities,
        open,
        setOpen,
        isEditing,
        setIsEditing,
        currentActivityIndex,
        setCurrentActivityIndex,
        newActivity,
        setNewActivity,
        atributeOpen,
        setAtributeOpen,
        atributeContent,
        setAtributeContent,
        dataArea,
        setDataArea,
      }}
    >
      {children}
    </ActivitiesTableContext.Provider>
  );
};

ActivitiesTableProvider.propTypes = {
  children: PropTypes.node,
};
