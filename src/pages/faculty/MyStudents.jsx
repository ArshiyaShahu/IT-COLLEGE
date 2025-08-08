import React from 'react';

const MyStudents = () => {
  const students = [
    { id: 1, name: 'zeba Charoliya', course: 'BCA', email: 'zeba@gmail.com' },
    { id: 2, name: 'Sana Sunasara', course: 'MCA', email: 'sana@gmail.com' },
    { id: 3, name: 'Riya Shahu', course: 'MBA', email: 'riya@gmail.com' },
    { id: 4, name: 'Roomy Sunasara', course: 'BSC', email: 'roomy@gmail.com' },
    { id: 5, name: 'Ayman Suleman', course: 'BCA', email: 'ayman@gmail.com' },
    { id: 6, name: 'Ridazainab Sunasara', course: 'BBA', email: 'ridazainab@gmail.com' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">🎓 My Students</h2>

      <div className="overflow-x-auto bg-white shadow-xl rounded-lg border border-gray-200">
        <table className="min-w-full table-auto text-sm text-gray-800">
          <thead className="bg-blue-50 text-blue-800 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Course</th>
              <th className="px-6 py-4 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr
                key={student.id}
                className={`hover:bg-blue-50 transition ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="px-6 py-4 font-medium text-gray-700">{student.id}</td>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.course}</td>
                <td className="px-6 py-4">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyStudents;
