import React from 'react';
import db from '../../../../db.json';

// const TodayTomorrowTab = ({}) => (
//   <div>
//     <p>Today</p>
//     <p>TodayTomorrowTab</p>
//   </div>
// );

const TodayTomorrowTab = () => {
  console.log(db);
  return (
    <div>
      <p>TodayTomorrowTab</p>
      <div>
        <p>Today</p>
        {db.map(el => (
          <li key={el.id}>
            <p>{el.header}</p>
            <p>{el.title}</p>
            <p>{el.suTitle}</p>
            <p>{el.data}</p>
          </li>
        ))}
      </div>
      <div>
        <p>Tomoroow</p>
        {db.map(el => (
          <li key={el.id}>
            <p>{el.header}</p>
            <p>{el.title}</p>
            <p>{el.suTitle}</p>
            <p>{el.data}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TodayTomorrowTab;
