
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Database, Server, RefreshCw } from 'lucide-react';
import PixelArt from '../ui/PixelArt';

const securityInfo = [
  {
    title: 'Cross-Site Scripting (XSS)',
    icon: <Shield className="h-10 w-10 text-red-400" />,
    description: 'Prevents attackers from injecting malicious scripts into web pages viewed by users. Implementation includes input validation, content security policies, and output encoding.'
  },
  {
    title: 'SQL Injection',
    icon: <Database className="h-10 w-10 text-blue-400" />,
    description: 'Protects databases from attacks where malicious SQL statements are inserted into entry fields. Uses prepared statements, parameterized queries, and ORM frameworks to sanitize inputs.'
  },
  {
    title: 'Distributed Denial of Service (DDoS)',
    icon: <Server className="h-10 w-10 text-purple-400" />,
    description: 'Safeguards against attacks that flood servers with traffic to disrupt services. Employs rate limiting, traffic filtering, and cloud-based protection services to maintain availability.'
  },
  {
    title: 'Cross-Site Request Forgery (CSRF)',
    icon: <RefreshCw className="h-10 w-10 text-green-400" />,
    description: 'Prevents attackers from forcing users to execute unwanted actions on authenticated web applications. Implements anti-CSRF tokens, SameSite cookies, and referrer checking.'
  }
];

const Security = () => {
  return (
    <section id="security" className="container px-4 mx-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title flex items-center gap-2">
          <PixelArt type="cursor" size="sm" />
          Security Measures
        </h2>
        <h3 className="text-3xl font-bold mb-10">Protection Against Common Vulnerabilities</h3>
        
        <div className="grid gap-6 md:grid-cols-2">
          {securityInfo.map((item, index) => (
            <Card key={index} className="glass hover:shadow-blue-400/10 transition-all hover:-translate-y-1 border-white/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {item.icon}
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
