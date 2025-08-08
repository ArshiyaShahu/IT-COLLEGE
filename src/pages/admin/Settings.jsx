import React from 'react';

const Settings = () => {
  const settings = Array.from({ length: 10 }, (_, i) => ({
    key: `Setting ${i + 1}`,
    value: 'Enabled',
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">System Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {settings.map((s, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg border hover:shadow-md">
            <h3 className="text-lg font-semibold">{s.key}</h3>
            <p className="text-gray-600">Value: {s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
