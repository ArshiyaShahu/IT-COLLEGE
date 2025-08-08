import React from 'react';

const ManageEvents = () => {
  // Specific event names with details
  const events = [
    { title: 'Tech Talk 2025', date: '2025-09-10' },
    { title: 'AI Workshop', date: '2025-09-11' },
    { title: 'Cultural Fest', date: '2025-09-12' },
    { title: 'Hackathon', date: '2025-09-13' },
    { title: 'Alumni Meetup', date: '2025-09-14' },
    { title: 'Career Guidance Session', date: '2025-09-15' },
    { title: 'Sports Day', date: '2025-09-16' },
    { title: 'Placement Drive', date: '2025-09-17' },
    { title: 'Coding Challenge', date: '2025-09-18' },
    { title: 'Farewell Function', date: '2025-09-19' },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-[#f7f0ff] to-[#e0f7fa] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">📅 Manage Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-orange-400"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
            <p className="text-gray-600 font-medium">📌 Date: <span className="text-gray-900">{event.date}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
