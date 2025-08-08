import React from 'react';
import { FaSmile, FaChalkboardTeacher, FaBook, FaBriefcase, FaUtensils, FaLaptopCode, FaHandsHelping, FaClock } from 'react-icons/fa';

const feedbackList = [
  { icon: <FaSmile />, text: "Very satisfied with lab facilities." },
  { icon: <FaChalkboardTeacher />, text: "Lectures are well organized." },
  { icon: <FaBook />, text: "Library hours can be extended." },
  { icon: <FaBriefcase />, text: "More career guidance sessions needed." },
  { icon: <FaUtensils />, text: "Cafeteria hygiene could improve." },
  { icon: <FaLaptopCode />, text: "Need more real-world coding projects." },
  { icon: <FaHandsHelping />, text: "Counseling support should be available weekly." },
  { icon: <FaClock />, text: "Time management workshops would help." },
];

const Feedback = () => {
  return (
    <div className="ml-70 p-6 min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">📋 Student Feedback</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {feedbackList.map((item, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="text-indigo-600 text-2xl bg-indigo-100 p-3 rounded-full mr-4">
                {item.icon}
              </div>
              <p className="text-gray-800 text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
