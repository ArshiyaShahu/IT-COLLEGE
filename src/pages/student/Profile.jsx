import React from 'react';

const Profile = () => {
  return (
    <div className="ml-64 p-6 min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-semibold mb-4 text-indigo-600">Student Profile</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <strong>Name:</strong> Arshiya Shah
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <strong>Email:</strong> arshiya@example.com
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <strong>Enrollment No:</strong> 2025IT123
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <strong>Department:</strong> Computer Science
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <strong>Year:</strong> 3rd Year
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
