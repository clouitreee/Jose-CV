import React from 'react';
import { ExternalLink, Github, Play, Database, Code, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Mini-SIEM Implementation',
      subtitle: 'ELK Stack + Wazuh Integration',
      description: 'Designed and implemented a home-lab SIEM solution using Elasticsearch, Logstash, Kibana, and Wazuh for comprehensive security monitoring and threat detection.',
      technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Wazuh', 'Docker', 'Linux'],
      status: 'Conceptual Project',
      icon: Database,
      color: 'text-primary',
      features: [
        'Real-time log ingestion and parsing',
        'Custom dashboards for security metrics',
        'Automated alert generation',
        'Integration with threat intelligence feeds'
      ]
    },
    {
      title: 'Security Log Parser',
      subtitle: 'Python Automation Script',
      description: 'Developed a Python script for automated parsing and analysis of security logs, featuring pattern recognition for common attack vectors and automated reporting.',
      technologies: ['Python', 'Pandas', 'Regex', 'JSON', 'CSV'],
      status: 'Conceptual Project',
      icon: Code,
      color: 'text-secondary',
      features: [
        'Multi-format log parsing (Apache, IIS, Syslog)',
        'Threat pattern recognition',
        'Automated report generation',
        'Statistical analysis and visualization'
      ]
    },
    {
      title: 'TryHackMe SOC Level 1',
      subtitle: 'Blue Team Challenges',
      description: 'Actively completing SOC Level 1 challenges on TryHackMe platform, focusing on incident response, digital forensics, and threat hunting methodologies.',
      technologies: ['Wireshark', 'Volatility', 'YARA', 'Splunk', 'OSINT'],
      status: 'In Progress',
      icon: Shield,
      color: 'text-primary',
      features: [
        'Network traffic analysis',
        'Memory forensics investigation',
        'Malware analysis techniques',
        'Incident response procedures'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Practical cybersecurity projects demonstrating hands-on experience with industry-standard tools and methodologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title} 
                className="card-hover group h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg bg-background ${project.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'In Progress' 
                        ? 'bg-secondary/20 text-secondary' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.status === 'In Progress' ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={() => window.open('https://tryhackme.com/path/outline/soclevel1', '_blank')}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        View Progress
                      </Button>
                    ) : (
                      <>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          disabled
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code (Soon)
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          disabled
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo (Soon)
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm continuously working on new cybersecurity projects and expanding my practical experience. 
              Follow my journey as I build more tools and complete additional challenges.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.open('https://github.com/jcmartin-lache', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              Follow on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

