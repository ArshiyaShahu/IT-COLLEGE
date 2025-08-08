import React, { useState } from 'react';

const UploadMarks = () => {
  const [studentId, setStudentId] = useState('');
  const [marks, setMarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted marks for Student ID: ${studentId}, Marks: ${marks}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Marks</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Student ID"
          className="w-full border p-2 rounded"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Marks"
          className="w-full border p-2 rounded"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadMarks;
