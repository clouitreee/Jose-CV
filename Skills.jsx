import React from 'react';
import { Shield, Eye, Code, Server, Network, FileText, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Blue Team / Forensics',
      icon: Shield,
      color: 'text-primary',
      skills: [
        'Wireshark - Network Protocol Analysis',
        'tcpdump - Command-line Packet Analyzer',
        'VirusTotal - Malware Detection',
        'OWASP Top 10 - Web Application Security'
      ]
    },
    {
      title: 'SIEM & Monitoring',
      icon: Eye,
      color: 'text-secondary',
      skills: [
        'Splunk (Grundlagen) - Log Analysis',
        'Security Event Correlation',
        'Incident Detection & Response',
        'Log Management & Analysis'
      ]
    },
    {
      title: 'Automation & Scripting',
      icon: Code,
      color: 'text-primary',
      skills: [
        'Python - Security Automation',
        'Bash Scripting - System Administration',
        'Process Automation',
        'AI-driven Workflows'
      ]
    },
    {
      title: 'Systems & Platforms',
      icon: Server,
      color: 'text-secondary',
      skills: [
        'Windows 10/11 - Advanced Administration',
        'Linux (Grundkenntnisse) - Security Hardening',
        'VMware & Hyper-V - Virtualization',
        'Microsoft 365 - Cloud Security'
      ]
    },
    {
      title: 'Networks & Security',
      icon: Network,
      color: 'text-primary',
      skills: [
        'TCP/IP - Protocol Analysis',
        'LAN/WAN - Network Architecture',
        'Firewalls (Grundkenntnisse)',
        'Network Security Assessment'
      ]
    },
    {
      title: 'IT Support & Processes',
      icon: FileText,
      color: 'text-secondary',
      skills: [
        '2nd/3rd Level Support',
        'Troubleshooting & Problem Solving',
        'ServiceNow & ITSM',
        'Lifecycle Management'
      ]
    },
    {
      title: 'Documentation & Training',
      icon: Users,
      color: 'text-primary',
      skills: [
        'Technical Documentation',
        'End-user Training',
        'Customer Communication',
        'Knowledge Transfer'
      ]
    },
    {
      title: 'Soft Skills',
      icon: Zap,
      color: 'text-secondary',
      skills: [
        'Analytical Thinking',
        'Self-organization',
        'Team Collaboration',
        'Intercultural Competence'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set bridging IT Support expertise with modern cybersecurity practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-background ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="group-hover:text-foreground transition-colors duration-300">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: 'IT Support & Troubleshooting', level: 90 },
              { skill: 'Network Security', level: 75 },
              { skill: 'Python Automation', level: 70 },
              { skill: 'SIEM Tools (Splunk)', level: 65 },
              { skill: 'Incident Response', level: 60 },
              { skill: 'Forensic Analysis', level: 55 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

