import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

const TimelineComponent = () => {
  const timelineRef = useRef(null);
  const timelineInstance = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    const items = new DataSet([
      { id: 1, content: 'item 1', start: '2023-05-20', end: '2023-05-22'},
      { id: 2, content: 'item 2', start: '2023-05-14', end: '2023-05-18'},
      { id: 3, content: 'item 3', start: '2023-05-18', end: '2023-05-20'},
      { id: 4, content: 'item 4', start: '2023-05-16', end: '2023-05-19' },
      { id: 5, content: 'item 5', start: '2023-05-25', end: '2023-05-27'},
      { id: 6, content: 'item 6', start: '2023-05-27', type: 'point' },
    ]);

    const options = {
      // Aquí puedes agregar opciones de configuración
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

export default TimelineComponent;
