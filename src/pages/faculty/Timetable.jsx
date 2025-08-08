import React from 'react';
import { Helmet } from 'react-helmet';

const FacultyTimetable = () => {
  return (
    <>
      <Helmet>
        <title>My Timetable - Faculty Portal</title>
        <meta name="description" content="View your teaching schedule and timetable." />
      </Helmet>
      
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Timetable</h1>
          <p className="text-gray-600 mt-2">View your teaching schedule and manage your classes</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Weekly Schedule</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Download PDF
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Time</th>
                  <th className="text-left py-3 px-4 font-semibold">Monday</th>
                  <th className="text-left py-3 px-4 font-semibold">Tuesday</th>
                  <th className="text-left py-3 px-4 font-semibold">Wednesday</th>
                  <th className="text-left py-3 px-4 font-semibold">Thursday</th>
                  <th className="text-left py-3 px-4 font-semibold">Friday</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">9:00 - 10:30</td>
                  <td className="py-3 px-4">
                    <div className="bg-blue-100 p-2 rounded">
                      <div className="font-medium text-blue-900">Data Structures</div>
                      <div className="text-sm text-blue-700">Room 301</div>
                    </div>
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div className="bg-green-100 p-2 rounded">
                      <div className="font-medium text-green-900">Algorithms</div>
                      <div className="text-sm text-green-700">Room 302</div>
                    </div>
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div className="bg-purple-100 p-2 rounded">
                      <div className="font-medium text-purple-900">Database Systems</div>
                      <div className="text-sm text-purple-700">Lab 1</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">11:00 - 12:30</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div className="bg-yellow-100 p-2 rounded">
                      <div className="font-medium text-yellow-900">Web Development</div>
                      <div className="text-sm text-yellow-700">Room 201</div>
                    </div>
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div className="bg-red-100 p-2 rounded">
                      <div className="font-medium text-red-900">Software Engineering</div>
                      <div className="text-sm text-red-700">Room 303</div>
                    </div>
                  </td>
                  <td className="py-3 px-4"></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">2:00 - 3:30</td>
                  <td className="py-3 px-4">
                    <div className="bg-indigo-100 p-2 rounded">
                      <div className="font-medium text-indigo-900">Research Lab</div>
                      <div className="text-sm text-indigo-700">Lab 3</div>
                    </div>
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div className="bg-pink-100 p-2 rounded">
                      <div className="font-medium text-pink-900">Office Hours</div>
                      <div className="text-sm text-pink-700">Room 105</div>
                    </div>
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div className="bg-gray-100 p-2 rounded">
                      <div className="font-medium text-gray-900">Department Meeting</div>
                      <div className="text-sm text-gray-700">Conference Room</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Classes</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">Data Structures</div>
                  <div className="text-sm text-gray-600">Tomorrow, 9:00 AM</div>
                </div>
                <span className="text-sm text-blue-600">Room 301</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">Algorithms</div>
                  <div className="text-sm text-gray-600">Day after, 11:00 AM</div>
                </div>
                <span className="text-sm text-green-600">Room 302</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
                <div className="font-medium text-blue-900">Mark Attendance</div>
                <div className="text-sm text-blue-700">For today's classes</div>
              </button>
              <button className="w-full text-left p-3 bg-green-50 rounded hover:bg-green-100 transition-colors">
                <div className="font-medium text-green-900">Upload Materials</div>
                <div className="text-sm text-green-700">For upcoming lectures</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyTimetable;
