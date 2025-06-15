import React from 'react';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      company: 'Deutsche Technikberatung GmbH',
      position: 'IT-Consultant (Minijob)',
      location: 'Köln',
      period: '02/2024 – Present',
      current: true,
      responsibilities: [
        'Technical consultation and support for private clients on-site and remote',
        'Installation and configuration of IT and Smart-Home devices',
        'End-user training and technical troubleshooting',
        'Customer relationship management and service delivery'
      ],
      skills: ['Customer Service', 'Technical Support', 'Smart Home', 'Training']
    },
    {
      company: 'Computacenter AG & Co. OHG',
      position: 'IT Specialist / 2nd-3rd Level Support',
      location: 'Project: Mercedes-Benz Group AG',
      period: '04/2022 – Present',
      current: true,
      responsibilities: [
        'IT support for hardware, software, network, and conference technology',
        'Problem resolution via phone and on-site in Microsoft environments',
        'Configuration and replacement of IT components including lifecycle management',
        'Server hardware installation and basic configuration in data center (BIOS, cabling)',
        'User training and documentation in ticketing systems'
      ],
      skills: ['Microsoft 365', 'Hardware Support', 'Network Administration', 'ServiceNow', 'Data Center Operations']
    },
    {
      company: 'Prox-Systems Germany GmbH',
      position: 'IT Technician',
      location: 'Germany',
      period: '08/2020 – 02/2022',
      current: false,
      responsibilities: [
        'Configuration of networks and POS systems',
        'Technical support and on-site repairs',
        'Hardware and software maintenance and updates',
        'System optimization and performance monitoring'
      ],
      skills: ['Network Configuration', 'POS Systems', 'Hardware Repair', 'System Maintenance']
    },
    {
      company: 'Language Course & Hospitality',
      position: 'Language Integration & Hospitality Work',
      location: 'Köln',
      period: '06/2019 – 05/2020',
      current: false,
      responsibilities: [
        'Participated in intensive German language course for professional integration',
        'Practical experience in customer service, teamwork, and stress management',
        'Cultural adaptation and communication skills development',
        'Multitasking in fast-paced hospitality environment'
      ],
      skills: ['German Language (C1)', 'Customer Service', 'Cultural Adaptation', 'Stress Management']
    },
    {
      company: 'Freelance IT Technician',
      position: 'Independent IT Consultant',
      location: 'Cuba',
      period: '01/2012 – 11/2018',
      current: false,
      responsibilities: [
        'Repair and maintenance of mobile phones and computers',
        'Operating system, software, and application installations',
        'Customer consultation and technical support in private environments',
        'Conducted small-scale training sessions for digital device usage'
      ],
      skills: ['Hardware Repair', 'Software Installation', 'Customer Training', 'Technical Consultation']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            5+ years of progressive IT support experience, building a strong foundation for cybersecurity roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <Card className={`ml-0 md:ml-16 card-hover ${exp.current ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                          {exp.current && (
                            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-2">{exp.position}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start text-sm text-muted-foreground">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="font-semibold mb-3 text-foreground">Technologies & Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-background border border-border text-muted-foreground text-xs rounded-full font-medium hover:border-primary transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Career Transition Highlight */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Career Transition Journey</h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                My extensive IT support background provides a solid foundation for cybersecurity roles. 
                The troubleshooting skills, system knowledge, and customer communication experience 
                directly translate to SOC analyst responsibilities, incident response, and security operations.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years IT Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Google Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Ready</div>
                  <div className="text-sm text-muted-foreground">For SOC Role</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

