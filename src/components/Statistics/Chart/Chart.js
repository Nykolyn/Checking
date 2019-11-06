import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const filteredData = array => {
  const partner = array.filter(el => el.role === 'Partner').length;
  const learner = array.filter(el => el.role === 'Learner').length;
  const daugtherSon = array.filter(el => el.role === 'Daughter/Son').length;
  const coWorker = array.filter(el => el.role === 'Co-worker').length;
  const none = array.filter(el => el.role === 'None').length;

  return {
    labels: ['Learner', 'Partner', 'Co-worker', 'Daugther/son', 'None'],
    datasets: [
      {
        data: [learner, partner, coWorker, daugtherSon, none],
        backgroundColor: [
          '#fef9de',
          '#c2c9de',
          '#d3dcd6',
          '#d5ebff',
          '#cdd0d9',
        ],
      },
    ],
  };
};

/* eslint-disable */

const Chart = ({ data }) => {
  return (
    <div>
      <Doughnut
        data={filteredData(data)}
        width={100}
        height={100}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          cutoutPercentage: 75,
        }}
        legend={{
          display: false,
        }}
      />
    </div>
  );
};

export default Chart;
