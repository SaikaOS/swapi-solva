import React from 'react';
import { Link } from 'react-router-dom';

interface TableProps {
  data: any[]; 
  columns: string[];
  entityType: string;
}

const Table: React.FC<TableProps> = ({ data, columns, entityType }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} className="border border-gray-300 p-2">
              {column.charAt(0).toUpperCase() + column.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className="cursor-pointer hover:bg-gray-100"
          >
            {columns.map((column) => (
              <td key={column} className="border border-gray-300 p-2">
                <Link to={`/${entityType}/${index + 1}`}>{item[column]}</Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
