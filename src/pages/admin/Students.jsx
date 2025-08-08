import React from 'react';

const Students = () => {
  const students = Array.from({ length: 10 }, (_, i) => ({
    name: `Student ${i + 1}`,
    grade: `Grade ${9 + i}`,
  }));

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-800 text-center">Student Records</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border-t-4 border-blue-400"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{student.name}</h3>
            <p className="text-gray-500">{student.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
