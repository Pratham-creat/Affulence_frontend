import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white shadow-md fixed">
      <div className="text-2xl font-bold p-6 text-purple-600">Affluence</div>
      <nav className="mt-10">
        <Link to="/dashboard" className={`flex items-center px-6 py-3 ${location.pathname === '/dashboard' ? 'text-purple-600 border-l-4 border-purple-600 bg-purple-50' : 'text-gray-600 hover:text-black'}`}>
          Dashboard
        </Link>
        <Link to="/request" className={`flex items-center px-6 py-3 ${location.pathname === '/request' ? 'text-purple-600 border-l-4 border-purple-600 bg-purple-50' : 'text-gray-600 hover:text-black'}`}>
          Request
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar
