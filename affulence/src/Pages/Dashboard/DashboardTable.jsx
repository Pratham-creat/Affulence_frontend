// components/DashboardTable.jsx
import React from 'react';

const DashboardTable = () => (
  <div className="overflow-auto rounded shadow bg-white">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-gray-200">
        <tr>
          {['Creator Name', 'Phone Number', 'Transaction Type', 'Type', 'User  Name', 'Date', 'Amount'].map(
            (head, index) => (
              <th key={`head-${index}`} className="p-3 font-semibold text-gray-600">
                {head}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].map((_, i) => (
          <tr key={`row-${i}`} className="border-t">
            <td className="p-2">Tripti Dimri</td>
            <td className="p-2">1234567890</td>
            <td className="p-2">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs uppercase">
                pending
              </span>
            </td>
            <td className="p-2">unknown</td>
            <td className="p-2">user_{i}</td>
            <td className="p-2">01-07-2025</td>
            <td className="p-2">1</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DashboardTable;
