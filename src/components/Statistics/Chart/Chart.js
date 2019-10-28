import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const filteredData = array => {
  const partner = array.filter(el => el.role === 'Partner').length;
  const learner = array.filter(el => el.role === 'Learner').length;
  const dotherSon = array.filter(el => el.role === 'Dauther / Son').length;
  const coWorker = array.filter(el => el.role === 'Co-worker').length;
  const none = array.filter(el => el.role === 'None').length;

  return {
    labels: ['Partner', 'Learner', 'Dother / son', 'Co-worker', 'None'],
    datasets: [
      {
        data: [partner, learner, dotherSon, coWorker, none],
        backgroundColor: [
          '#c2c9de',
          '#fef9de',
          '#d5ebff',
          '#d3dcd6',
          '#cdd0d9',
        ],
      },
    ],
  };
};

const Chart = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Doughnut
        data={filteredData(data)}
        width={100}
        height={100}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          cutoutPercentage: 55,
        }}
        legend={{
          display: false,
        }}
      />
    </div>
  );
};

export default Chart;
