import React, { FC, useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

const Example: FC = () => {
  const columns = useMemo(
    () => [
      //column definitions...
      {
        Header: 'First Name',
        accessor: 'firstName' as const,
      },
      {
        Header: 'Last Name',
        accessor: 'lastName' as const,
      },
      {
        Header: 'Age',
        accessor: 'age' as const,
      },
      {
        Header: 'Address',
        accessor: 'address' as const,
      },
      {
        Header: 'City',
        accessor: 'city' as const,
      },
      {
        Header: 'State',
        accessor: 'state' as const,
      },
      //end
    ],
    [],
  );

  const data = useMemo(
    () => [
      //data definitions...
      {
        firstName: 'Dylan',
        lastName: 'Murray',
        age: 22,
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
      },
      {
        firstName: 'Raquel',
        lastName: 'Kohler',
        age: 18,
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
      },
      {
        firstName: 'Ervin',
        lastName: 'Reinger',
        age: 20,
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
      },
      {
        firstName: 'Brittany',
        lastName: 'McCullough',
        age: 21,
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
      },
      {
        firstName: 'Branson',
        lastName: 'Frami',
        age: 32,
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
      },
      //end
    ],
    [],
  );
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      disableSelectAll
      enableSelection
      muiSelectCheckboxProps={(isSelectAll, row, _tableInstance) => ({
        color: 'secondary',
        disabled: !isSelectAll && row?.values?.age < 21,
      })}
      onSelectChange={(event, row, selectedRows) => {
        console.log({ event, row, selectedRows });
      }}
    />
  );
};

export default Example;