import React, { useState } from 'react'
import { Play, Github, Sparkles, Star, Code, Zap, Shield, Globe } from 'lucide-react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [activeSection, setActiveSection] = useState('main')

  const projects = [
    {
      title: 'Credence – Decentralized Identity & Credential Verification System',
      description: 'Developed a full-stack DApp for issuing, managing, and verifying digital credentials using Ethereum smart contracts. Implemented role-based access control (Users, Issuers, Verifiers) with real-time notifications. Deployed contracts locally with Hardhat and integrated frontend/backend through REST APIs.',
      techStack: ['React.js', 'Express.js', 'Solidity', 'Ethers.js', 'Web3.js', 'Hardhat', 'MetaMask'],
      color: 'from-purple-500 to-indigo-600',
      glowColor: 'shadow-purple-500/50',
      icon: Shield,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'FinBridge – Decentralized Peer-to-Peer Lending Platform',
      description: 'Built a decentralized lending platform enabling direct borrower-lender transactions without intermediaries. Implemented auto-calculated interest rates, real-time loan matching, and analytics dashboards. Secured all transactions with audited smart contracts and blockchain event logging.',
      techStack: ['React.js', 'Solidity', 'Hardhat', 'Ethers.js', 'MetaMask'],
      color: 'from-green-500 to-emerald-500',
      glowColor: 'shadow-green-500/50',
      icon: Zap,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Dappazon – Decentralized E-Commerce Platform',
      description: 'Created a Web3-based e-commerce platform where users can purchase products using Ethereum. Developed smart contracts for product listing, purchasing, and payment processing. Integrated MetaMask for wallet authentication and ensured trustless, transparent transactions.',
      techStack: ['React.js', 'Solidity', 'Hardhat', 'Ethers.js', 'MetaMask'],
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'shadow-blue-500/50',
      icon: Globe,
      demoUrl: '#',
      codeUrl: '#'
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced Background Effects - Same as Home Page */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent-500/20 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-8xl font-black animate-slide-up relative z-10">
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>
            {/* Text Shadow */}
            <div className="absolute inset-0 text-6xl md:text-8xl font-black text-primary-500/20 blur-sm animate-pulse">
              My Projects
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <Sparkles className="w-8 h-8 text-accent-400 animate-spin" />
            <p className="text-2xl md:text-3xl text-slate-300 font-semibold">
              Blockchain & Web3 Innovations
            </p>
            <Star className="w-8 h-8 text-primary-400 animate-pulse" />
          </div>
          
          {/* Decorative Line */}
          <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
        </div>

        {/* Project Category Toggle */}
        <div className="flex justify-center mb-16">
          <div className="glass p-2 rounded-2xl border border-white/20 backdrop-blur-xl">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveSection('main')}
                className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                  activeSection === 'main'
                    ? 'bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 text-white shadow-2xl hover:shadow-primary-500/50'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Main Projects</span>
                </span>
                {activeSection === 'main' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-20 rounded-xl blur-lg"></div>
                )}
              </button>
              
              <button
                className="relative px-8 py-4 rounded-xl font-bold text-lg text-slate-400 cursor-not-allowed opacity-60"
                disabled
              >
                <span className="relative flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Hackathon Projects</span>
                </span>
                <div className="absolute top-1 right-1 text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded-full">
                  Coming Soon
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Main Projects Section */}
        {activeSection === 'main' && (
          <div className="mb-16">
            {/* Enhanced Main Projects Heading */}
            <div className="text-center mb-16">
              <div className="relative inline-block">
                <h3 className="text-5xl md:text-7xl font-black animate-slide-up relative z-10">
                  <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                    Main Projects
                  </span>
                </h3>
                {/* Text Shadow */}
                <div className="absolute inset-0 text-5xl md:text-7xl font-black text-orange-500/30 blur-sm animate-pulse">
                  Main Projects
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-accent-500 rounded-full animate-pulse"></div>
                <Star className="w-6 h-6 text-accent-400 animate-spin" />
                <p className="text-xl text-slate-300 font-semibold">
                  Featured Blockchain Solutions
                </p>
                <Sparkles className="w-6 h-6 text-primary-400 animate-pulse" />
                <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full animate-pulse"></div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="mt-8 relative">
                <div className="mx-auto w-48 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full animate-pulse"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-white/50 to-transparent rounded-full blur-sm animate-shimmer"></div>
              </div>
            </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative perspective-1000 animate-slide-up"
                style={{ animationDelay: `${index * 0.3}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* 3D Project Card Container */}
                <div className={`relative transform-gpu transition-all duration-700 hover:rotateY-6 hover:scale-105 hover:-translate-y-6 ${project.glowColor} hover:shadow-2xl`}>
                  {/* Main Project Card */}
                  <div className="relative glass rounded-[2rem] border border-white/20 overflow-hidden backdrop-blur-xl">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-15 transition-opacity duration-700`}></div>
                    
                    {/* Floating Orbs */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r ${project.color} rounded-full opacity-20 blur-2xl group-hover:scale-150 group-hover:opacity-30 transition-all duration-700`}></div>
                      <div className={`absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r ${project.color} rounded-full opacity-15 blur-xl group-hover:scale-125 group-hover:opacity-25 transition-all duration-700`}></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 p-10">
                      {/* Project Header */}
                      <div className="flex items-start space-x-6 mb-8">
                        <div className="relative">
                          <div className={`p-6 bg-gradient-to-br ${project.color} rounded-[1.5rem] shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <project.icon className="w-12 h-12 text-white drop-shadow-lg" />
                            {/* Icon Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-[1.5rem] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500`}></div>
                          </div>
                          {/* Floating Ring */}
                          <div className={`absolute inset-0 border-2 border-dashed opacity-30 rounded-[1.5rem] group-hover:scale-125 group-hover:rotate-180 transition-all duration-1000`} style={{borderColor: project.color.includes('purple') ? '#a855f7' : project.color.includes('green') ? '#10b981' : '#3b82f6'}}></div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-500 drop-shadow-lg mb-4">
                            {project.title}
                          </h4>
                          <div className={`h-1 bg-gradient-to-r ${project.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="mb-8">
                        <p className="text-xl text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-accent-400" />
                          Tech Stack:
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech, techIndex) => (
                            <div
                              key={tech}
                              className={`group/tech px-4 py-2 bg-gradient-to-r ${project.color} bg-opacity-10 rounded-[1rem] border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer`}
                              style={{ animationDelay: `${(index * 0.3) + (techIndex * 0.1)}s` }}
                            >
                              <span className="text-slate-200 font-medium group-hover/tech:text-white transition-colors duration-300">
                                {tech}
                              </span>
                              {/* Tech Glow Effect */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover/tech:opacity-20 rounded-[1rem] transition-opacity duration-300 blur-sm`}></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-[1.25rem] font-bold text-white shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex-1">
                          {/* Button Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl"></div>
                          
                          <span className="relative flex items-center justify-center space-x-3">
                            <Play className="w-6 h-6 group-hover/btn:scale-125 transition-transform duration-500" />
                            <span>Demo Video</span>
                          </span>
                        </button>
                        
                        <button className="group/btn relative px-8 py-4 glass rounded-[1.25rem] font-bold text-white border-2 border-white/30 hover:border-white/60 backdrop-blur-xl hover:bg-white/10 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex-1">
                          <span className="relative flex items-center justify-center space-x-3">
                            <Github className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span>Code</span>
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Card Border Glow */}
                    <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{
                      background: `linear-gradient(45deg, transparent 30%, ${project.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : project.color.includes('green') ? 'rgba(16, 185, 129, 0.3)' : 'rgba(59, 130, 246, 0.3)'} 50%, transparent 70%)`,
                      filter: 'blur(1px)'
                    }}></div>

                    {/* Holographic Effect */}
                    <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-700" style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                      transform: 'translateX(-100%)',
                      animation: hoveredProject === index ? 'shimmer 2s ease-in-out infinite' : 'none'
                    }}></div>
                  </div>

                  {/* 3D Shadow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 blur-2xl rounded-[2rem] transform translate-y-6 translate-x-3 -z-10 group-hover:translate-y-10 group-hover:translate-x-6 group-hover:opacity-40 transition-all duration-700`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default Projects
