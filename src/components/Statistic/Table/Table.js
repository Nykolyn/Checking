import React from 'react';
import ReactTable from 'react-table';
import './Table.css';

// const statsTable = () => {
//   return (
//     <ReactTable
//       //   key={data('-').length}
//       data={data}
//       columns={[
//         {
//           Header: 'Roles',
//           accessor: 'roles',
//         },
//         {
//           Header: 'Role percentage %',
//           accessor: 'percentage',
//         },
//         {
//           Header: 'Tasks done / planned',
//           accessor: 'goals',
//         },
//       ]}
//       //   defaultPageSize={data('-').length}
//       //   showPagination={false}
//     />
//   );
// };

// export default statsTable;

const a = () => {
  const data = [
    {
      roles: 'Partner',
      percentage: 10 + '%',
      goals: '70/200',
    },
    {
      roles: 'Learner',
      percentage: 30 + '%',
      goals: '0/200',
    },
    {
      roles: 'Daugther / Son',
      percentage: 30 + '%',
      goals: '0/200',
    },
    {
      roles: 'Co-worker',
      percentage: 30 + '%',
      goals: '0/200',
    },
    {
      roles: 'None',
      percentage: 30 + '%',
      goals: '0/200',
    },
  ];

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

  return (
    <ReactTable
      data={data}
      columns={columns}
      showPagination={false}
      defaultPageSize={5}
    />
  );
};

export default a;
