import React from 'react';
import { Shield, Award, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border border-border">
                  <Shield className="h-24 w-24 text-primary" />
                </div>
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                ></motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* About Content */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  IT-Support Specialist with over 5 years of experience in 2nd/3rd level support, 
                  currently working at <span className="text-primary font-medium">Mercedes-Benz AG</span> (via Computacenter). 
                  Solid knowledge in Microsoft technologies, network infrastructure, and hardware.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Residing in Germany since 2019. Successfully completed the 
                  <span className="text-secondary font-medium"> Google Cybersecurity Certificate</span> (Coursera) 
                  with a focus on network security, threat detection, and Python automation.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">Career Goal:</span> Entry into the Cybersecurity industry. 
                  Customer-oriented, solution-oriented, and tech-savvy professional ready to make the transition 
                  from IT Support to Security Operations.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Award, title: "5+ Years", subtitle: "IT Support Experience", color: "text-primary" },
                  { icon: Shield, title: "Certified", subtitle: "Google Cybersecurity", color: "text-secondary" },
                  { icon: Target, title: "Blue Team", subtitle: "SOC Ready", color: "text-primary" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Card className="card-hover">
                        <CardContent className="p-6 text-center">
                          <IconComponent className={`h-8 w-8 ${item.color} mx-auto mb-3`} />
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Google Certificate Link */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="https://coursera.org/verify/professional-cert/PVBNRE8CG5N9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Award className="mr-2 h-5 w-5" />
                  Verify Google Certificate
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;

