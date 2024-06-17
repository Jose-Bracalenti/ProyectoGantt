import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import servicesArea from "../../../services/areaServices";
export const ItemsTableContext = createContext();


export const ItemsTableProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(null);
  
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
    <ItemsTableContext.Provider
      value={{
        items,
        setItems,
        open,
        setOpen,
        isEditing,
        setIsEditing,
        currentActivityIndex,
        setCurrentActivityIndex,
        atributeOpen,
        setAtributeOpen,
        atributeContent,
        setAtributeContent,
        dataArea,
        setDataArea,
      }}
    >
      {children}
    </ItemsTableContext.Provider>
  );
};

ItemsTableProvider.propTypes = {
  children: PropTypes.node,
};
