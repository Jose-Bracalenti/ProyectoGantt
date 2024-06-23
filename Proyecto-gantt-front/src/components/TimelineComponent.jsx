  import { useEffect, useRef } from "react";
  import { DataSet, Timeline } from "vis-timeline/standalone";
  import "vis-timeline/styles/vis-timeline-graph2d.min.css";
  import PropTypes from "prop-types";
  import "./TimelineComponent.css"; // Importa el archivo CSS
  import moment from "moment";

  const TimelineComponent = ({
    politicas,
    activarGrupos,
    fechaInicio,
    fechaFin,
  }) => {
    const timelineRef = useRef(null);
    const timelineInstance = useRef(null);

    useEffect(() => {
      const container = timelineRef.current;

      // Crear y transformar los datos de los ítems en elementos y grupos para el timeline
      const grupos = [];
      const subgrupos = [];
      const dataItems = new DataSet();

      politicas.forEach((politica) => {
        const politicaNombre = politica.nombre || "Nueva política";
        if (activarGrupos) {
          grupos.push({
            id: politicaNombre,
            content: politicaNombre,
            nestedGroups: [],
          });
        }

        politica.items.forEach((item) => {
          const itemID = `${politicaNombre}-${item.nombre}`;
          if (
            activarGrupos &&
            !subgrupos.find((subgrupo) => subgrupo.id === item.nombre)
          ) {
            subgrupos.push({
              id: itemID,
              content: item.nombre,
            });
          }

          grupos
            .find((grupo) => grupo.id === politicaNombre)
            ?.nestedGroups.push(itemID);

          const actividades = item.actividades || [];
          actividades.forEach((actividad) => {
            const color = actividad.area.color || "#000000";
            dataItems.add({
              id: actividad.id,
              content: actividad.nombre,
              start: actividad.fechaInicio,
              end: actividad.fechaFin,
              type: "range",
              title: `Incio: ${actividad.fechaInicio} / Fin: ${actividad.fechaFin}`,
              group: itemID,
              style: `background-color: ${color};`,
            });
          });
        });
      });
      if (fechaInicio && fechaFin) {
        dataItems.add({
          id: "Periodo",
          start: fechaInicio,
          end: fechaFin,
          type: "background",
          className: "periodo",
          content: "Rango de fechas seleccionado",
        });
      }
      // Crear grupos y subgrupos basados en las políticas y los nombres de ítems si activarGrupos es verdadero
      const groups = activarGrupos ? new DataSet(grupos.concat(subgrupos)) : null;

      // Crear la instancia del timeline
        
      const options = {
        locale: "es", // Establecer el idioma a español
        groupOrder: "content", // Ordena los grupos por el contenido
        showWeekScale: true, // Muestra la escala de la semana
        
        format: {
          //mostrar los lunes de cada semana
          minorLabels: function (date, scale, step) {
            if (moment(date).isoWeekday() === 1) {
              return moment(date).format("DD/MM");
            }
            return "";
          },
          //mostrar los meses
          majorLabels: function (date, scale, step) {
            return moment(date).format("MMMM") ;
          },

        },

        timeAxis: {
          scale: "week",
          step: 1,
        },
        
        orientation: {
          axis: 'both',
        },
    
        //mes
        zoomMin: 1000 * 60 * 60 * 24 * 30,
        //año
        zoomMax: 1000 * 60 * 60 * 24 * 365,
      };

      timelineInstance.current = new Timeline(
        container,
        dataItems,
        groups,
        options
      );

      return () => {
        if (timelineInstance.current) {
          timelineInstance.current.destroy();
        }
      };
    }, [politicas, activarGrupos, fechaInicio, fechaFin]);

    return <div ref={timelineRef} className="timeline-container" />;
  };

  TimelineComponent.propTypes = {
    politicas: PropTypes.arrayOf(
      PropTypes.shape({
        nombre: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            politica: PropTypes.string,
            nombre: PropTypes.string.isRequired,
            actividades: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.number,
                nombre: PropTypes.string.isRequired,
                fechaInicio: PropTypes.string.isRequired,
                fechaFin: PropTypes.string.isRequired,
                area: PropTypes.shape({
                  id: PropTypes.number,
                  nombre: PropTypes.string,
                  color: PropTypes.string,
                }),
                descripcion: PropTypes.string,
              })
            ),
          })
        ),
      })
    ).isRequired,
    activarGrupos: PropTypes.bool,
    fechaInicio: PropTypes.string,
    fechaFin: PropTypes.string,
  };

  export default TimelineComponent;
