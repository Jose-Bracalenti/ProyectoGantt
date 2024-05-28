import React, { useEffect, useRef } from 'react';
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
    const items = new DataSet(
      activities.map(actividad => {
        const politica = actividad.politica || 'ppp';
        if (!grupos.find(grupo => grupo.id === politica)) {
          grupos.push({ id: politica, content: politica });
        }

        return {
          id: actividad.id,
          content: actividad.nombre,
          start: actividad.fechaInicio,
          end: actividad.fechaFin,
          type: actividad.tipo || 'box', // 'box' es el valor por defecto si no se especifica tipo
          title: `Descripción: ${actividad.descripcion}`,
          group: politica,
        };
      })
    );
    //const startOptions = new Date(Math.max(...activities.map(activity => activity.fechaInicio.getTime())))
   // const endOptions = new Date(Math.min(...activities.map(activity => activity.fechaFin.getTime())))


      
      // Crear la instancia del timeline
    const options = {

      //start: startOptions,
      //end: endOptions,
    };

    timelineInstance.current = new Timeline(container, items, options);

    return () => {
      if (timelineInstance.current) {
        timelineInstance.current.destroy();
      }
    };
  }, []);

  return <div ref={timelineRef} style={{ height: '400px', width: '100%' }} />;
};

TimelineComponent.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default TimelineComponent;