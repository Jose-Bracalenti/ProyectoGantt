import { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import PropTypes from 'prop-types';

// Array de actividades con costo, descripción y política


const TimelineComponent = ({activities}) => {
  const timelineRef = useRef(null);
  const timelineInstance = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;

    // Crear y transformar los datos de las actividades en ítems y grupos para el timeline


    const grupos = [];


    const colorMap = {
      area1: '#FF5733',
      area2: '#33FF57',
      area3: '#5733FF',
      // Agrega más áreas según sea necesario
    };

    const items = new DataSet(
      activities.map(actividad => {
        const politica = actividad.politica || 'ppp';
        const color =  colorMap[actividad.area] || '#AAA';
        if (!grupos.find(grupo => grupo.id === politica)) {
          grupos.push({ id: politica, 
            content: politica,          
        }
          );
        }

        return {
          id: actividad.id,
          content: actividad.nombre,
          start: actividad.fechaInicio,
          end: actividad.fechaFin,
          type: actividad.tipo || 'range', // 'box' es el valor por defecto si no se especifica tipo
          title: `Descripción: ${actividad.descripcion}`,
          group: politica,
          style: `background-color: ${color};`,
          };
      })
    );
    
      // Crear la instancia del timeline
    const options = {

    };

    timelineInstance.current = new Timeline(container, items, options);

    return () => {
      if (timelineInstance.current) {
        timelineInstance.current.destroy();
      }
    };
  }, [activities]);

  return <div ref={timelineRef} style={{ width: '1000px' }} />;
};

TimelineComponent.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default TimelineComponent;