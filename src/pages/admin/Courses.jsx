import React from 'react';

const Courses = () => {
  const courses = [
    { name: 'Introduction to Programming', code: 'CSE101' },
    { name: 'Data Structures & Algorithms', code: 'CSE102' },
    { name: 'Database Management Systems', code: 'CSE201' },
    { name: 'Operating Systems', code: 'CSE202' },
    { name: 'Computer Networks', code: 'CSE301' },
    { name: 'Web Development', code: 'CSE302' },
    { name: 'Mobile App Development', code: 'CSE303' },
    { name: 'Software Engineering', code: 'CSE304' },
    { name: 'Machine Learning', code: 'CSE401' },
    { name: 'Cloud Computing', code: 'CSE402' },
  ];

  return (
    <div className="p-1 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-emerald-700">
        📘 Our Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white roun2ed-xl shadow-md p-6 border-l-4 border-emerald-500 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">
              {course.name}
            </h3>
            <p className="text-sm text-gray-600">Course Code: {course.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
