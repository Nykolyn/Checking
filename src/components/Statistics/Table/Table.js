import React from 'react';
import ReactTable from 'react-table';

import './Table.css';

const columns = [
  {
    Header: 'Roles',
    accessor: 'roles',
  },
  {
    Header: 'Role percentage %',
    accessor: 'percentage',
  },
  {
    Header: 'Tasks done / planned',
    accessor: 'goals',
  },
];

const filteredData = (done, total) => {
  const partner = done.filter(el => el.role === 'Partner').length;
  const learner = done.filter(el => el.role === 'Learner').length;
  const dotherSon = done.filter(el => el.role === 'Dauther / Son').length;
  const coWorker = done.filter(el => el.role === 'Co-worker').length;
  const none = done.filter(el => el.role === 'None').length;

  const summ = (partner + learner + dotherSon + coWorker + none) / 100;
  console.log(total);

  return [
    {
      roles: 'Partner',
      percentage: `${Math.round(partner / summ)}%`,
      goals: `${partner}/${total[0]}`,
    },
    {
      roles: 'Learner',
      percentage: `${Math.round(learner / summ)}%`,
      goals: `${learner}/${total[1]}`,
    },
    {
      roles: 'Daugther / Son',
      percentage: `${Math.round(dotherSon / summ)}%`,
      goals: `${dotherSon}/${total[2]}`,
    },
    {
      roles: 'Co-worker',
      percentage: `${Math.round(coWorker / summ)}%`,
      goals: `${coWorker}/${total[3]}`,
    },
    {
      roles: 'None',
      percentage: `${Math.round(none / summ)}%`,
      goals: `${none}/${total[4]}`,
    },
  ];
};

const Table = ({ data, dataTotal }) => {
  return (
    <ReactTable
      data={filteredData(data, dataTotal)}
      columns={columns}
      showPagination={false}
      defaultPageSize={5}
    />
  );
};

export default Table;
