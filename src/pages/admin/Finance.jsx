import React from 'react';

const Finance = () => {
  const records = Array.from({ length: 10 }, (_, i) => ({
    student: `Student ${i + 1}`,
    amount: `${5000 + i * 500} ₹`,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-pink-700">Finance Records</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {records.map((rec, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg border hover:shadow-md">
            <h3 className="text-lg font-semibold">{rec.student}</h3>
            <p className="text-gray-600">Paid: {rec.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finance;
