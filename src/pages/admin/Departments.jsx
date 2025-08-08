import React from 'react';

const Departments = () => {
  const depts = [
    { dept: 'Computer Science', head: 'Dr. Mehta' },
    { dept: 'Information Technology', head: 'Prof. Shah' },
    { dept: 'Electronics & Communication', head: 'Dr. Patel' },
    { dept: 'Mechanical Engineering', head: 'Prof. Rathod' },
    { dept: 'Civil Engineering', head: 'Dr. Trivedi' },
    { dept: 'Electrical Engineering', head: 'Prof. Desai' },
    { dept: 'Mathematics', head: 'Dr. Bhatt' },
    { dept: 'Physics', head: 'Prof. Iyer' },
    { dept: 'Chemistry', head: 'Dr. Naik' },
    { dept: 'English', head: 'Prof. Joshi' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-teal-700 text-center underline underline-offset-4">
        College Departments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {depts.map((d, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-teal-50 border border-teal-200 shadow-lg rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-teal-800 mb-2">{d.dept}</h3>
            <p className="text-gray-700">
              <span className="font-medium">Head:</span> {d.head}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
