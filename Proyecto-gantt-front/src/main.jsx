import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  direction: 'rtl',
  palette: {
        primary: {
      main: '#12bc8e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#673ab7',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
