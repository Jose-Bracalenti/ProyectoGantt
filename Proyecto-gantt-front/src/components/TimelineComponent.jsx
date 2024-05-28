import React, { act, useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import PropTypes from 'prop-types';
const TimelineComponent = ({activities}) => {
  const timelineRef = useRef(null);
  const timelineInstance = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    
    const items = new DataSet(
      activities.map((activity, index)=> ({
        id: index,
        content: activity.nombre,
        start: activity.fechaInicio,
        end: activity.fechaFin,
        title: ` Descripcion: ${activity.descripcion} `
      }))
    )


    const options = {

    };

    timelineInstance.current = new Timeline(container, items, options);

    return () => {
      if (timelineInstance.current) {
        timelineInstance.current.destroy();
      }
    };
  }, []);

  return <div ref={timelineRef}/>;
};

TimelineComponent.propTypes = {
  activities: PropTypes.array
};

export default TimelineComponent;
