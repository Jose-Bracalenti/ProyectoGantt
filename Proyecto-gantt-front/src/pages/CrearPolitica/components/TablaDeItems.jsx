import { Box} from "@mui/material";
import TablaDeActividades from "./TablaDeActividades";
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import ItemsDialog from "./ItemsDialog";
import { ItemsTableContext } from "../hooks/ItemsTableProvider";
export const TablaDeItems = () => {
    const { items, setItems } = useContext(ItemsTableContext);

    const [openItemsDialog, setopenItemsDialog] = useState(false);
    const [newItem, setNewItem] = useState({
        nombre: "",
        actividades: [],
    });
    const [openDialogDeleteItem, setOpenDialogDeleteItem] = useState(false);
    const [deleteItemIndex, setDeleteItemIndex] = useState(-1);

    const [editItemIndex, setEditItemIndex] = useState(-1);
    const [isEditingItem, setIsEditingItem] = useState(false);

    const handleAddItem = () => {
        setItems([...items, newItem]);
        setNewItem({
            nombre: "" , 
            actividades: []});
        setopenItemsDialog(false);
    }

    const handleEditItem = () => {
        const newItems = [...items];
        newItems[editItemIndex] = newItem;
        setItems(newItems);
        setNewItem({
            nombre: "",
            actividades: []});
        setopenItemsDialog(false);
        setEditItemIndex(-1);
    }

    console.log("items",items);

    return (
        <div>
        <h2>Items de PPP</h2>
        {items.map((item, index) => (
            <Box key={index}>
            <Box sx={{display:"flex",   justifyContent: "left" }}>
            <h2>Item: &quot; {item.nombre} &quot;</h2> 
            <Button 
            variant="text" 
            color="secondary" 
            sx={{marginX:"1rem"}}
            startIcon={<DeleteIcon />}
            onClick={() => { 
                setIsEditingItem(false);
                setOpenDialogDeleteItem(true);
                setDeleteItemIndex(index);
            }}
            >
                Eliminar
            </Button>  
            <Button
            variant="text"
            color="primary"
            startIcon={<EditIcon />}
            sx={{marginX:"1rem"}}
            onClick={() => {
                setIsEditingItem(true);
                setNewItem(item);
                setopenItemsDialog(true);
                setEditItemIndex(index);
            }}
            >
                Editar
            </Button>

            </Box>
            <TablaDeActividades
            activities={item.actividades}
            setActivities={(newActivities) => {
                const newItems = [...items];
                newItems[index].actividades = newActivities;
                setItems(newItems);
            }}
            />
        </Box>
        ))}
        
        <Box sx={{ marginY:'1rem' }} >
        <Button 
        variant="contained" 
        color="primary"
        onClick={() => setopenItemsDialog(true)}
        >
            Nuevo Item 
        </Button>
        </Box>

        <ItemsDialog
        openDialogCreateItem={openItemsDialog}
        newItem={newItem}
        setNewItem={setNewItem}
        isEditing= {isEditingItem}
        onClose={() => {
            setopenItemsDialog(false);
            setNewItem({nombre: ""});
            setEditItemIndex(-1);
        }}
        onChange={(e) => setNewItem({...newItem, [e.target.name]: e.target.value})}
        onSave={ isEditingItem ? handleEditItem : handleAddItem}
        />

        <ConfirmDialog 
        open= {openDialogDeleteItem}
        onClose={() => {
            setOpenDialogDeleteItem(false);
            setDeleteItemIndex(-1);
        }}
        onConfirm={() => {
            setItems(items.filter((item, index) => index !== deleteItemIndex));
            setOpenDialogDeleteItem(false);
            setDeleteItemIndex(-1);
        }}
        title="Eliminar Item"
        content={`¿Está seguro que desea eliminar el item: "${items[deleteItemIndex]?.nombre}"?`}
        />
            
        </div>
    );
    }
