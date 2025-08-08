import React from 'react';

const ManageEvents = () => {
  const events = Array.from({ length: 10 }, (_, i) => ({
    title: `Event ${i + 1}`,
    date: `2025-09-${i + 10}`,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-700">Manage Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg border hover:shadow-md">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">Date: {event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
