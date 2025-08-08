import React from 'react';
import { Settings2, Bell, Palette, Lock, User, Clock } from 'lucide-react';

const Settings = () => {
  const settings = [
    { key: 'Notifications', value: 'Enabled', icon: <Bell className="w-5 h-5 text-green-600" /> },
    { key: 'Theme Mode', value: 'Light', icon: <Palette className="w-5 h-5 text-indigo-500" /> },
    { key: 'Account Lock', value: 'Disabled', icon: <Lock className="w-5 h-5 text-red-500" /> },
    { key: 'Auto Logout Time', value: '10 mins', icon: <Clock className="w-5 h-5 text-yellow-500" /> },
    { key: 'User Access Control', value: 'Active', icon: <User className="w-5 h-5 text-blue-500" /> },
    { key: 'Report Export', value: 'Enabled', icon: <Settings2 className="w-5 h-5 text-purple-500" /> },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">System Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settings.map((s, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl border p-6 transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-100 rounded-full">{s.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{s.key}</h3>
                <p className="text-gray-500">Value: <span className="font-medium">{s.value}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
