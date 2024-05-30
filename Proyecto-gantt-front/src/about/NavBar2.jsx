import { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/SantaFeCapital_Blanco.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

    const sx = { blockSize: '100', borderRadius: '10px', marginX: '10px', fontSize: '1rem', '&.active': { fontSize: '1.1rem' } };

    return (
        <>
            <AppBar position="sticky" sx={{ marginBottom: '1rem' }}>
                <Toolbar>
                    <Box sx={{flexGrow:1}} >
                        <Tabs indicatorColor="secondary" 
                        textColor="inherit" value={value} 
                        onChange={handleChange} 
                        aria-label="nav tabs"
                        variant="scrollable" 
                        >
                            
                            <Tab
                                sx={sx}
                                label="Políticas"
                                aria-controls="politics-menu"
                                aria-haspopup="true"
                                //onMouseEnter={handleMenuOpen}
                                onClick={handleMenuOpen}
                                //onMouseLeave={handleMenuClose}
                                value="1"
                                icon={<KeyboardArrowDownIcon />}
                                iconPosition="end"
                                />
                            <Tab
                                sx={sx}
                                label="Planificación"
                                component={NavLink}
                                to="/Planificacion"
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
                                Crear Política pública prioritaria
                            </MenuItem>
                            <MenuItem
                                component={NavLink}
                                to="/VerPoliticas"
                                onClick={handleMenuClose}
                            >
                                Gestionar Política pública prioritaria	
                            </MenuItem>
    
                        </Menu>
                    </Box>
                    <h2 style={{ margin: 10 }}>Sistemas ---algo--- de públicas</h2>
                    <img src={logo} alt="santa fe" width="160px"  />

                    
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
};

export default NavBar2;
