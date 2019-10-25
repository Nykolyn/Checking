import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Partner', 'Learner', 'Dother / son', 'Co-worker', 'None'],
  datasets: [
    {
      data: [300, 50, 100, 55],
      backgroundColor: ['#c2c9de', '#fef9de', '#d5ebff', '#d3dcd6', '#cdd0d9'],
    },
  ],
};

const Chart = () => {
  return (
    <div>
      <Doughnut
        data={data}
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
