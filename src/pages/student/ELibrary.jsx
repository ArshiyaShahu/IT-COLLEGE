import React from 'react';
import { BookOpen, FileText, Video, Search, User } from 'lucide-react';

const ELibrary = () => {
  const resources = [
    { title: 'Operating System Notes.pdf', type: 'pdf', category: 'Notes' },
    { title: 'Modern Physics Book.epub', type: 'book', category: 'Book' },
    { title: 'JavaScript Tutorial.mp4', type: 'video', category: 'Video' },
    { title: 'AI in Education.pdf', type: 'pdf', category: 'Research' },
    { title: 'Data Structures eBook.pdf', type: 'pdf', category: 'eBook' },
    { title: 'Machine Learning Handbook.pdf', type: 'pdf', category: 'Handbook' },
    { title: 'Web Dev Basics.epub', type: 'book', category: 'Book' },
    { title: 'Cybersecurity.pdf', type: 'pdf', category: 'Guide' },
    { title: 'React.js Crash Course.mp4', type: 'video', category: 'Video' },
    { title: 'Cloud Computing Guide.pdf', type: 'pdf', category: 'Guide' },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'pdf':
        return <FileText className="text-red-500 w-5 h-5" />;
      case 'video':
        return <Video className="text-blue-500 w-5 h-5" />;
      case 'book':
        return <BookOpen className="text-purple-500 w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="ml-70 p-8 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">📚</span>
            <h1 className="text-3xl font-bold text-green-700">E-Library</h1>
          </div>
          <p className="text-gray-500 mt-1">Access books, notes, videos and more</p>
        </div>
        <div className="flex items-center gap-3">
          <Search className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search books, videos, notes..."
            className="px-3 py-2 w-72 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="text-gray-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 text-gray-600 font-medium">
        <button className="border-b-2 border-green-500 text-green-700 pb-2">Recommended</button>
        <button className="hover:text-green-700 transition duration-200">Recently Read</button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-transform transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-1 mb-3">
              <div className="p-1 rounded-full bg-gray-100">{getIcon(resource.type)}</div>
              <div className="flex-1">
                <h2 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2">
                  {resource.title}
                </h2>
                <p className="text-sm text-gray-500">{resource.category}</p>
              </div>
            </div>
            <button className="mt-3 w-full py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition">
              View Resource
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ELibrary;
