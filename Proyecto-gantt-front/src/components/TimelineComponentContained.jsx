import { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import PropTypes from 'prop-types';
import './TimelineComponent.css'; // Importa el archivo CSS

const TimelineComponent = ({ items, dataArea, activarGrupos }) => {
  const timelineRef = useRef(null);
  const timelineInstance = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;

    // Crear y transformar los datos de los ítems en elementos y grupos para el timeline
    const grupos = [];
    const subgrupos = [];
    const dataItems = new DataSet(
      items.map(item => {
        const area = dataArea.find(area => area.id === item.area_id) || {};
        const color = area.color || 'gray';
        const politicaNombre = item.politica || 'Sin política';
        if (activarGrupos && !grupos.find(grupo => grupo.id === politicaNombre)) {
          grupos.push({
            id: politicaNombre,
            content: politicaNombre,
          });
        }
        if (activarGrupos && !subgrupos.find(subgrupo => subgrupo.id === item.nombre)) {
          subgrupos.push({
            id: item.nombre,
            content: item.nombre,
            nestedGroups: [politicaNombre]
          });
        }
        return {
          id: item.id,
          content: item.nombre,
          start: item.fechaInicio,
          end: item.fechaFin,
          type: 'range', // 'range' es el valor por defecto si no se especifica tipo
          title: `Descripción: ${item.descripcion}`,
          group: activarGrupos ? politicaNombre : undefined,
          subgroup: activarGrupos ? item.nombre : undefined,
          style: `background-color: ${color};`,
        };
      })
    );

    // Crear grupos y subgrupos basados en las políticas y los nombres de ítems si activarGrupos es verdadero
    const groups = activarGrupos ? new DataSet(grupos.concat(subgrupos)) : null;

    // Crear la instancia del timeline
    const options = {
      locale: 'es', // Establecer el idioma a español
      groupOrder: 'content', // Ordena los grupos por el contenido
      nestedGroups: true, // Habilitar los subgrupos
      // Agrega más opciones según sea necesario
    };

    timelineInstance.current = new Timeline(container, dataItems, groups, options);

    return () => {
      if (timelineInstance.current) {
        timelineInstance.current.destroy();
      }
    };
  }, [items, dataArea, activarGrupos]);

  return (
    <div ref={timelineRef} className="timeline-container" />
  );
};

TimelineComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
      fechaInicio: PropTypes.string.isRequired,
      fechaFin: PropTypes.string.isRequired,
      area_id: PropTypes.number.isRequired,
      politica: PropTypes.string.isRequired,
    })
  ).isRequired,
  dataArea: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
  activarGrupos: PropTypes.bool,
};

export default TimelineComponent;
