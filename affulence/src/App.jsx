// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Global Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

// Page Components
import DashboardPage from './pages/Dashboard/DashboardPage';
import RequestPage from './pages/Request/RequestPage';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/request" element={<RequestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

