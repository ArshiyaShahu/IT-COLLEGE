import React from 'react';

const Courses = () => {
  const courses = Array.from({ length: 10 }, (_, i) => ({
    name: `Course ${i + 1}`,
    code: `CSE10${i + 1}`,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-emerald-700">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg border hover:shadow-md">
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-gray-600">Code: {course.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
