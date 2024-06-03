import { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import PropTypes from 'prop-types';
import './TimelineComponent.css'; // Importa el archivo CSS

const TimelineComponent = ({ activities, dataArea, activarGrupos }) => {
  const timelineRef = useRef(null);
  const timelineInstance = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;

    // Crear y transformar los datos de las actividades en ítems y grupos para el timeline
    const grupos =[];
    const items = new DataSet(
      activities.map(actividad => {
        const area = dataArea.find(area => area.id === actividad.area_id) || {};
        const color = area.color || 'gray';
        const areaNombre = area.nombre || 'Sin área';
        if (!grupos.find(grupo => grupo.id === areaNombre)) {
          grupos.push({
            id: areaNombre,
            content: areaNombre,
          });}
        return {
          id: actividad.id,
          content: actividad.nombre,
          start: actividad.fechaInicio,
          end: actividad.fechaFin,
          type: 'range', // 'range' es el valor por defecto si no se especifica tipo
          title: `Descripción: ${actividad.descripcion}`,
          ...(activarGrupos && { group: areaNombre }), // Añadir el grupo si activarGrupos es true
          style: `background-color: ${color};`,
          
        };
      })
    );

    // Si activarGrupos es verdadero, crear grupos basados en las áreas
    const groups = activarGrupos
      ? new DataSet(grupos)
      : null;

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
  }, [activities, dataArea, activarGrupos]);

  return (
    <div ref={timelineRef} className="timeline-container" />
  );
};

TimelineComponent.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
      fechaInicio: PropTypes.string.isRequired,
      fechaFin: PropTypes.string.isRequired,
      area_id: PropTypes.number.isRequired,
      politica: PropTypes.string,
    })
  ).isRequired,
  dataArea: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
  activarGrupos: PropTypes.bool,
};

export default TimelineComponent;
