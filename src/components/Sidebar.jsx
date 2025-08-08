import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  ClipboardList,
  Calendar,
  Users,
  User,
  Shield,
  LogOut,
  BookUser,
  Library,
  CircleDollarSign,
  Clock,
  MessageSquare,
  Upload,
  CheckSquare,
  FileText,
  Building2,
  BookMarked,
  UserPlus,
  Landmark,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const studentMenuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', path: '/' },
  { icon: GraduationCap, label: 'Results', id: 'results', path: '/results' },
  { icon: ClipboardList, label: 'Assignments', id: 'assignments', path: '/assignments' },
  { icon: BookOpen, label: 'Subjects', id: 'subjects', path: '/subjects' },
  { icon: Clock, label: 'Timetable', id: 'timetable', path: '/timetable' },
  { icon: Library, label: 'E-Library', id: 'library', path: '/library' },
  { icon: CircleDollarSign, label: 'Fee Payment', id: 'fees', path: '/fees' },
  { icon: Calendar, label: 'Events & Notices', id: 'events', path: '/events' },
  { icon: MessageSquare, label: 'Feedback', id: 'feedback', path: '/feedback' },
  { icon: User, label: 'Profile', id: 'profile', path: '/profile' },
];

const facultyMenuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', path: '/' },
  { icon: Users, label: 'My Students', id: 'my-students', path: '/my-students' },
  { icon: Upload, label: 'Upload Marks', id: 'upload-marks', path: '/upload-marks' },
  { icon: CheckSquare, label: 'Attendance', id: 'attendance', path: '/attendance' },
  { icon: ClipboardList, label: 'Assignments', id: 'assignments', path: '/faculty-assignments' },
  { icon: Clock, label: 'My Timetable', id: 'my-timetable', path: '/my-timetable' },
  { icon: FileText, label: 'Publications', id: 'publications', path: '/publications' },
  { icon: User, label: 'Profile', id: 'profile', path: '/profile' },
];

const adminMenuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', path: '/' },
  { icon: UserPlus, label: 'Admissions', id: 'admissions', path: '/admissions' },
  { icon: Users, label: 'Students', id: 'students', path: '/students' },
  { icon: BookUser, label: 'Faculty', id: 'faculty', path: '/faculty' },
  { icon: Building2, label: 'Departments', id: 'departments', path: '/departments' },
  { icon: BookMarked, label: 'Courses', id: 'courses', path: '/courses' },
  { icon: Landmark, label: 'Finance', id: 'finance', path: '/finance' },
  { icon: Calendar, label: 'Manage Events', id: 'manage-events', path: '/manage-events' },
  { icon: Shield, label: 'System Reports', id: 'reports', path: '/reports' },
  { icon: Settings, label: 'Settings', id: 'settings', path: '/settings' },
];

export function Sidebar({ userRole }) {
  const { toast } = useToast();
  const location = useLocation();
  const currentPath = location.pathname;

  const role = userRole?.toLowerCase();

  let menuItems = studentMenuItems;
  if (role === 'faculty') menuItems = facultyMenuItems;
  if (role === 'admin') menuItems = adminMenuItems;

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 bg-card border-r border-border h-screen fixed left-0 top-0 z-50 flex flex-col overflow-y-auto"
    >
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-3 mb-8"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">IT college</h1>
            <p className="text-sm text-muted-foreground capitalize">{role} Portal</p>
          </div>
        </motion.div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = currentPath === item.path;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    'w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
