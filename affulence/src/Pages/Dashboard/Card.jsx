import React from 'react';

const Card = ({ title, value, color }) => (
  <div className={`p-4 rounded text-white ${color}`}>
    <p className="text-md font-semibold">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default Card;
