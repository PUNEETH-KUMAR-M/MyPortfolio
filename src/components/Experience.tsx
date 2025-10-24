'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Project Lead',
      company: 'College Projects',
      period: '2023 – Present',
      location: 'Bangalore, India',
      description: 'Led multiple full-stack projects during college, focusing on web development and cloud deployment.',
      achievements: [
        'Developed e-commerce platform for college project',
        'Implemented basic CI/CD using GitHub Actions',
        'Learned full-stack development with Spring Boot and React',
        'Gained hands-on experience with AWS services'
      ],
      techStack: ['Spring Boot', 'React', 'AWS', 'Docker', 'PostgreSQL', 'JavaScript'],
      type: 'current'
    },
    {
      id: 2,
      title: 'Hackathon Participant',
      company: 'Various Hackathons',
      period: '2024 – Present',
      location: 'Remote',
      description: 'Participated in multiple hackathons focusing on AI, web development, and cloud technologies.',
      achievements: [
        'Won 1st place in Hack Hive with AI-powered healthcare platform',
        'Participated in 5+ hackathon events',
        'Collaborated with diverse teams on rapid prototyping',
        'Built working prototypes in 20-48 hour timeframes'
      ],
      techStack: ['Python', 'FastAPI', 'React', 'AWS', 'Docker', 'Machine Learning'],
      type: 'current'
    },
    {
      id: 3,
      title: 'Student Developer',
      company: 'Personal Projects',
      period: '2023 – 2024',
      location: 'Remote',
      description: 'Developed personal projects and learning exercises focusing on backend development and APIs.',
      achievements: [
        'Built 10+ REST APIs with Spring Boot',
        'Implemented JWT authentication in projects',
        'Designed database schemas for learning projects',
        'Deployed applications on AWS for practice'
      ],
      techStack: ['Spring Boot', 'Java', 'PostgreSQL', 'AWS', 'Docker', 'JWT'],
      type: 'past'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'current':
        return <Award className="text-green-400" size={24} />;
      case 'past':
        return <Calendar className="text-blue-400" size={24} />;
      default:
        return <Users className="text-purple-400" size={24} />;
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My professional journey in backend development and cloud engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center">
                    {getIcon(exp.type)}
                  </div>
                  {exp.type === 'current' && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 glass rounded-2xl p-8 card-hover"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl font-semibold gradient-text mb-2">{exp.company}</h4>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    {exp.type === 'current' && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mt-4 md:mt-0"
                      >
                        Current
                      </motion.span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full hover:bg-blue-500/30 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
