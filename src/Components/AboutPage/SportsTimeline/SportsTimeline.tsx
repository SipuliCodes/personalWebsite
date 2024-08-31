import { useEffect, useRef } from 'react';
import {Timeline, DataSet, TimelineOptions, Timeline as TimelineInstance } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

import './SportsTimeline.css';

const SportsTimeline = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const timelineInstanceRef = useRef<TimelineInstance | null>(null)

  useEffect(() => {
    const container = timelineRef.current;
    if (container) {
      const items = new DataSet([
        { id: 1, content: 'Football', start: '2009-01-01', end: '2016-08-31' },
        { id: 2, content: 'Ice Hockey', start: '2009-01-01', end: '2023-05-30' },
        { id: 3, content: 'Golf', start: '2024-06-01' },
        { id: 4, content: 'Gym', start: '2019-09-01', end: '2024-05-31' },
        { id: 5, content: 'Calisthenics', start: '2024-06-01', end: '' },
        { id: 6, content: 'Orienteering', start: '2017-06-01', end: '2018-08-31' },
        { id: 7, content: 'Orienteering', start: '2024-06-01'},
      ]);

      const startDate = new Date('2000-01-01T00:00:00');
      const endDate = new Date();

      const maxDate = new Date(endDate);
      maxDate.setFullYear(endDate.getFullYear() + 2);

      const differenceInMilliseconds = maxDate.getTime() - startDate.getTime();

      const options: TimelineOptions = {
        min: startDate,
        start: startDate,
        end: maxDate,
        max: maxDate,
        zoomMax: differenceInMilliseconds,
        height: 240,
        width: '95vw',
        margin: {
          item: 10,
          axis: 5
        },
        stack: true,
        showCurrentTime: false
      };

      timelineInstanceRef.current = new Timeline(container, items, options);
       return () => {
      if (timelineInstanceRef.current) {
        timelineInstanceRef.current.destroy();
      }
    };
    }
  }, []);

  return (
    <div className='sports-timeline-flex'>
      <h2>Sports history</h2>
      <div ref={timelineRef} style={{ height: '240px' }} />
    </div>
    );
};

export default SportsTimeline;
