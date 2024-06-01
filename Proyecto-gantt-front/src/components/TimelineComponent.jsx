import { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import PropTypes from 'prop-types';
import './TimelineComponent.css'; // Importa el archivo CSS

const TimelineComponent = ({ activities }) => {
  const timelineRef = useRef(null);
  const timelineInstance = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;

    // Crear y transformar los datos de las actividades en ítems y grupos para el timeline
    const grupos = [];

  

    const items = new DataSet(
      activities.map(actividad => {
        const politica = actividad.politica || 'PPP';
        const color = actividad.area.color|| '#AAA';
        if (!grupos.find(grupo => grupo.id === politica)) {
          grupos.push({
            id: politica,
            content: politica,
          });
        }

        return {
          id: actividad.id,
          content: actividad.nombre,
          start: actividad.fechaInicio,
          end: actividad.fechaFin,
          type: actividad.tipo || 'range', // 'range' es el valor por defecto si no se especifica tipo
          title: `Descripción: ${actividad.descripcion}`,
          group: politica,
          style: `background-color: ${color};`,
        };
      })
    );

    const groups = new DataSet(grupos);

    // Crear la instancia del timeline
    const options = {
      locale: 'es', // Establecer el idioma a español
      groupOrder: 'content', // Ordena los grupos por el contenido
      // Agrega más opciones según sea necesario
    };

    timelineInstance.current = new Timeline(container, items, groups, options);

    return () => {
      if (timelineInstance.current) {
        timelineInstance.current.destroy();
      }
    };
  }, [activities]);

  return (
    <div 
      ref={timelineRef} 
      className="timeline-container" // Aplica la clase CSS
    />
  );
};

TimelineComponent.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      fechaInicio: PropTypes.string.isRequired,
      fechaFin: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
      politica: PropTypes.string,
      area: PropTypes.string,
      tipo: PropTypes.string,
    })
  ).isRequired,
};

export default TimelineComponent;
