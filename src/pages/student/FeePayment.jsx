import React from 'react';

const FeePayment = () => {
  const fees = [
    { label: 'Tuition Fee', amount: '₹45,000', status: 'Paid' },
    { label: 'Library Fee', amount: '₹1,500', status: 'Paid' },
    { label: 'Lab Fee', amount: '₹2,000', status: 'Due' },
    { label: 'Sports Fee', amount: '₹800', status: 'Paid' },
    { label: 'Exam Fee', amount: '₹1,200', status: 'Due' },
    { label: 'Tuition Fee', amount: '₹45,000', status: 'Paid' },
    { label: 'Library Fee', amount: '₹1,500', status: 'Paid' },
    { label: 'Lab Fee', amount: '₹2,000', status: 'Due' },
    { label: 'Sports Fee', amount: '₹800', status: 'Paid' },
    { label: 'Exam Fee', amount: '₹1,200', status: 'Due' },
  ];

  const getStatusBadge = (status) => {
    const base = 'text-xs font-semibold px-2 py-1 rounded-full';
    if (status === 'Paid') {
      return <span className={`${base} bg-green-100 text-green-700`}>Paid</span>;
    } else {
      return <span className={`${base} bg-red-100 text-red-600`}>Due</span>;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-white p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-red-700 border-b pb-4 flex items-center gap-2">
          💳 Fee Payment Summary
        </h1>

        <div className="space-y-4">
          {fees.map((fee, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 hover:bg-red-50 border rounded-xl transition-all duration-200 shadow-sm"
            >
              <div className="text-gray-800 font-medium">{fee.label}</div>
              <div className="text-gray-600">{fee.amount}</div>
              {getStatusBadge(fee.status)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeePayment;
