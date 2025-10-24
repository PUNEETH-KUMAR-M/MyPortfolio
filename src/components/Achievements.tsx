'use client';

import { motion } from 'framer-motion';
import { 
  Trophy, 
  Rocket, 
  Cloud, 
  Award, 
  Target, 
  Zap,
  Users,
  Code,
  Database,
  Shield,
  Settings
} from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Hack Hive Winner',
      description: 'AI-powered healthcare platform developed in 20 hours',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      date: '2024',
      category: 'Hackathon',
      details: [
        'Built AI-powered healthcare platform',
        'Integrated machine learning models',
        'Deployed on AWS with basic CI/CD',
        'Won against 20+ competing teams'
      ]
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Deployment',
      description: 'Automated deployment using Jenkins & GitHub Actions',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      date: '2024',
      category: 'DevOps',
      details: [
        'Set up automated deployment pipeline',
        'Implemented basic testing automation',
        'Configured monitoring systems',
        'Improved deployment efficiency'
      ]
    },
    {
      id: 3,
      title: 'AWS Full-Stack Deployment',
      description: 'Hosted complete application on AWS EC2, S3, VPC',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      date: '2024',
      category: 'Cloud',
      details: [
        'Set up cloud infrastructure on AWS',
        'Configured EC2, S3, and VPC services',
        'Implemented basic database setup',
        'Learned cloud deployment best practices'
      ]
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Target },
    { label: 'Hackathons Participated', value: '5+', icon: Code },
    { label: 'Team Members Collaborated', value: '8+', icon: Users },
    { label: 'Technologies Learned', value: '15+', icon: Zap },
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

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Achievements</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Key milestones and accomplishments that showcase my expertise and impact.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 card-hover group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{achievement.date}</div>
                    <div className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                      {achievement.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {achievement.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-2 text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Complete Data Structures & Algorithms Course',
                provider: 'Python Programming',
                icon: Code,
                color: 'from-blue-500 to-cyan-500',
                url: 'https://drive.google.com/file/d/1nAegmLa8usOGdgWEmzNY2jZRYbnJRNqH/view?usp=drivesdk' // Replace with actual URL
              },
              {
                title: 'Master Java, Spring Boot & Spring Security',
                provider: 'Telusko',
                icon: Settings,
                color: 'from-green-500 to-emerald-500',
                url: 'https://drive.google.com/file/d/1o6QWNyp1IzL7RBxsqlEjQQVv6piDjvri/view?usp=drivesdk' // Replace with actual URL
              },
              {
                title: 'Problem Solving Certificate',
                provider: 'HackerRank',
                icon: Trophy,
                color: 'from-purple-500 to-pink-500',
                url: 'https://www.hackerrank.com/certificates/iframe/4e2afdbefd4f' // Replace with actual URL
              }
            ].map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 text-center card-hover block"
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center`}>
                  <cert.icon size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm group-hover:gradient-text transition-all duration-300">{cert.title}</h4>
                <p className="text-gray-400 text-xs">{cert.provider}</p>
                <div className="mt-3 text-blue-400 text-xs font-medium">
                  View Certificate →
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
