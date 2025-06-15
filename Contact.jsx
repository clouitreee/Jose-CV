import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, Download } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'joselache103@gmail.com',
      href: 'mailto:joselache103@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/carlosmartin-it',
      href: 'https://linkedin.com/in/carlosmartin-it',
      color: 'text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/jcmartin-lache',
      href: 'https://github.com/jcmartin-lache',
      color: 'text-secondary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+49 179 2351921',
      href: 'tel:+491792351921',
      color: 'text-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Köln, Deutschland',
      href: null,
      color: 'text-secondary'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to contribute to your cybersecurity team. Let's discuss how my IT support background 
            and cybersecurity certification can add value to your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg bg-background ${contact.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{contact.label}</p>
                            {contact.href ? (
                              <a 
                                href={contact.href}
                                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{contact.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Button 
                  className="w-full btn-primary justify-start text-left h-auto p-4"
                  onClick={() => window.open('mailto:joselache103@gmail.com?subject=Cybersecurity Position Inquiry', '_blank')}
                >
                  <Send className="mr-3 h-5 w-5" />
                  <div>
                    <div className="font-medium">Send Email</div>
                    <div className="text-sm opacity-90">Quick inquiry about cybersecurity opportunities</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left h-auto p-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.open('/cv.pdf', '_blank')}
                >
                  <Download className="mr-3 h-5 w-5" />
                  <div>
                    <div className="font-medium">Download CV</div>
                    <div className="text-sm opacity-70">Complete resume with detailed experience</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready for Your Team</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Immediate Availability:</strong> Ready to start contributing 
                    to your cybersecurity operations team.
                  </p>
                  <p>
                    <strong className="text-foreground">Location:</strong> Based in Köln, Germany. 
                    Open to remote, hybrid, or on-site positions.
                  </p>
                  <p>
                    <strong className="text-foreground">Languages:</strong> Fluent in German (C1), English, 
                    and Spanish (native).
                  </p>
                  <p>
                    <strong className="text-foreground">Visa Status:</strong> Authorized to work in Germany.
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">What I Bring:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      5+ years of IT support experience with strong troubleshooting skills
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Google Cybersecurity Certificate with hands-on lab experience
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Strong foundation in network security and incident response
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Passion for automation and continuous learning
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Professional Networks */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Connect on Professional Networks</h4>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    onClick={() => window.open('https://linkedin.com/in/carlosmartin-it', '_blank')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    onClick={() => window.open('https://github.com/jcmartin-lache', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Jose Carlos Martin Lache. Built with React, Tailwind CSS, and passion for cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

