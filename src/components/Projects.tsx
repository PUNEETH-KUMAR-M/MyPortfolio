'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

const Projects = () => {

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'TaskMate',
      description: 'Smart Task Manager with JWT Authentication, real-time updates, and AI-powered task prioritization.',
      techStack: ['Java','Spring Boot','JWT', 'MYSQL', 'Docker', 'RESTAPI'],
      githubUrl: 'https://github.com/PUNEETH-KUMAR-M/taskmate',
      liveUrl: 'https://taskmate-1-kryj.onrender.com/',
      image: '/project1.png',
      featured: true,
    },
    {
      id: 2,
      title: 'Enterprise Knowledge Assistant',
      description: 'RAG-based AI Q&A System for enterprise knowledge management with vector search capabilities.',
      techStack: ['Java','Spring Boot','RAG','RESTAPI', 'OpenAI', 'Pgvector', 'Docker','AWS'],
      githubUrl: 'https://github.com/PUNEETH-KUMAR-M/Enterprise-Knowledge-Assistant',
      liveUrl: 'https://13-232-49-201.sslip.io/index.html',
      image: '/project2.png',
      featured: true,
    },
    {
      id: 3,
      title: 'Raspberry Pi Private Cloud',
      description: 'Personal cloud hosting solution with Docker, automated backups, and remote access capabilities.',
      techStack: ['Problem Solving', 'Docker', 'Nginx', 'Raspberry Pi', 'Linux', 'Shell Scripting'],
      githubUrl: 'https://github.com/PUNEETH-KUMAR-M/Private_cloud_project',
      image: '/project3.png',
      featured: true,
    },
  ];


  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, featuring both personal projects and contributions to open source.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl font-bold gradient-text opacity-50">
                      {project.title.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h4>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 glass rounded-lg hover:bg-blue-500/20 transition-colors"
                      >
                        <Github size={18} className="text-gray-400 hover:text-white" />
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 glass rounded-lg hover:bg-blue-500/20 transition-colors"
                        >
                          <ExternalLink size={18} className="text-gray-400 hover:text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary text-center text-sm"
                    >
                      View Code
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 btn-secondary text-center text-sm"
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;