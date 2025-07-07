import React, { useState } from 'react';
import WalletRequestTable from './WalletRequestTable';

const RequestPage = () => {
  const [activeTab, setActiveTab] = useState('wallet');

  return (
    <div className="min-h-screen bg-[#f6f9fc] p-6">
      <h1 className="text-2xl font-bold mb-6">Request</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`py-2 px-4 text-sm font-semibold ${
            activeTab === 'wallet'
              ? 'border-b-2 border-purple-600 text-black'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('wallet')}
        >
          Wallet Request
        </button>
        <button
          className={`py-2 px-4 text-sm font-semibold ${
            activeTab === 'cashfree'
              ? 'border-b-2 border-purple-600 text-black'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('cashfree')}
        >
          Cashfree Request
        </button>
      </div>

      {/* Tab content */}
      {activeTab === 'wallet' ? (
        <WalletRequestTable />
      ) : (
        <div className="bg-white p-4 rounded shadow text-sm text-gray-500">
          No Cashfree Requests
        </div>
      )}
    </div>
  );
};

export default RequestPage;
