import React from 'react';

const SystemReports = () => {
  const reports = Array.from({ length: 10 }, (_, i) => ({
    title: `Report ${i + 1}`,
    status: i % 2 === 0 ? 'Generated' : 'Pending',
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">System Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg border hover:shadow-md">
            <h3 className="text-lg font-semibold">{report.title}</h3>
            <p className="text-gray-600">Status: {report.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemReports;
