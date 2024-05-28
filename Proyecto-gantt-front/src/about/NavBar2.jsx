import { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import logo from '../assets/SantaFeCapital_Blanco.png';

const NavBar2 = () => {
    const [value, setValue] = useState("1");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const sx = { blockSize: '100px', borderRadius: '10px', marginX: '10px', fontSize: '1rem', '&.active': { fontSize: '1.1rem' } };

    return (
        <>
            <AppBar position="sticky" sx={{ marginBottom: '1rem' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={value} onChange={handleChange} aria-label="nav tabs" >
                            <Tab
                                sx={sx}
                                label="Políticas"
                                aria-controls="politics-menu"
                                aria-haspopup="true"
                                onMouseOver={handleMenuOpen}
                                value="1"
                            />
                            <Tab
                                sx={sx}
                                label="Planificación"
                                component={NavLink}
                                to="/Planificación"
                                value="2"
                            />
                            <Tab
                                sx={sx}
                                label="Ejemplo"
                                component={NavLink}
                                to="/Ejemplo"
                                value="3"
                            />
                        </Tabs>
                        <Menu
                            id="politics-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                           onMouseLeave={handleMenuClose}>
                            <MenuItem
                                component={NavLink}
                                to="/CrearPolitica"
                                onClick={handleMenuClose}
                            >
                                Crear Política
                            </MenuItem>
                            <MenuItem
                                component={NavLink}
                                to="/VerPoliticas"
                                onClick={handleMenuClose}
                            >
                                Ver Políticas
                            </MenuItem>
    
                        </Menu>
                    </Box>
                    <h2 style={{ margin: 10 }}>Sistemas ---algo--- de públicas</h2>
                    <img src={logo} alt="santa fe" width="200px" height="100px" />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar2;
