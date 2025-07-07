import React, { useState } from 'react';
import Card from './Card';
import DashboardTable from './DashboardTable';

const DashboardPage = () => {
  const [limit, setLimit] = useState(10);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-5 gap-4 mb-6">
        <Card title="Total Credit" value="₹16458.92" color="bg-green-500" />
        <Card title="Total Debit" value="₹1" color="bg-blue-500" />
        <Card title="Pending" value="203" color="bg-gray-400" />
        <Card title="Rejected" value="427" color="bg-red-500" />
        <Card title="Cashfree Wallet Balance" value="₹99991315.64" color="bg-purple-500" />
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2 font-medium">Limit:</label>
          <input
            type="number"
            className="border px-2 py-1 rounded"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Search Payment..."
          className="border px-3 py-1 rounded w-64"
        />
      </div>

      <DashboardTable />
    </div>
  );
};

export default DashboardPage;
