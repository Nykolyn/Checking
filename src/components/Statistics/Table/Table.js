import React from 'react';
import ReactTable from 'react-table';

import './Table.css';
import data from '../testData';

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

  return [
    {
      roles: 'Partner',
      percentage: 10 + '%',
      goals: `${partner}/?`,
    },
    {
      roles: 'Learner',
      percentage: 30 + '%',
      goals: `${learner}/?`,
    },
    {
      roles: 'Daugther / Son',
      percentage: 30 + '%',
      goals: `${dotherSon}/?`,
    },
    {
      roles: 'Co-worker',
      percentage: 30 + '%',
      goals: `${coWorker}/?`,
    },
    {
      roles: 'None',
      percentage: 30 + '%',
      goals: `${none}/?`,
    },
  ];
};

const Table = () => {
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
