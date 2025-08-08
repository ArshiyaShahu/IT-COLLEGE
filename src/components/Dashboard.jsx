import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  ClipboardList,
  GraduationCap,
  Bell,
  Download,
  Percent,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const studentStats = [
  {
    title: 'Overall Attendance',
    value: '92%',
    icon: Percent,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Current GPA',
    value: '9.81',
    icon: GraduationCap,
    color: 'from-blue-500 to-sky-500',
  },
  {
    title: 'Assignments Due',
    value: '7',
    icon: ClipboardList,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    title: 'Upcoming Events',
    value: '7',
    icon: Calendar,
    color: 'from-purple-500 to-indigo-500',
  }
];

const recentResults = [
  { subject: 'Data Structures', grade: 'A', score: '95/100' },
  { subject: 'Algorithms', grade: 'A-', score: '91/100' },
  { subject: 'Database Systems', grade: 'B+', score: '88/100' },
  { subject: 'Operating Systems', grade: 'B', score: '85/100' },
  { subject: 'Computer Networks', grade: 'A', score: '90/100' },
  { subject: 'Software Engineering', grade: 'A-', score: '92/100' },
  { subject: 'Web Technologies', grade: 'B+', score: '89/100' },
];

const recentAssignments = [
    { id: 1, title: 'DSA Assignment 3', subject: 'Data Structures', dueDate: '3 days left' },
    { id: 2, title: 'Database Normalization Task', subject: 'Database Systems', dueDate: '5 days left' },
    { id: 3, title: 'OS Process Scheduling Sim', subject: 'Operating Systems', dueDate: '6 days left' },
    { id: 4, title: 'Networking Lab 2: TCP/IP', subject: 'Computer Networks', dueDate: '1 week left' },
    { id: 5, title: 'Software Design Document', subject: 'Software Engineering', dueDate: '1 week left' },
    { id: 6, title: 'Final Year Project Proposal', subject: 'Project', dueDate: '2 weeks left' },
    { id: 7, title: 'Web Dev Mid-Term Project', subject: 'Web Technologies', dueDate: '2 weeks left' },
];

const notices = [
    { id: 1, text: 'Mid-term exams schedule has been announced.', time: '2h ago' },
    { id: 2, text: 'Holiday declared on Friday for university convocation.', time: '1d ago' },
    { id: 3, text: 'Guest lecture on "AI in Healthcare" next Monday.', time: '2d ago' },
    { id: 4, text: 'Annual Sports Day registration is now open.', time: '3d ago' },
    { id: 5, text: 'Library will be closed for maintenance this weekend.', time: '4d ago' },
    { id: 6, text: 'Results for Semester 5 are now live on the portal.', time: '5d ago' },
    { id: 7, text: 'Career fair for final year students next week.', time: '6d ago' },
];

const subjectPerformanceData = {
  labels: ['DSA', 'Algo', 'DBMS', 'OS', 'CN', 'SE', 'Web'],
  datasets: [
    {
      label: 'Your Score',
      data: [95, 91, 88, 85, 90, 92, 89],
      backgroundColor: 'rgba(59, 130, 246, 0.7)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
      borderRadius: 4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'hsl(var(--muted-foreground))',
      },
    },
    y: {
      grid: {
        color: 'hsl(var(--border))',
      },
      ticks: {
        color: 'hsl(var(--muted-foreground))',
      },
    },
  },
};

export function Dashboard({ user }) {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Soon you'll be able to download your assignments right here.",
      duration: 3000,
    });
  }
  
  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  }

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-1">Welcome, {user.name}!</h1>
          <p className="text-muted-foreground">Here's your academic dashboard for today.</p>
        </div>
        <div className="flex items-center space-x-4">
            <Avatar>
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-foreground">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.role}</p>
            </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {studentStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="card-hover">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Recent Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentResults.map((result) => (
                  <div key={result.subject} className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-foreground">{result.subject}</p>
                        <p className="text-sm text-muted-foreground">{result.score}</p>
                    </div>
                    <Badge className={getGradeColor(result.grade)}>{result.grade}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Subject-wise Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <Bar options={chartOptions} data={subjectPerformanceData} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <Card>
                <CardHeader>
                    <CardTitle className="text-foreground flex items-center">
                    <ClipboardList className="w-5 h-5 mr-2" />
                    Pending Assignments
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {recentAssignments.map((assignment) => (
                            <div key={assignment.id} className="flex items-center justify-between p-3 rounded-md border">
                                <div>
                                    <p className="font-medium">{assignment.title}</p>
                                    <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Badge variant="outline">{assignment.dueDate}</Badge>
                                    <Button size="sm" onClick={handleDownload}>
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                </Card>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
            >
                <Card>
                    <CardHeader>
                        <CardTitle className="text-foreground flex items-center">
                        <Bell className="w-5 h-5 mr-2" />
                        Latest Notices
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {notices.map((notice) => (
                                <div key={notice.id} className="flex items-start space-x-3">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <Bell className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground">{notice.text}</p>
                                        <p className="text-xs text-muted-foreground">{notice.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
       </div>
    </div>
  );
}
