import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"


export function Login({ setUser }) {
    const { toast } = useToast();
    const [role, setRole] = useState("Student");

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = email.split('@')[0].replace(/\./g, ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
        
        toast({
            title: 'Login Successful!',
            description: `Welcome, ${name}! Redirecting to your dashboard...`,
        });

        setTimeout(() => {
            setUser({
                name: name,
                email: email,
                role: role,
            });
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="w-full max-w-sm">
                    <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-foreground">IT college Login</CardTitle>
                        <CardDescription>Select your role and sign in</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-6">
                             <RadioGroup defaultValue="Student" onValueChange={setRole} className="grid grid-cols-3 gap-4">
                                <div>
                                    <RadioGroupItem value="Student" id="student" className="peer sr-only" />
                                    <Label htmlFor="student" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                        Student
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="Faculty" id="faculty" className="peer sr-only" />
                                    <Label htmlFor="faculty" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                        Faculty
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="Admin" id="admin" className="peer sr-only" />
                                    <Label htmlFor="admin" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                        Admin
                                    </Label>
                                </div>
                            </RadioGroup>
                            <div className="space-y-2">
                                <Input 
                                    id="email"
                                    type="email" 
                                    placeholder="your.name@college.edu" 
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Input 
                                    type="password" 
                                    placeholder="Password"
                                    defaultValue="password"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Login as {role}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}