
import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container px-4 py-12 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Information</h1>
        
        <div className="max-w-lg mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="text-blue-400" />
                GitHub Profile
              </CardTitle>
              <CardDescription>Check out my projects and contributions</CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="https://github.com/bennyindriyanto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-2"
              >
                GitHub: bennyindriyanto
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Linkedin className="text-blue-400" />
                LinkedIn Profile
              </CardTitle>
              <CardDescription>Connect with me professionally</CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="https://www.linkedin.com/in/benny-indriyanto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-2"
              >
                LinkedIn: Benny Indriyanto
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="text-blue-400" />
                Email Contact
              </CardTitle>
              <CardDescription>Reach out via email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-400">benny.indriyanto@ibm.com</p>
              
              <Button 
                variant="default" 
                onClick={() => window.location.href = 'mailto:benny.indriyanto@ibm.com'}
                className="w-full flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
