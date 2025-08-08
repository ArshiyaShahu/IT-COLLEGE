import React from 'react';

const Publications = () => {
  const publications = [
    { id: 1, title: 'AI in Education', year: 2023 },
    { id: 2, title: 'Blockchain Security', year: 2024 },
    { id: 4, title: 'Cybersecurity', year: 2025 },
    { id: 5, title: 'Global Research Journal', year: 2026 },
    { id: 6, title: 'TechWorld Review', year: 2027 },
    { id: 7, title: 'Future Trends Quarterly', year: 2028 },
    { id: 8, title: 'CloudTech Insights', year: 2029 },
    { id: 9, title: 'DevOps & Deployment Weekly', year: 2025 },
    { id: 10, title: 'Machine Learning', year: 2025 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 relative inline-block">
        Publications
        <span className="block w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-1 rounded"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {pub.title}
            </h3>
            <p className="text-sm text-gray-600">Year: {pub.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
