import { useState, createContext } from "react";
import PropTypes from "prop-types";
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
      area: "",
    });
    const [atributeOpen, setAtributeOpen] = useState(false);
    const [atributeContent, setAtributeContent] = useState("");

    return (
        <ActivitiesTableContext.Provider value={{
            activities, setActivities,
            open, setOpen,
            isEditing, setIsEditing,
            currentActivityIndex, setCurrentActivityIndex,
            newActivity, setNewActivity,
            atributeOpen, setAtributeOpen,
            atributeContent, setAtributeContent
        }}>
            {children}
        </ActivitiesTableContext.Provider>
    );
}

ActivitiesTableProvider.propTypes = {
    children: PropTypes.node
};
