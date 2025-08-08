import React from 'react';

const Students = () => {
  const students = Array.from({ length: 10 }, (_, i) => ({
    name: `Student ${i + 1}`,
    grade: `Grade ${9 + i}`,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Students</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg border hover:shadow-md">
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-gray-600">{student.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
