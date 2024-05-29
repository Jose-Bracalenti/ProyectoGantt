import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './Login.css'; // Importamos el archivo de estilos CSS
import logo from '../../assets/SantaFeCapital_Log.png'; // Importamos la imagen del logo
import { NavLink } from 'react-router-dom';
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes enviar los datos de inicio de sesión al servidor
    console.log('Email:', email);
    console.log('Password:', password);
    // Lógica de autenticación
  };

  return (
    <div className="login-container">
      <Paper className="login-paper" elevation={3}>
      <img src={logo} alt="Logo" className="logo" />
        <Typography variant="h5" gutterBottom>
          Iniciar sesión
        </Typography>
        
        <form onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              component = {NavLink}
              to="../CrearPolitica"
              fullWidth>
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};


