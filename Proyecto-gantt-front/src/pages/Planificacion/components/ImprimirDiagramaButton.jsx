import React, { useContext } from 'react';
import { FiltroActividadesContext } from '../hooks/FiltroActividadesProvider';
import { Button } from '@mui/material';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        padding: 10
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    }
});

const MyDocument = ({ activities, dataArea }) => (
    <Document>
        <Page size="A4" orientation="landscape" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Diagrama de Gantt Consolidado</Text>
                {activities.map((activity, index) => {
                    const area = dataArea.find(area => area.id === activity.area_id) || {};
                    const color = area.color || 'gray';
                    return (
                        <View key={index} style={{ marginBottom: 5, backgroundColor: color, padding: 5 }}>
                            <Text>{activity.politica}</Text>
                            <Text>{activity.nombre}</Text>
                            <Text>{activity.fechaInicio} - {activity.fechaFin}</Text>
                            <Text>{activity.descripcion}</Text>
                        </View>
                    );
                })}
            </View>
        </Page>
    </Document>
);

const ImprimirDiagramaButton = () => {
    const { filteredPoliticas, areas } = useContext(FiltroActividadesContext);

    const combinedActivities = filteredPoliticas?.reduce((acc, politica) => {
        politica.actividades.forEach(actividad => {
            acc.push({ ...actividad, politica: politica.nombre });
        });
        return acc;
    }, []) || [];

    return (
        <PDFDownloadLink
            document={<MyDocument activities={combinedActivities} dataArea={areas} />}
            fileName="diagrama_gantt.pdf"
        >
            {({ loading }) => (
                <Button variant="contained" color="secondary" style={{ marginLeft: '1rem' }}>
                    {loading ? 'Generando PDF...' : 'Imprimir Diagrama'}
                </Button>
            )}
        </PDFDownloadLink>
    );
};

export default ImprimirDiagramaButton;
