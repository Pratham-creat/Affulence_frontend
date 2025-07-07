import React from 'react';

const data = [
  { amount: '₹1', date: '01/07/2025, 12:59 pm' },
  { amount: '₹1', date: '30/06/2025, 04:56 pm' },
  { amount: '₹10', date: '28/06/2025, 10:53 am' },
  { amount: '₹1', date: '18/06/2025, 12:16 pm' },
  { amount: '₹150', date: '28/04/2025, 10:38 am' },
];

const WalletRequestTable = () => (
  <div className="overflow-auto rounded bg-white shadow">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-[#f0f2f5] text-gray-700">
        <tr>
          {['User', 'Instagram', 'Amount (₹)', 'Status', 'Date', 'Actions'].map((head, i) => (
            <th key={i} className="px-5 py-3">{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-t">
            <td className="px-5 py-3">Tripti Dimri</td>
            <td className="px-5 py-3">krazyfox_studio</td>
            <td className="px-5 py-3">{item.amount}</td>
            <td className="px-5 py-3 text-yellow-600">Pending</td>
            <td className="px-5 py-3">{item.date}</td>
            <td className="px-5 py-3">
              <button className="px-4 py-1 bg-[#6f42c1] text-white rounded">Review</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination */}
    <div className="flex justify-center gap-2 py-4 text-sm text-gray-600">
      <button className="px-3 py-1 bg-gray-200 rounded">Prev</button>
      <span className="px-3 py-1 bg-purple-600 text-white rounded">1</span>
      <button className="px-3 py-1 bg-gray-200 rounded">Next</button>
    </div>
  </div>
);

export default WalletRequestTable;
