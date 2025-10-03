import React from 'react'
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Code, Zap, Eye } from 'lucide-react'

const Hero = ({ setCurrentPage }) => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-32">
      {/* Advanced Animated Background */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 animate-fade-in">
          {/* Enhanced Profile Image */}
          <div className="relative mx-auto w-80 h-80 mb-12">
            {/* Multiple Glow Layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-full animate-glow blur-xl opacity-75"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-accent-500 via-primary-500 to-blue-500 rounded-full animate-pulse opacity-50"></div>
            
            {/* Rotating Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-400/50 animate-spin-slow"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full h-full bg-slate-800 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src="/profile.jpg" 
                alt="Junaid Mollah" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-primary-400 via-accent-400 to-purple-500 flex items-center justify-center text-8xl font-bold text-white" style={{display: 'flex'}}>
                <span className="animate-pulse">JM</span>
              </div>
            </div>

          </div>

          {/* Enhanced Main Heading */}
          <div className="space-y-8">
            {/* Name with Advanced Effects */}
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-black animate-slide-up relative z-10">
                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-2xl">
                  Junaid Mollah
                </span>
              </h1>
              {/* Text Shadow Effect */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-primary-500/20 blur-sm animate-pulse">
                Junaid Mollah
              </div>
            </div>
            
            {/* Enhanced Tagline */}
            <div className="relative">
              <div className="text-3xl md:text-5xl font-bold text-slate-200 flex items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
                <Sparkles className="w-8 h-8 text-accent-400 animate-spin" />
                <span className="bg-gradient-to-r from-accent-400 via-primary-400 to-blue-400 bg-clip-text text-transparent">
                  Blockchain Developer
                </span>
                <Code className="w-8 h-8 text-primary-400 animate-pulse" />
              </div>
              
              {/* Decorative Line */}
            </div>

            {/* Enhanced Description */}
            <div className="relative glass p-8 rounded-3xl border border-white/10 backdrop-blur-xl animate-slide-up max-w-5xl mx-auto" style={{animationDelay: '0.5s'}}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                Hi, I'm <span className="gradient-text font-bold">Junaid Mollah</span>, a <span className="text-emerald-400 font-semibold">Blockchain Developer</span> currently pursuing B.Tech in Computer Science Engineering. I have hands-on experience in building <span className="text-cyan-400 font-semibold">decentralized applications (dApps)</span>, designing <span className="text-emerald-400 font-semibold">Ethereum smart contracts using Solidity</span>, and implementing DAO systems. Alongside blockchain, I am skilled in <span className="text-blue-400 font-semibold">full-stack web development with React.js, Node.js, and Express.js</span>. I have actively participated in multiple hackathons and worked on impactful projects that showcase my ability to develop innovative and secure blockchain-based solutions.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-16" style={{animationDelay: '0.7s'}}>
            <button 
              onClick={() => setCurrentPage('projects')}
              className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative flex items-center space-x-3">
                <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                <span>View My Work</span>
                <ChevronDown className="w-6 h-6 group-hover:translate-y-2 group-hover:animate-bounce transition-all duration-300" />
              </span>
            </button>
            <button 
              onClick={() => window.open('https://drive.google.com/drive/folders/1PDaWCo8aNnuvS58Yi-mWW8d6fDJPIn74?usp=sharing', '_blank')}
              className="group relative px-8 py-4 glass rounded-2xl font-bold text-white border-2 border-white/30 hover:border-primary-400/80 backdrop-blur-xl hover:bg-gradient-to-r hover:from-primary-500/20 hover:via-accent-500/20 hover:to-purple-500/20 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden active:bg-gradient-to-r active:from-primary-500 active:via-accent-500 active:to-purple-500 active:border-accent-400 active:shadow-2xl active:shadow-primary-500/50"
            >
              {/* Colorful Click Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 opacity-0 group-hover:opacity-30 group-active:opacity-100 transition-all duration-300 blur-sm"></div>
              
              {/* Rainbow Ripple Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 opacity-0 group-active:opacity-50 rounded-2xl transition-all duration-500 animate-pulse"></div>
              
              <span className="relative flex items-center space-x-3 group-active:text-white group-active:drop-shadow-lg">
                <Eye className="w-6 h-6 group-hover:animate-bounce group-active:animate-spin group-active:text-yellow-300 transition-all duration-300" />
                <span className="group-active:bg-gradient-to-r group-active:from-yellow-300 group-active:via-pink-300 group-active:to-purple-300 group-active:bg-clip-text group-active:text-transparent transition-all duration-300">View Resume</span>
              </span>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 animate-slide-up mt-4 mb-32" style={{animationDelay: '0.9s'}}>
            {[
              { icon: Github, href: 'https://github.com/JunaidCD', label: 'GitHub', color: 'hover:bg-gray-600', isExternal: true },
              { icon: Linkedin, href: 'https://linkedin.com/in/junaid-mollah-a59150319', label: 'LinkedIn', color: 'hover:bg-blue-600', isExternal: true },
              { icon: Mail, href: '#contact', label: 'Email', color: 'hover:bg-red-600', isExternal: false, page: 'contact' }
            ].map((social, index) => (
              social.isExternal ? (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 glass rounded-2xl border border-white/20 hover:border-white/50 transition-all duration-500 transform hover:scale-125 hover:-translate-y-3 ${social.color} hover:shadow-2xl`}
                  aria-label={social.label}
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  
                  <social.icon className="relative w-7 h-7 text-slate-300 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.label}
                  </div>
                </a>
              ) : (
                <button
                  key={social.label}
                  onClick={() => setCurrentPage(social.page)}
                  className={`group relative p-4 glass rounded-2xl border border-white/20 hover:border-white/50 transition-all duration-500 transform hover:scale-125 hover:-translate-y-3 ${social.color} hover:shadow-2xl`}
                  aria-label={social.label}
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  
                  <social.icon className="relative w-7 h-7 text-slate-300 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                  
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.label}
                  </div>
                </button>
              )
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
