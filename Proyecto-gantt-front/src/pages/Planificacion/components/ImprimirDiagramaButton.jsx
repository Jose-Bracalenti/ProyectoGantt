import React, { useContext } from 'react';
import { FiltroActividadesContext } from '../hooks/FiltroActividadesProvider';
import { Button } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import TimelineComponent from '../../../components/TimelineComponent';

const ImprimirDiagramaButton = () => {
    const { filteredPoliticas, areas } = useContext(FiltroActividadesContext);

    const generatePdfContent = () => {
        console.log("filteredPoliticas:", filteredPoliticas);
        console.log("areas:", areas);
        return (
            <div>
                {filteredPoliticas && filteredPoliticas.map((politica, index) => (
                    <div key={politica.id} style={{ display: 'flex', marginTop: "2rem", justifyContent: 'center' }}>
                        <TimelineComponent activities={politica.actividades} dataArea={areas} />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <PDFDownloadLink document={generatePdfContent()} fileName="diagramas.pdf">
           <Button variant="contained" color="primary">
                Imprimir diagramas
            </Button>
        </PDFDownloadLink>
    );
}

export default ImprimirDiagramaButton;
