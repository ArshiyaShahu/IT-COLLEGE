import React from 'react';

const Admissions = () => {
  const items = Array.from({ length: 10 }, (_, i) => ({
    name: `Student ${i + 1}`,
    status: 'Application Submitted',
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Admissions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4 border hover:shadow-md transition">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admissions;
