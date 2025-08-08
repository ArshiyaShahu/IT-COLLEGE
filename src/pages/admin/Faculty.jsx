import React from 'react';

const Faculty = () => {
  const facultyList = Array.from({ length: 10 }, (_, i) => ({
    name: `Faculty ${i + 1}`,
    subject: `Subject ${i + 1}`,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Faculty Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facultyList.map((fac, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg border hover:shadow-md">
            <h3 className="text-lg font-semibold">{fac.name}</h3>
            <p className="text-gray-600">{fac.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
