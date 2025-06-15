import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, BookOpen, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Certifications = () => {
  const mainCertification = {
    title: 'Google Cybersecurity Certificate',
    provider: 'Google via Coursera',
    period: '2024 – 2025',
    location: 'Deutschland',
    verificationUrl: 'https://coursera.org/verify/professional-cert/PVBNRE8CG5N9',
    status: 'Completed',
    topics: [
      'Network Security & Architecture',
      'Threat Detection & Response',
      'Linux Command Line & System Administration',
      'SQL for Security Analysis',
      'SIEM Tools & Log Analysis',
      'Vulnerability Assessment & Management',
      'Python Automation for Security',
      'Incident Response Procedures'
    ],
    skills: [
      'Security Information and Event Management (SIEM)',
      'Network Protocol Analysis',
      'Threat Intelligence',
      'Risk Assessment',
      'Digital Forensics Fundamentals',
      'Security Compliance'
    ]
  };

  const additionalTraining = [
    {
      title: 'Wireshark Network Analysis',
      description: 'Hands-on experience with network packet analysis and protocol investigation',
      status: 'Completed',
      icon: Target
    },
    {
      title: 'OWASP Top 10 Security Risks',
      description: 'Understanding of web application security vulnerabilities and mitigation strategies',
      status: 'Completed',
      icon: CheckCircle
    },
    {
      title: 'MITRE ATT&CK Framework',
      description: 'Knowledge of adversary tactics, techniques, and procedures for threat hunting',
      status: 'In Progress',
      icon: BookOpen
    },
    {
      title: 'TryHackMe SOC Level 1',
      description: 'Practical blue team challenges and security operations center training',
      status: 'In Progress',
      icon: Target
    }
  ];

  const futureCertifications = [
    'CompTIA Security+',
    'CompTIA CySA+',
    'SANS GIAC Security Essentials (GSEC)',
    'Certified Ethical Hacker (CEH)',
    'Splunk Core Certified User'
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications & Training</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in cybersecurity
          </p>
        </div>

        {/* Main Google Certification */}
        <div className="mb-16">
          <Card className="glow-effect border-primary/20">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-primary/20 rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gradient">
                      {mainCertification.title}
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">
                      {mainCertification.provider} • {mainCertification.period}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full font-medium">
                    {mainCertification.status}
                  </span>
                  <Button 
                    className="btn-primary"
                    onClick={() => window.open(mainCertification.verificationUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify Certificate
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Course Topics */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  Course Topics Covered
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {mainCertification.topics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Acquired */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Target className="mr-2 h-5 w-5 text-secondary" />
                  Key Skills Acquired
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mainCertification.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Training */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Training & Labs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalTraining.map((training, index) => {
              const IconComponent = training.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        training.status === 'Completed' ? 'bg-secondary/20' : 'bg-primary/20'
                      }`}>
                        <IconComponent className={`h-6 w-6 ${
                          training.status === 'Completed' ? 'text-secondary' : 'text-primary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{training.title}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            training.status === 'Completed' 
                              ? 'bg-secondary/20 text-secondary' 
                              : 'bg-primary/20 text-primary'
                          }`}>
                            {training.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{training.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Future Certifications */}
        <div>
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <Calendar className="mr-2 h-6 w-6 text-primary" />
                Planned Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Continuing professional development with industry-recognized certifications
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {futureCertifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Committed to continuous learning and staying current with cybersecurity best practices
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Learning Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

