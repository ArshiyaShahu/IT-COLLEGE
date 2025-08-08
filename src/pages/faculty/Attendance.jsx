import React from 'react';

const Attendance = () => {
  const students = [
    { id: 1, name: 'Zeba', present: true },
    { id: 2, name: 'Sana', present: false },
    { id: 3, name: 'Riya', present: true },
    { id: 4, name: 'Roomy', present: false },
    { id: 5, name: 'Ayman', present: true },
    { id: 6, name: 'Ridazainab', present: false },
    { id: 7, name: 'Fatima', present: true },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">📋 Attendance Record</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                <p className="text-sm text-gray-500">ID: #{student.id}</p>
              </div>

              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  student.present ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {student.present ? 'Present' : 'Absent'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
