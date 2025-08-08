import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FacultyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@college.edu',
    department: 'Computer Science',
    designation: 'Associate Professor',
    employeeId: 'EMP001',
    phone: '+1 (555) 123-4567',
    office: 'Room 105, CS Building',
    officeHours: 'Mon, Wed: 2:00 PM - 4:00 PM',
    qualifications: 'Ph.D. in Computer Science, MIT',
    experience: '12 years',
    researchInterests: 'Machine Learning, AI, Data Mining',
    publications: 45,
    conferences: 28,
    hIndex: 12
  });

  const handleInputChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the changes
  };

  return (
    <>
      <Helmet>
        <title>My Profile - Faculty Portal</title>
        <meta name="description" content="View and manage your faculty profile information." />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your faculty profile and contact information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      disabled={!isEditing}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      disabled={!isEditing}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profile.phone}
                      disabled={!isEditing}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="office">Office Location</Label>
                    <Input
                      id="office"
                      value={profile.office}
                      disabled={!isEditing}
                      onChange={(e) => handleInputChange('office', e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="officeHours">Office Hours</Label>
                  <Input
                    id="officeHours"
                    value={profile.officeHours}
                    disabled={!isEditing}
                    onChange={(e) => handleInputChange('officeHours', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
                <CardDescription>Your academic details and qualifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Input
                      id="department"
                      value={profile.department}
                      disabled={!isEditing}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                      id="designation"
                      value={profile.designation}
                      disabled={!isEditing}
                      onChange={(e) => handleInputChange('designation', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <Input
                      id="employeeId"
                      value={profile.employeeId}
                      disabled={!isEditing}
                      onChange={(e) => handleInputChange('employeeId', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="qualifications">Qualifications</Label>
                    <Input
                      id="qualifications"
                      value={profile.qualifications}
                      disabled={!isEditing}
                      onChange={(e) => handleInputChange('qualifications', e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="researchInterests">Research Interests</Label>
                  <Input
                    id="researchInterests"
                    value={profile.researchInterests}
                    disabled={!isEditing}
                    onChange={(e) => handleInputChange('researchInterests', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{profile.name}</h3>
                  <p className="text-gray-600">{profile.designation}</p>
                  <p className="text-sm text-gray-500">{profile.department}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium">{profile.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Publications</span>
                    <span className="font-medium">{profile.publications}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conferences</span>
                    <span className="font-medium">{profile.conferences}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">h-Index</span>
                    <span className="font-medium">{profile.hIndex}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {isEditing ? (
                  <>
                    <Button onClick={handleSave} className="w-full">
                      Save Changes
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                      className="w-full"
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={() => setIsEditing(true)}
                    className="w-full"
                  >
                    Edit Profile
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyProfile;
