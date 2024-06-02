import React, { useContext } from 'react';
import { FiltroActividadesContext } from '../hooks/FiltroActividadesProvider';
import { Button } from '@mui/material';
import Pdf  from 'react-pdf-html'; // Import Pdf from react-pdf-html
import DiagramasGantt from './DiagramasGantt';

const ImprimirDiagramaButton = () => {
    const { areas } = useContext(FiltroActividadesContext);
    const { filteredPoliticas } = useContext(FiltroActividadesContext);

    const generatePdfContent = () => {
        console.log("filteredPoliticas:", filteredPoliticas);
        console.log("areas:", areas);
        return (
            <DiagramasGantt/>
        );
    };
    

    const handlePrint = () => {
        if (filteredPoliticas && filteredPoliticas.length > 0) {
            Pdf({ title: 'Diagramas', fileName: 'diagramas.pdf', content: generatePdfContent() });
        } else {
            console.error("No filtered políticas found.");
        }
    };

    return (
        <Button variant="contained" onClick={handlePrint}>
            Imprimir Diagrama
        </Button>
    );
}

export default ImprimirDiagramaButton;
