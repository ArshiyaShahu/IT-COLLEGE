import React from 'react';

const Subjects = () => {
  const subjects = [
    'Mathematics',
    'Computer Science',
    'Physics',
    'Chemistry',
    'English Communication',
    'Data Structures',
    'Web Development',
    'Operating Systems',
    'Database Management Systems',
    'Software Engineering',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 border-b pb-2">Subjects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 rounded-xl p-4 shadow transition-all duration-300"
            >
              <h2 className="text-lg font-medium">{subject}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
