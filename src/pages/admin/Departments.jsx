import React from 'react';

const Departments = () => {
  const depts = Array.from({ length: 10 }, (_, i) => ({
    dept: `Department ${i + 1}`,
    head: `Head ${i + 1}`,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-teal-700">Departments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {depts.map((d, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg border hover:shadow-md">
            <h3 className="text-lg font-semibold">{d.dept}</h3>
            <p className="text-gray-600">Head: {d.head}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
