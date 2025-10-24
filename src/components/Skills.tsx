'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  Monitor, 
  Terminal,
  GitBranch,
  Shield,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Python', 'Java', 'C++', 'SQL']
    },
    {
      title: 'Backend Development',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      skills: ['Spring Boot', 'REST APIs', 'Postman', 'GitHub Actions']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: ['AWS', 'Docker', 'Jenkins', 'Kubernetes', 'CI/CD', 'Linux', 'Prometheus', 'Grafana']
    },
    {
      title: 'Automation & Tools',
      icon: Terminal,
      color: 'from-teal-500 to-blue-500',
      skills: ['Shell Scripting', 'IntelliJ IDEA', 'Visual Studio Code']
    }
  ];

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

  const SkillTag = ({ skill, index }: { skill: string; index: number }) => (
    <motion.span
      key={skill}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-2 glass rounded-lg text-sm text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300 cursor-default"
    >
      {skill}
    </motion.span>
  );

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Tools</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build scalable solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag 
                    key={skill} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
