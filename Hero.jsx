import React from 'react';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full"
        variants={floatingVariants}
        animate="animate"
      ></motion.div>
      <motion.div 
        className="absolute top-40 right-20 w-16 h-16 border border-secondary/30 rounded-lg"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 w-12 h-12 border border-primary/30 rounded-full"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      ></motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          {/* Main Heading */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Jose Carlos</span>
              <span className="block text-gradient">Martin Lache</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
              <span className="block">IT Support Specialist</span>
              <span className="block">transitioning to</span>
              <span className="block text-primary font-medium">Junior Cybersecurity Analyst</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-poppins"
            variants={itemVariants}
          >
            Bridging 5+ years of IT Support expertise with cutting-edge cybersecurity knowledge. 
            Google-certified and ready to defend your digital assets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="btn-primary px-8 py-3 text-lg font-medium group"
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 text-lg font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Contact Me
            </Button>
          </motion.div>

          {/* Skills Tags */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            variants={itemVariants}
          >
            {['SIEM', 'Wireshark', 'Python', 'Blue Team', 'Incident Response', 'Network Security'].map((skill, index) => (
              <motion.span 
                key={skill}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button 
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

