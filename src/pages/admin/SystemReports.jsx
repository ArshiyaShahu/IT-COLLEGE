import React from 'react';

const SystemReports = () => {
  const reports = [
    { title: 'Student Attendance Report', status: 'Generated', change: '+2' },
    { title: 'Faculty Attendance Report', status: 'Generated', change: '+1' },
    { title: 'Fee Payment Summary', status: 'Pending', change: '-1' },
    { title: 'Exam Results Overview', status: 'Generated', change: '+3' },
    { title: 'Library Usage Report', status: 'Pending', change: '-2' },
    { title: 'Transport Allocation Report', status: 'Generated', change: '+1' },
    { title: 'Hostel Occupancy Report', status: 'Pending', change: '0' },
    { title: 'Event Participation Report', status: 'Generated', change: '+4' },
    { title: 'User Login Activity', status: 'Generated', change: '+1' },
    { title: 'Support Ticket Summary', status: 'Pending', change: '-1' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">📊 System Reports Summary</h2>

      <div className="overflow-auto rounded-lg shadow ring-1 ring-black ring-opacity-5">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-6 py-3 font-semibold">Report Title</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold">Weekly Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reports.map((report, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{report.title}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      report.status === 'Generated'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-sm font-semibold ${
                      report.change.startsWith('+')
                        ? 'text-green-600'
                        : report.change === '0'
                        ? 'text-gray-600'
                        : 'text-red-600'
                    }`}
                  >
                    {report.change}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemReports;
