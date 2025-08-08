import React from 'react';

const Timetable = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-semibold mb-4 text-purple-700">Time Table</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Mon: Mathematics, Physics</li>
          <li>Tue: Computer Science, Chemistry</li>
          <li>Wed: English, Lab</li>
          <li>Thu: Physics, Computer Lab</li>
          <li>Fri: Chemistry, Communication</li>
        </ul>
      </div>
    </div>
  );
};

export default Timetable;
