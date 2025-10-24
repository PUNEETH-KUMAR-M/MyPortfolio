'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skills = [
    'Spring Boot', 'REST APIs', 'Microservices', 'AWS', 'Docker',
    'Kubernetes', 'CI/CD', 'PostgreSQL', 'MongoDB', 'Python',
    'Java', 'DevOps', 'Linux', 'Jenkins', 'Prometheus'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column - Image and Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/pkm.jpeg" 
                    alt="Puneeth Kumar M" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="text-lg sm:text-xl lg:text-2xl">🚀</span>
              </div>
            </div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <a href="mailto:kpuneeth664@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    kpuneeth664@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-gray-300">Bangalore, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-gray-300">Available for opportunities</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <motion.a
                  href="https://github.com/PUNEETH-KUMAR-M"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-lg hover:bg-blue-500/20 transition-colors"
                >
                  <Github size={24} className="text-gray-300 hover:text-white" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/puneeth-kumar-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-lg hover:bg-blue-500/20 transition-colors"
                >
                  <Linkedin size={24} className="text-gray-300 hover:text-white" />
                </motion.a>
                <motion.a
                  href="mailto:kpuneeth664@gmail.com"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-lg hover:bg-blue-500/20 transition-colors"
                >
                  <Mail size={24} className="text-gray-300 hover:text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Text and Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
              >
                About Me
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed mb-6"
              >
                Motivated Backend & Cloud Engineer skilled in Spring Boot, REST APIs, Docker, and AWS. 
                Passionate about DevOps and AI integration to build scalable, production-ready systems.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed mb-8"
              >
                I'm actively gaining hands-on experience in designing and implementing backend architectures through real-world projects.
                I'm learning to build scalable systems that prioritize performance and availability. My current focus includes exploring cloud platforms, containerization tools like Docker, and adopting modern DevOps practices to streamline development and deployment workflows.
              </motion.p>
            </div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-400">Availability</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
