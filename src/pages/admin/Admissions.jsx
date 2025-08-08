import React, { useState } from 'react';

const Admissions = () => {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      name: `Student ${i + 1}`,
      status: 'Application Submitted',
    }))
  );
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    status: 'Application Submitted',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setItems([...items, formData]);
    setFormData({ name: '', status: 'Application Submitted' });
    setShowForm(false);
  };

  return (
    <div className="ml-70 p-6 min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-indigo-700">Admissions</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            {showForm ? 'Close Form' : 'Add New Admission'}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleFormSubmit}
            className="bg-gray-50 border border-indigo-200 rounded-lg p-4 mb-6"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Submit Admission
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-indigo-800">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admissions;
