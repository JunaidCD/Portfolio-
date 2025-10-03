import React, { useState } from 'react'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Ayurherb 2.0 Supply Chain',
      description: 'Modern supply chain management system with role-based authentication, real-time tracking, and advanced analytics.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'DeFi Lending Platform',
      description: 'Decentralized lending platform with smart contracts, credit scoring, and automated loan management.',
      image: '/api/placeholder/600/400',
      category: 'blockchain',
      technologies: ['React', 'Solidity', 'Ethers.js', 'Web3'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'E-Commerce Dashboard',
      description: 'Comprehensive admin dashboard for e-commerce management with real-time analytics and inventory tracking.',
      image: '/api/placeholder/600/400',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Recharts', 'Ant Design'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, real-time updates, and team collaboration features.',
      image: '/api/placeholder/600/400',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Weather App PWA',
      description: 'Progressive web app for weather forecasting with offline support and location-based services.',
      image: '/api/placeholder/600/400',
      category: 'frontend',
      technologies: ['React', 'PWA', 'Service Workers', 'Weather API'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, file sharing, and message encryption.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: '#',
      live: '#',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'blockchain', name: 'Blockchain' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const ProjectCard = ({ project, index }) => (
    <div 
      className="group glass rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 floating-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20 h-48">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-white/20">
            {project.title.charAt(0)}
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.github}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href={project.live}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
          >
            <ExternalLink className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={project.github}
            className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 glass glass-hover rounded-lg border border-white/20 text-slate-300 hover:text-white transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
          <a
            href={project.live}
            className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            <Eye className="w-4 h-4" />
            <span>Live</span>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'glass glass-hover text-slate-300 hover:text-white border border-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 glass glass-hover rounded-full font-semibold text-white border border-white/20 hover:border-white/40 transition-all duration-300">
            <span className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
