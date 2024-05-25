import { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import logo from '../assets/SantaFeCapital_Blanco.png';

const NavBar2 = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const sx={blockSize: '100px', borderRadius: '10px', marginX: '10px', fontSize: '1rem', '&.active': { fontSize: '1.1rem' }}
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={value} onChange={handleChange} aria-label="nav tabs" >
                            <Tab sx={sx}
                                label="Crear Política"
                                component={NavLink}
                                to="/CrearPolitica"
                                value="1"
                            />
                            <Tab sx={sx}
                                label="Planificación"
                                component={NavLink}
                                to="/Planificación"
                                value="2"
                            />
                            <Tab sx={sx}
                                label="Ejemplo"
                                component={NavLink}
                                to="/Ejemplo"
                                value="3"
                            />
                        </Tabs>
                    </Box>
                    <h2 style={{ margin: 10 }}>Proyecto Gantt</h2>
                    <img src={logo} alt="santa fe" width="200px" height="100px" />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar2;
