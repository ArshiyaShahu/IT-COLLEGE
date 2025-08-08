import React from 'react';

const Faculty = () => {
  const facultyList = [
    { name: 'Dr. Aarti Sharma', subject: 'Computer Science' },
    { name: 'Prof. Rajesh Mehta', subject: 'Mathematics' },
    { name: 'Dr. Sneha Patel', subject: 'Physics' },
    { name: 'Prof. Kunal Joshi', subject: 'Chemistry' },
    { name: 'Dr. Rina Desai', subject: 'Biology' },
    { name: 'Prof. Amit Saxena', subject: 'English Literature' },
    { name: 'Dr. Nidhi Thakkar', subject: 'Economics' },
    { name: 'Prof. Harsh Vyas', subject: 'History' },
    { name: 'Dr. Pooja Gandhi', subject: 'Psychology' },
    { name: 'Prof. Manish Chauhan', subject: 'Statistics' },
  ];

  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-800">Faculty Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {facultyList.map((fac, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{fac.name}</h3>
            <p className="text-gray-500 text-base">{fac.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
