import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { Toaster } from '@/components/ui/toaster';
import { Login } from '@/pages/Login';

// STUDENT PAGES
import Results from '@/pages/student/Results';
import Assignments from '@/pages/student/Assignments';
import Subjects from '@/pages/student/Subjects';
import StudentTimetable from '@/pages/student/Timetable';
import ELibrary from '@/pages/student/ELibrary';
import FeePayment from '@/pages/student/FeePayment';
import Events from '@/pages/student/Events';
import Feedback from '@/pages/student/Feedback';
import StudentProfile from '@/pages/student/Profile';

// FACULTY PAGES
import MyStudents from '@/pages/faculty/MyStudents';
import UploadMarks from '@/pages/faculty/UploadMarks';
import Attendance from '@/pages/faculty/Attendance';
import Publications from '@/pages/faculty/Publications';
import FacultyTimetable from '@/pages/faculty/Timetable';
import FacultyProfile from '@/pages/faculty/Profile';
import FacultyAssignment from '@/pages/faculty/Assignment';

// ADMIN PAGES
import Admissions from './pages/admin/Admissions';
import Students from './pages/admin/Students';
import Faculty from './pages/admin/Faculty';
import Departments from './pages/admin/Departments';
import Courses from './pages/admin/Courses';
import Finance from './pages/admin/Finance';
import ManageEvents from './pages/admin/ManageEvents';
import SystemReports from './pages/admin/SystemReports';
import Settings from './pages/admin/Settings';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Helmet>
        <title>IT college Portal</title>
        <meta
          name="description"
          content="A web-based ERP system for colleges with modules for students, faculty, and admins."
        />
      </Helmet>

      <div className="min-h-screen erp-gradient">
        <Router>
          {!user ? (
            <Routes>
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          ) : (
            <div className="flex">
              <Sidebar userRole={user.role} />
              <main className="flex-1 p-6 ml-64">
                <Routes>
                  <Route path="/" element={<Dashboard user={user} />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/assignments" element={<Assignments />} />
                  <Route path="/subjects" element={<Subjects />} />
                  <Route path="/timetable" element={user.role === 'student' ? <StudentTimetable /> : <FacultyTimetable />} />
                  <Route path="/library" element={<ELibrary />} />
                  <Route path="/fees" element={<FeePayment />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route path="/profile" element={user.role === 'student' ? <StudentProfile /> : <FacultyProfile />} />
                  
                  <Route path="/my-students" element={<MyStudents />} />
                  <Route path="/upload-marks" element={<UploadMarks />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/faculty-assignments" element={<FacultyAssignment />} />
                  <Route path="/my-timetable" element={<FacultyTimetable />} />
                  <Route path="/publications" element={<Publications />} />
       
                  <Route path="/admissions" element={<Admissions />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/faculty" element={<Faculty />} />
                  <Route path="/departments" element={<Departments />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/finance" element={<Finance />} />
                  <Route path="/manage-events" element={<ManageEvents />} />
                  <Route path="/reports" element={<SystemReports />} />
                  <Route path="/settings" element={<Settings />} />
                  
                  {/* Fallback - redirect to dashboard */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
            </div>
          )}
        </Router>
        <Toaster />
      </div>
    </>
  );
}

export default App;
