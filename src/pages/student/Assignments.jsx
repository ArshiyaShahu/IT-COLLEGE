import React from 'react';

const assignments = [
  { id: 1, title: 'React Basics', dueDate: '2025-08-05', status: 'Pending' },
  { id: 2, title: 'Node.js API', dueDate: '2025-08-07', status: 'Submitted' },
  { id: 3, title: 'MongoDB Modeling', dueDate: '2025-08-10', status: 'Pending' },
  { id: 4, title: 'Tailwind Layout', dueDate: '2025-08-12', status: 'Submitted' },
  { id: 5, title: 'Full Stack Integration', dueDate: '2025-08-15', status: 'Pending' },
  { id: 6, title: 'firebase Modeling', dueDate: '2025-09-10', status: 'Pending' },
  { id: 7, title: 'flutter developeing', dueDate: '2025-09-12', status: 'Submitted' },
  { id: 8, title: 'react Stack Integration', dueDate: '2025-09-15', status: 'Submitted' },
];

const Assignment = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-primary">Your Assignments</h2>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">#</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Title</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Due Date</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={assignment.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{index + 1}</td>
                <td className="py-3 px-4 border-b">{assignment.title}</td>
                <td className="py-3 px-4 border-b">{assignment.dueDate}</td>
                <td className={`py-3 px-4 border-b font-medium ${
                  assignment.status === 'Submitted'
                    ? 'text-green-600'
                    : 'text-red-500'
                }`}>
                  {assignment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignment;
