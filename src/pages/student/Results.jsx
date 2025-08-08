import React from 'react';

const Results = () => {
  const results = [
    { semester: 'Semester 1', score: '85%' },
    { semester: 'Semester 2', score: '88%' },
    { semester: 'Semester 3', score: '79%' },
    { semester: 'Semester 4', score: '91%' },
    { semester: 'Semester 5', score: '87%' }, 
    { semester: 'Semester 6', score: '92%' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto bg-white dark:bg-card p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Results</h2>
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-4 py-3 bg-muted rounded-lg text-muted-foreground hover:bg-secondary transition"
            >
              <span className="font-medium">{result.semester}</span>
              <span className="text-lg font-semibold text-primary">{result.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
