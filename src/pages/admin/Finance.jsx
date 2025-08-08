import React from 'react';

const Finance = () => {
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
  const years = ['2024', '2025'];

  const financeData = [
    {
      feeType: 'Tuition Fees',
      values: [
        [12000, 13000, 14000, 13500],
        [12500, 13200, 14200, 13750],
      ],
    },
    {
      feeType: 'Library Fees',
      values: [
        [1000, 1000, 1200, 1000],
        [1200, 1100, 1100, 1000],
      ],
    },
    {
      feeType: 'Lab Fees',
      values: [
        [1500, 1500, 1600, 1500],
        [1550, 1600, 1700, 1600],
      ],
    },
    {
      feeType: 'Hostel Fees',
      values: [
        [8000, 8500, 8700, 8600],
        [8800, 8700, 8900, 9000],
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
        💰 Finance Report
      </h2>
      
      <div className="overflow-auto">
        <table className="w-full table-auto bg-white rounded-xl shadow-md overflow-hidden text-sm">
          <thead className="bg-pink-100 text-pink-800">
            <tr>
              <th className="p-3 text-left">Fee Type</th>
              {years.map((year) =>
                quarters.map((q) => (
                  <th key={`${q}-${year}`} className="p-3 text-center">
                    {q} {year}
                  </th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            {financeData.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50 border-b">
                <td className="p-3 font-medium">{item.feeType}</td>
                {item.values.flat().map((value, idx) => (
                  <td key={idx} className="p-3 text-center text-gray-700">
                    ₹{value.toLocaleString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-gray-600 text-sm text-center">
        * Data represents quarterly fee collection per department from 2024 to 2025.
      </div>
    </div>
  );
};

export default Finance;
