import React from 'react';

const facultyAssignments = [
  { id: 1, title: 'Review React Submissions', dueDate: '2025-08-06', status: 'Reviewed' },
  { id: 2, title: 'Evaluate Node.js APIs', dueDate: '2025-08-08', status: 'Pending' },
  { id: 3, title: 'Grade MongoDB Models', dueDate: '2025-08-11', status: 'Pending' },
  { id: 4, title: 'Approve UI Layouts', dueDate: '2025-08-13', status: 'Reviewed' },
  { id: 5, title: 'Final Project Feedback', dueDate: '2025-08-16', status: 'Pending' },
];

const FacultyAssignment = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-indigo-800">Faculty Assignment Tracker</h2>
      <div className="overflow-x-auto border-2 border-indigo-200 rounded-xl shadow-lg bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-indigo-100 text-indigo-900">
            <tr>
              <th className="py-4 px-6 font-semibold">No.</th>
              <th className="py-4 px-6 font-semibold">Task</th>
              <th className="py-4 px-6 font-semibold">Due</th>
              <th className="py-4 px-6 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {facultyAssignments.map((item, index) => (
              <tr key={item.id} className="border-t hover:bg-indigo-50">
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{item.title}</td>
                <td className="py-4 px-6">{item.dueDate}</td>
                <td
                  className={`py-4 px-6 font-semibold ${
                    item.status === 'Reviewed' ? 'text-green-600' : 'text-yellow-600'
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyAssignment;
