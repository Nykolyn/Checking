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

const filteredData = array => {
  const partner = array.filter(el => el.role === 'Partner').length;
  const learner = array.filter(el => el.role === 'Learner').length;
  const dotherSon = array.filter(el => el.role === 'Dauther / Son').length;
  const coWorker = array.filter(el => el.role === 'Co-worker').length;
  const none = array.filter(el => el.role === 'None').length;

  const summ = (partner + learner + dotherSon + coWorker + none) / 100;

  return [
    {
      roles: 'Partner',
      percentage: `${Math.round(partner / summ)}%`,
      goals: `${partner}/?`,
    },
    {
      roles: 'Learner',
      percentage: `${Math.round(learner / summ)}%`,
      goals: `${learner}/?`,
    },
    {
      roles: 'Daugther / Son',
      percentage: `${Math.round(dotherSon / summ)}%`,
      goals: `${dotherSon}/?`,
    },
    {
      roles: 'Co-worker',
      percentage: `${Math.round(coWorker / summ)}%`,
      goals: `${coWorker}/?`,
    },
    {
      roles: 'None',
      percentage: `${Math.round(none / summ)}%`,
      goals: `${none}/?`,
    },
  ];
};

const Table = ({ data }) => {
  return (
    <ReactTable
      data={filteredData(data)}
      columns={columns}
      showPagination={false}
      defaultPageSize={5}
    />
  );
};

export default Table;
