import React from 'react';

const events = [
  {
    icon: "🧠",
    title: "Workshop on “AI & Machine Learning Basics”",
    date: "20th August 2025",
    time: "10:00 AM to 1:00 PM",
    venue: "Seminar Hall, IT Block",
    details:
      "Hands-on session with TCS experts. Get certified in AI & ML basics.",
  },
  {
    icon: "💻",
    title: "CodeStorm 2025 – 24-Hour Hackathon Challenge",
    date: "12th September 2025",
    time: "10:00 AM (12th Sept) to 10:00 AM (13th Sept)",
    venue: "Computer Lab – Block B",
    details: "Compete in a 24-hour coding marathon to develop innovative solutions for real-world problems. Top 3 teams will receive cash prizes and internship opportunities. Eligibility: All BCA, MCA, and B.Tech students (Team of 2-4 members). Last Date to Register: 5th September 2025 – Register with your team via the Event Portal or contact the IT Club",
  },
  {
    icon: "💼",
    title: "Infosys Campus Placement Drive",
    date: "28th August 2025",
    time: "9:00 AM onwards",
    venue: "Auditorium",
    details:
      "Online test + Interview. Final Year BCA / MCA / B.Tech eligible. Register before 24th Aug.",
  },
  {
    icon: "🎉",
    title: "TechFiesta 2025 – Annual Tech Fest",
    date: "5th & 6th September 2025",
    time: "Full Day",
    venue: "College Campus",
    details:
      "Hackathon, CodeMania, LAN Gaming & more. Cash prizes + Certificates.",
  },
  {
    icon: "🎨",
    title: "Poster Design Competition – “Digital India”",
    date: "15th August 2025",
    time: "11:00 AM",
    venue: "Drawing Lab, Room No. 102",
    details:
      "Theme: Digital India. Submit before 12th Aug. Top 3 get ₹1000 + Certificate.",
  },
];

const Events = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-red-700 mb-6 flex items-center gap-2">
          📢 Events & Notices
        </h1>
        <div className="space-y-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border-l-4 border-indigo-500 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
                {event.icon} {event.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Date:</strong> {event.date} &nbsp;|&nbsp;
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Venue:</strong> {event.venue}
              </p>
              <p className="mt-2 text-gray-700">{event.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
