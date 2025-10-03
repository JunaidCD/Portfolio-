import React from 'react'
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Code, Zap } from 'lucide-react'

const Hero = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
              <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Description */}
            <div className="relative glass p-8 rounded-3xl border border-white/10 backdrop-blur-xl animate-slide-up max-w-5xl mx-auto" style={{animationDelay: '0.5s'}}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                Hi, I'm <span className="gradient-text font-semibold">Junaid Mollah</span>, a <span className="text-accent-400 font-semibold">Blockchain Developer</span> currently pursuing a B.Tech in Computer Science Engineering. I have hands-on experience in building 
                <span className="text-primary-400 font-semibold"> decentralized applications (dApps)</span>, designing <span className="text-accent-400 font-semibold">Ethereum smart contracts using Solidity</span>, and implementing <span className="text-purple-400 font-semibold">DAO systems</span>. Alongside blockchain, I am skilled in 
                <span className="text-primary-400 font-semibold"> full-stack web development with React.js, Node.js, and Express.js</span>. I have actively participated in multiple hackathons and worked on impactful projects that showcase my ability to develop innovative and secure blockchain-based solutions.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.7s'}}>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative flex items-center space-x-3 text-lg">
                <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                <span>View My Work</span>
                <ChevronDown className="w-6 h-6 group-hover:translate-y-2 group-hover:animate-bounce transition-all duration-300" />
              </span>
            </button>
            
            <button className="group relative px-10 py-5 glass rounded-2xl font-bold text-white border-2 border-white/30 hover:border-white/60 backdrop-blur-xl hover:bg-white/10 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
              
              <span className="relative flex items-center space-x-3 text-lg">
                <Download className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Download CV</span>
              </span>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 animate-slide-up" style={{animationDelay: '0.9s'}}>
            {[
              { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-600' },
              { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
              { icon: Mail, href: '#contact', label: 'Email', color: 'hover:bg-red-600' }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
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
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
